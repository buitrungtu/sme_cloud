<template>
    <div class="textbox">
        <div class="cb-label" v-show="label">{{this.label}} <span style="color:red" v-show="required">*</span> </div>
        <div class="cb-content" :class="{focus:isFocus,triggerErr:triggerErr}" v-show="!textarea" >
            <input ref="input"
                type="text" :style="TextAlign" 
                class="cb-input"
                @focus="isFocus=true" @blur="checkRequired()"
                v-bind="$attrs"
                v-on="inputListeners"
                v-model="content" 
                @keypress="isNumber($event)"
            >
        </div>
    </div> 
</template>

<script>
import {busData} from '@/main.js';
    export default {
        props:{
            textarea:Boolean,
            label:{
                type:String,
                default:''
            },
            required:Boolean,
            textAlign:{
                type:String,
                default:'left'
            },
            number:{
                type:Boolean,
                default:false
            },
            ID:String,
            value: {
                type: [String,Number],
                default: ''
            },
            autofocus:Boolean,
            trigger:Boolean,
            type:String,
        },
        created(){
            if(this.ID == 'ObjName'){
                busData.$on('completeName',(name)=>{
                    this.content = name;
                })
            }
        },
        data(){
            return{
                isFocus:false,
                content : this.value,
                triggerErr:false
            }
        },
        methods:{
           checkRequired(){
               this.isFocus = false;
               if(this.required == true){
                   if(!this.content){
                       this.triggerErr= true;
                   }else{
                       this.triggerErr= false;
                   }
               }
           },
           focusInput(){
              this.$refs.input.focus();
           },
            isNumber(e){
                if(this.number){ // nếu input là number (Không cho nhập chữ)
                    e = (e) ? e : window.event;
                    var charCode = (e.which) ? e.which : e.keyCode;
                    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                        e.preventDefault();
                    } 
                }
            },
           
        },
        mounted(){
            if(this.autofocus == true){
                this.focusInput();
            }
        },
        computed:{
            TextAlign(){
                return 'text-align: '+ this.textAlign;
            },
            inputListeners(){
                let vm = this;
                return Object.assign({},this.$listeners,{
                    input: function (event) {
                        vm.$emit('input', event.target.value)
                    }
                })
            }
        },watch:{
            trigger:function(){
                this.triggerErr = this.trigger;
                this.$refs.input.focus();
            },
            content:function(){
                if(this.type == 'money'){
                    var x = this.content;
                    x = x.replace(/\./g, ""); // xóa hết dấu . cũ đi
                    x = x.split("").reverse().join(""); // đảo chuỗi
                    x = x.replace(/.../g, function (e) { // cứ 3 ký tự thì thêm 1 dấu chấm
                        return e + ".";
                    });
                    x = x.split("").reverse().join("");// đảo lại chuỗi
                    x = x.replace(/^\./, ""); // xóa đi dấu . thừa ở đầu chuỗi nếu có
                    this.content = x;
                }
            },
            value:function(){
                this.content = this.value;
            }
        },
        
    }
</script>

<style scoped>
.textbox{
    width: 100%;
    position: relative;
    height: 100%;
}
.cb-label{
    font-size: 12px;
    font-weight: 700;
    color: #212121;
    padding-bottom: 4px;
}

.cb-content{
    width: 100%;
    display: flex;
    border: 1px solid #babec5;
    border-radius: 2px;
    background-color: #fff;
    overflow: hidden;
    height: 31px;
}
.cb-content-2{
    width: 100%;
    display: flex;
    border: 1px solid #babec5;
    border-radius: 2px;
    background-color: #fff;
    overflow: hidden;
    height: 65px;
}
.cb-input{
    border: none;
    padding: 0px 10px;
    width: 100%;
    font-size: 13px;
    color: #000;
} 
.input-area{
    border: none;
    padding: 8px 10px;
    width: 100%;
    font-size: 13px;
    color: #000;
    resize: none;
    font-weight: 400;
}
.focus{
    border-color: #2ca01c;
}
.triggerErr{
    border-color: red !important;
}

</style>