import axios from 'axios';
var API = {

    GetData(url){
        axios({
            method:'GET',
            url:url
        }).then(function(res){
            return res.data;
        }).catch(function(err){
            console.log('Có lỗi');
        })
    }





}