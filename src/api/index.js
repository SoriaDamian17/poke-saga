export function apiCall(method, url) {
    return fetch(url, {
       method 
    }).then(resp => resp.json());
}