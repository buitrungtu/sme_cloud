import axios from 'axios';
//import { reject, resolve } from 'core-js/fn/promise';
class BaseAPI{
    GetData(url){
        return new Promise((resolve,reject)=>{
            axios.get(url).then(res=>{
                resolve(res)
            }).catch(ex =>{
                reject(ex)
            })
        })
    }
    save(){}
    delete(){}
}
export default new BaseAPI() 