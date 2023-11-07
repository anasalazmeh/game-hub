import axios from "axios";
export const Apiclient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4cc7705bffd843ffa6d83553be5040e2'
    }
});
class APICLIENT {
    endpoint;
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    GetAll = (config) => Apiclient.get(this.endpoint, config)
        .then((res) => {
        console.log(res.data);
        return res.data;
    });
    Get = () => Apiclient.get(this.endpoint)
        .then(res => res.data);
}
export default APICLIENT;
//# sourceMappingURL=API-client.js.map