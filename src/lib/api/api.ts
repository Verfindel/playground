import type { Query } from "./query";

async function send(query: Query) {
	// if(data != null || data != undefined || data != "") {
	// 	opts.headers['Content-Type'] = 'application/json';
	// 	opts.body = data;
	// }
    
	// if(token != null || token != undefined || token != "") {
	// 	opts.headers['Authorization'] = `Token ${token}`;
	// }

	return fetch(`${query.base}/${query.path}`, query.queryParams)
		.then((r) => r.text())
		.then((json) => {
			try {
				var resParsed = JSON.parse(json);

				if (resParsed?.status === 'error') {
					console.log(`API response error from ${query.base}/${query.path}: ${json}`);
				}

				return resParsed;
			} catch (err) {
				return json;
			}
		});
}

export async function get(query : Query) {
	return send(query);
}