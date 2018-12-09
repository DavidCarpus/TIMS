import { RequestResponse, RxHttpRequestResponse } from '@akanass/rx-http-request';
import { IncomingHttpHeaders } from 'http2';
import { bindNodeCallback, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

var fse = require('fs-extra');
var mime = require('mime-types')

const { RxHR } = require('@akanass/rx-http-request');
const CACHE_LOCATION = '/media/dcarpus/Archive/Home/Code/currentSites/miltonnh-us.com';
const DOMAIN = 'miltonnh-us.com'.toUpperCase();
const DOCUMENT_EXTENSIONS = ['.pdf', '.doc', '.docx'];

const outputFile$ = bindNodeCallback(fse.outputFile);
const readFile$ = bindNodeCallback(fse.readFile);

class CacheData {
	type = '';
	exists = false;
	cacheFullPath = '';
	timestamp?: Date;
	fetched: boolean = false;
	body: any = null;
}
const stats = (fullPath: string) => {
	try {
		return fse.statSync(fullPath)
	} catch (e) {
		return null
	}
}
let localFileExists = (fullPath: string) => {
	const tst = stats(fullPath);
	return tst ? tst.isFile() : false;
}
let localDirExists = (fullPath: string) => {
	const tst = stats(fullPath);
	return tst ? tst.isDirectory() : false;
}
let modTime = (fullPath: string) => {
	const tst = stats(fullPath);
	return tst ? tst.birthtime : null;
}

function uriToCacheURI(uri: string) {
	const stripDomain = (path: string) => {
		const ucasePath = path.toUpperCase();
		return ucasePath.indexOf(DOMAIN) >= 0
			? path.substr(ucasePath.indexOf(DOMAIN) + DOMAIN.length)
			: path;
	}
	const addIndexHTML = (path: string) => path.endsWith("/") ? path + 'index.html' : path;

	// const path = CACHE_LOCATION + (CACHE_LOCATION.endsWith('/') ? '' : '/') + stripDomain(uri);
	const path = CACHE_LOCATION + stripDomain(uri);
	return addIndexHTML(path);
}

const getHeaders$ = (uri: string): Observable<IncomingHttpHeaders> => RxHR.head(uri).pipe(
	map((data: RxHttpRequestResponse<any>) => data.response.headers))

const uriType$ = (uri: string) => getHeaders$(uri).pipe(map(data => data["content-type"] || ''))

const isBinaryType = (uriType: string): boolean => {
	if (uriType.toUpperCase().startsWith('APPLICATION/')) {
		return true;
	}
	if (uriType.toUpperCase().startsWith('TEXT/')) {
		return false;
	}
	throw "Unknown URI type" + uriType;
}

const isBinaryURI$ = (uriType$: Observable<string>): Observable<boolean> => uriType$.pipe(
	map((data) => isBinaryType(data)))

const uriCacheData = (uri: string, cacheFullPath: string): Observable<CacheData> => getHeaders$(uri).pipe(
	map(headers => {
		console.log('headers', headers);
		return Object.assign(new CacheData(), {
			type: headers["content-type"] || '',
			timestamp: new Date(headers["last-modified"] || headers["expires"] || headers["date"] || ''),
			uri: uri, body: null, exists: localFileExists(cacheFullPath),
			cacheFullPath: cacheFullPath
		})
	}))

function fetchRemoteURI(uri: string, cacheFullPath: string): Observable<CacheData> {
	return uriCacheData(uri, cacheFullPath).pipe(mergeMap(cacheData => {
		if (isBinaryType(cacheData.type)) {
			return RxHR.getBuffer(uri).pipe(mergeMap((resp: RequestResponse) =>
				outputFile$(cacheFullPath, resp.body, { encoding: 'binary' }).pipe(
					map(() => Object.assign(cacheData, { exists: true, fetched: true, body: null }))
				)
			));
		} else {
			return RxHR.get(uri).pipe(mergeMap((resp: RequestResponse) =>
				outputFile$(cacheFullPath, resp.body).pipe(
					map(() => Object.assign(cacheData, { exists: true, fetched: true, body: resp.body }))
				)
			))
		}
	}))
}

export function cacheFetchURI(uri: string): Observable<CacheData> {
	const cacheFullPath = uriToCacheURI(uri);
	if (localFileExists(cacheFullPath)) {
		const type = mime.lookup(cacheFullPath);
		const results = Object.assign(new CacheData(), {
			modTime: modTime(cacheFullPath), type: type, exists: true, cacheFullPath: cacheFullPath,
		});
		if (isBinaryType(type)) {
			return of(Object.assign(results, { body: null }))
		} else {
			return readFile$(cacheFullPath, 'utf8').pipe(
				map((readData) => Object.assign(results, { body: readData.toString() })),
			)
		}
	} else {
		return fetchRemoteURI(uri, cacheFullPath);
	}
}
