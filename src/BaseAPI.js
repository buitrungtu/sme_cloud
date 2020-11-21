import axios from 'axios';
class BaseAPI{
    Get(url){
        return new Promise((resolve,reject)=>{
            axios.get(url).then(res=>{
                resolve(res)
            }).catch(ex =>{
                reject(ex)
            })
        })
    }

    GetObj(url,id){
        return new Promise((resolve,reject)=>{
            axios({
                method:'get',
                url:url + '/' + id,
            }).then(res=>{
                resolve(res)
            }).catch(err =>{
                reject(err)
            })
        })
    }

    Post(url,obj){
        return new Promise((resolve,reject)=>{
            axios({
                method:'post',
                url:url,
                data:obj,
            }).then(res=>{
                resolve(res)
            }).catch(err =>{
                reject(err)
            })
        })
    }
    Put(url,id,obj){
        return new Promise((resolve,reject)=>{
            axios({
                method:'put',
                url:url+'/'+id,
                data:obj,
            }).then(res=>{
                console.log(res);
                resolve(res)
            }).catch(err =>{
                reject(err)
            })
        })
    }
    
    Delete(url,id){
        return new Promise((resolve,reject)=>{
            axios({
                method:'delete',
                url:url + '/' + id,
            }).then(res=>{
                resolve(res)
            }).catch(err =>{
                reject(err)
            })
        })
    }
}
export default new BaseAPI() 