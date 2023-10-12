import axios ,{CanceledError} from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'4cc7705bffd843ffa6d83553be5040e2'
    }
})
export {CanceledError}