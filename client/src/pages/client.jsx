
export function fetch(apiPath,metadata){
    const baseURL = "https://auth-app-6h8d.onrender.com"
    return fetch(baseURL+apiPath,metadata);
}