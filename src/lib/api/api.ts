import { Query } from "./query";

const base = 'https://api.realworld.io/api';

async function send( method: string, path: string, token: string, data: string ) {
	let opts = new Query(method);

	if(data != null || data != undefined || data != "") {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = data;
	}
    
	if(token != null || token != undefined || token != "") {
		opts.headers['Authorization'] = `Token ${token}`;
	}

	return fetch(`${base}/${path}`, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				var resParsed = JSON.parse(json);

				if (resParsed?.status === 'error') {
					console.log(`API response error from ${base}/${path}: ${json}`);
				}

				return resParsed;
			} catch (err) {
				return json;
			}
		});
}

export function get(path: string, token: string) {
	return send('GET', path, token, "");
}