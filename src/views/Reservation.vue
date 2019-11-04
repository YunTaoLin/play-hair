<template>
    <div class="resevation mainArea">
        <div class="container">
            <h1>玩髮-線上預約系統</h1>
            <div class=" form">
                <transition mode="out-in">
                <div class="form-inner" v-if="this.step != 5 && this.step != 4.5">
                    <div class="step-group">
                        <div class="setp" :class="{active: this.step == 1}">step1 <br>選擇門市</div>
                        <div class="setp" :class="{active: this.step == 2}">step2 <br>服務時段</div>
                        <div class="setp" :class="{active: this.step == 3}">step3 <br>填寫資料</div>
                        <div class="setp" :class="{active: this.step == 4}">step4 <br>確認資訊</div>
                    </div>
                </div>
                </transition>
                <transition mode="out-in">
                <!-- 第一步驟 -->
                <div class="form-store" v-if="this.step ==1" key='store'>
                    <h3>請選擇要預約的門市：</h3>
                    <select v-model="store">
                        <option value="請選擇" selected="true" disabled="true">請選擇</option>
                        <option>台北總店</option>
                        <option>忠孝復興旗艦店</option>
                        <option>台中一中街門市</option>
                        <option>台中逢甲門市</option>
                        <option>台南站前門市</option>
                        <option>高雄漢神門市</option>
                        <option>日本東京旗艦店</option>
                        <option>美國紐約旗艦店</option>
                    </select>
                    <div class="btn-group">
                        <button class="btn-next" @click="stepTo2">下一步</button>
                    </div>
                </div>
                <!-- 第二步驟 -->
                <div class="form-time" v-if="this.step ==2" key="time">
                     <div class="inner">
                        <h3>請選擇預約日期：</h3>
                        <input type="date"  v-model="date" :min='today' required="required">
                        <h3>請選擇時間：<span>上午9點~晚上9點</span></h3>
                        <input type='time' value="13:30" v-model="time" step='1800' min='09:00' max='21:00' required="required">
                        <h3>請選擇服務：</h3>
                        <select v-model="serve" >
                            <option value="請選擇" selected="true" disabled="true">請選擇服務項目</option>
                            <option value="洗髮">洗髮</option>
                            <option value="剪髮">剪髮</option>
                            <option value="染髮">染髮</option>
                            <option value="燙髮">燙髮</option>
                            <option value="髮質護理">髮質護理</option>
                            <option value="頭皮護理">頭皮護理</option>
                        </select>
                     </div>
                    <div class="btn-group">
                        <button class="btn-pre"  @click="step--">上一步</button>
                        <button class="btn-next" @click="stepTo3">下一步</button>
                    </div>
                </div>
                <!-- 第三步驟 -->
                <div class="form-user" v-if="this.step ==3" key="user">
                    <div class="inner">
                        <h3>請輸入姓名：</h3>
                        <input type="text"  v-model.trim="name" required="required">
                        <h3>請輸入連絡電話：</h3>
                        <input type="tel"  v-model.trim="tel" required="required">
                    </div>
                    <div class="btn-group">
                        <button class="btn-pre" @click="step--">上一步</button>
                        <button class="btn-next" @click="stepTo4">下一步</button>
                    </div>    
                </div>
                <!-- 第四步驟 -->
                <div class="form-check" v-if="this.step ==4" key="check">
                    <div class="info">
                        <h3>請確認資訊是否正確：</h3>
                        <p>
                            姓名：{{name}} <br>
                            電話：{{tel}} <br>
                            預約門市：{{store}} <br>
                            時段：{{date}} ， {{time}} <br>
                        </p>
                    </div>
                    <div class="btn-group">
                        <button class="btn-pre" @click="step--">上一步</button>
                        <button class="btn-next" @click="stepTo5">確認送出</button>
                    </div>    
                </div>
                <!-- 送出成功 -->
                    <div class="loading" v-if="this.step ==4.5">
                        資料送出中，請稍後<br>
                        <div class="inner-load">
                            <svg>
                                <rect id="loading-rect"></rect>
                            </svg>
                        </div>
                    </div>
                    <div class="form-scuss" v-if="this.step ==5" key="check">
                        <h2>已成功預約!</h2>
                        <p>提醒您預約時間僅保留十分鐘，逾時不候。</p>
                        <i class="icon icon-smile"></i>
                    </div>
                </transition>
                 <!-- <p class="error">有欄位還沒有填寫哦~</p> -->
                
            </div>
           
        </div>
        <myFooter />
    </div>
</template>

<script>
import myFooter from '../components/footer'
export default {
    components:{
        myFooter
    },
    data(){return{
        step:1,
        final:false,
        store:'請選擇',
        date:'',
        time:'13:30',
        serve:'請選擇',
        name:'',
        tel:'',
        
    }},
    methods:{
        
        stepTo2(){
            if(this.store=='請選擇') {alert('請填寫預約門市')}
            else {this.step=2}
        },
        stepTo3(){
            if(this.date=='') {alert('請填寫預約日期')}
            else if(this.time=='') {alert('該時段不可預約')}
            else if(this.serve=='請選擇') {alert('請選擇一個服務')}
            else {this.step=3}
        },
        stepTo4(){
            let tel_click = /^09[0-9]{8}$/;
            if(this.name=='') {alert('請填寫姓名')}
            else if(!this.tel.match(tel_click)) {alert('請填寫正確的手機號碼')}
            else {this.step = 4 }
        },
        stepTo5(){
            this.step =4.5
            setTimeout(()=>{
                this.step = 5 ;
            },5000)
        }

    },
    computed:{
        today(){
           let Today = new Date()
           let month = Today.getMonth()>9 ? Today.getMonth()+1 : '0'+ Today.getMonth()
           let date =   Today.getDate()>9? Today.getDate() : '0'+ Today.getDate()
           return Today.getFullYear()+ "-" + month+ "-" +date;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/fontello.css' ;
$primary-color:rgb(243, 57, 57);
$secondary-color:#739A97;
$special-color:#B9CDCB;
$eng-font: 'Oswald', sans-serif;
$tw-font: 'Noto Sans HK', sans-serif;
    .resevation{
        // background:url('../assets/美1.jpeg');
        background-size: cover;
        .container{
            font-family: $tw-font;
            height: 80vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            justify-content: center;
            // @media (max-width:767px) {
            //     height: 80vh;
            // }
            h1{
                font-size: 32px;
                margin-top: 60px;
                text-align: center;
                color: #333;
                margin: 40px 0;
            }
        }
       
    }
//外框
    .form{
        padding: 12px;
        border: 4px solid $special-color;
        // background:url('../assets/美1.jpeg');
        background-color: #f2f2f2;
        box-shadow: 0 0 2px 2px rgba(52, 54, 54, 0.2);
        height: 60vh;
        border-radius: 12px;
        margin: 0 40px;
        @media (max-width:767px) {
            margin: 0 0px;
        }
        .form-inner{
            position: relative;
            z-index: 2;
        }
        .step-group{
            display: flex;
            // background-color: #F00;
            height: 100px;
            justify-content: center;
            align-items: center;
            .setp{
                height: 60px;
                width: 120px;
                border: 1px solid rgb(201, 198, 198);
                margin: 0 20px;
                background: rgb(201, 198, 198);
                position: relative;
                padding-left: 8px;
                display: flex;
                align-items: center;
                color: #666;
                @media (max-width:767px) {
                    font-size: 14px;
                    margin: 0 12px;
                    &:first-child{
                        margin-left: 0;
                    }
                }
                @media (max-width:424px) {
                    font-size: 12px;
                    padding-left: 4px;
                    height: 48px;
                    &:first-child{
                        margin-left: 0;
                    }
                }
                &:after{
                    content: '';
                    border-left: 20px solid rgb(201, 198, 198);
                    border-top: 30px solid transparent;
                    border-bottom: 30px solid transparent;
                    position: absolute;
                    top: -1px;
                    right: -21px;
                    @media (max-width:424px) {
                        border-left: 20px solid rgb(201, 198, 198);
                        border-top: 24px solid transparent;
                        border-bottom: 24px solid transparent;
                        position: absolute;
                        top: -1px;
                        right: -21px;
                    }
                }
                &.active{
                    background: $special-color;
                    border-color: $special-color;
                    color:#444;
                    font-weight: 700;
                    &:after{
                        border-left: 20px solid $special-color;
                    }
                }
            }
        }
    
    }
//第一步驟
.form-store{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 40vh;
    h3{
        font-size: 24px;
        color: #444;
        margin-top: 120px;
    }
     select{
        padding: 4px 12px;
        font-size: 18px;
        margin-bottom: 60px;
    }
}
//第二步驟

.form-time{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 40vh;
    .inner{
        margin-top: 20px;
    }
    h3{
        font-size: 22px;
        color: #444;
        span{
            font-size: 14px;
            color: #888;
        }
    }
    input{
        border:1px solid #aaa;
        padding: 4px 12px;
        font-size: 16px;
        margin-bottom: 20px;
        &[type='time']{
            width: 200px;
        }
    }
     select{
        padding: 4px 12px;
        font-size: 16px;
    }
}
//第三步驟

.form-user{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 40vh;
    .inner{
        margin-top: 60px;;
    }
    h3{
        font-size: 22px;
        color: #444;
    }
    input{
        border:1px solid #aaa;
        padding: 4px 12px;
        font-size: 18px;
        margin-bottom: 20px;
    }
     select{
        padding: 4px 12px;
        font-size: 18px;
    }
}
//第四步驟

.form-check{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 40vh;
    .info{
        margin-top: 60px;;
    }
    h3{
        font-size: 24px;
        color: #444;
    }
    p{
        line-height: 2.5;
    }
}
//送出成功
.loading{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    @media (max-width:424px) {
        font-size: 24px;
    }
    svg {
    margin-top: 60px;
    width: 130px;
    height: 130px;
    rect {
            width: 130px;
            height: 130px;
            fill: none;
            stroke: $special-color;
            stroke-width: 130px;
            stroke-dashoffset: 50%;
            stroke-dasharray: 130;
            transition: 2s;
            animation: animate 1.2s linear infinite;
        }
    }
}
@keyframes animate {
    to {
        stroke-dashoffset: 250%;
    }
}
.form-scuss{
    display: flex;
    flex-direction: column;
    justify-content: center;;
    align-items: center;
    height: 40vh;
    h2{
        color: $secondary-color;
        font-size: 36px;
        margin-bottom: 40px;
    }
    i{
        font-size: 60px;
        color: $secondary-color;
    }
}


.btn-group{
    display:flex;
    justify-content: center;
    .btn-next,
    .btn-pre{
        padding: 12px 32px;
        border: none;
        margin: 0 20px;
        border-radius: 4px;
        @media (max-width:767px) {
            padding: 8px 24px;
            border-radius: 2px;
        }
        @media (max-width:374px) {
            padding: 6px 18px;
            font-size: 14px;
            margin: 0 12px;
        }
    }
    .btn-next{
        background-color: $secondary-color;
        color: #fff;
    }
    .btn-pre{
        background-color: #ccc;
        color: #888;
    }
}
.error{
    margin-top: 1em;
    font-weight: 700;
    color: $primary-color;
    display: flex;
    justify-content: center;
}
//過度動畫
.v-leave{
    opacity: 1;
}
.v-leave-active{
    transition: .5s;
}
.v-leave-to{
    opacity: 0;
}
.v-enter{
    opacity: 0;
}
.v-enter-active{
    transition: .5s;
}
.v-enter-to{
    opacity: 1;
}

</style>