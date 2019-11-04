<template>
    <div class="location mainArea">
        <div class="container">
            <select  v-model="area" class="area">
                <option value="tw">全部</option>
                <option value="tp">北部地區</option>
                <option value="tz">中部地區</option>
                <option value="tn">南部地區</option>
                <option value="other">海外分部</option>
            </select>
            <div class="item" v-for='item in nowObj' :key='item.title'>
                <div class="row item-inner">
                    <div class="col-12 col-lg-6 info">
                        <h2>{{item.title}}</h2>
                        <p>
                            地址：<br class="onlySM">{{item.location}}<br>
                            電話：{{item.tel}}</p>
                        <div class="openTime">
                            <P >
                                <span> 營業時間：</span><br>
                                {{item.time1}} <br>
                                {{item.time2}} <br>
                                {{item.time3}} <br>
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 ">
                        <div class="map">
                            <iframe :src="item.mapScr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MyFooter/>
    </div>
</template>

<script>
import MyFooter from '../components/footer'
export default {
    components:{
        MyFooter
    },
    data(){
        return {
            area:'tp',
            obj:[
                {
                    area:'tp',
                    title:'台北總店',
                    location:'110台北市信義區信義路五段0號',
                    tel:'(02)2025-1234',
                    time1:'週一-週五 09:00-21:30',
                    time2:'週六-週日 11:00-22:00 ',
                    time3:'營業結束前半小時停止排隊',
                    mapScr:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0337982990195!2d121.56491741537876!3d25.03292704448771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb11842c25d%3A0x97ce9970c747522!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5L-h576p6Lev5LqU5q61!5e0!3m2!1szh-TW!2stw!4v1572788478958!5m2!1szh-TW!2stw'
                },
                 {
                    area:'tp',
                    title:'忠孝復興旗艦店',
                    location:'100台北市中正區忠孝東路二段0號',
                    tel:'(02)2025-4567',
                    time1:'週一-週五 09:00-21:30',
                    time2:'週六-週日 11:00-22:00 ',
                    time3:'營業結束前半小時停止排隊',
                    mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.6824908309022!2d121.52924222921584!3d25.04323661402378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97b12b447d1%3A0x106b5b44a3baa5f0!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A5b-g5a2d5p2x6Lev5LqM5q61!5e0!3m2!1szh-TW!2stw!4v1572832253735!5m2!1szh-TW!2stw"
                },
                {
                    area:'tz',
                    title:'台中一中街門市',
                    location:'404台中北區一中商圈0號',
                    tel:'(04)881-4567',
                    time1:'週一-週五 09:00-21:00',
                    time2:'週六-週日 11:00-21:30 ',
                    time3:'營業結束前半小時停止排隊',
                    mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.6434543456526!2d120.68281741536751!3d24.149156479342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d68e69dfb63%3A0x913519f67c42519a!2z5LiA5Lit5ZWG5ZyI!5e0!3m2!1szh-TW!2stw!4v1572832489514!5m2!1szh-TW!2stw"
                },
                {
                    area:'tz',
                    title:'台中逢甲門市',
                    location:'407台中市西屯區文華路',
                    tel:'(04)881-7788',
                    time1:'週一-週五 09:00-21:00',
                    time2:'週六-週日 11:00-21:30 ',
                    time3:'營業結束前半小時停止排隊',
                    mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.805583879826!2d120.64407926536785!3d24.17855017820123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469162259b6852b%3A0xf1a08e8dacfe639!2z6YCi55Sy5aSc5biC!5e0!3m2!1szh-TW!2stw!4v1572838151564!5m2!1szh-TW!2stw"
                },
                {
                    area:'tn',
                    title:'台南站前門市',
                    location:'700台南市中西區中山路0段0號',
                    tel:'(06)6901-457',
                    time1:'週一-週五 09:00-20:40',
                    time2:'週六-週日 11:00-21:00 ',
                    time3:'營業結束前半小時停止排隊',
                    mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.7900234164485!2d120.20638151535364!3d22.994747623136867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e76897d8fd83d%3A0x14910a6123330ea4!2zNzAw5Y-w5Y2X5biC5Lit6KW_5Y2A5Lit5bGx6Lev!5e0!3m2!1szh-TW!2stw!4v1572834612678!5m2!1szh-TW!2stw"
                },
                {
                    area:'tn',
                    title:'高雄漢神門市',
                    location:'813高雄市左營區博愛二路0號',
                    tel:'(07)520-4567',
                    time1:'週一-週五 09:00-20:40',
                    time2:'週六-週日 11:00-21:00 ',
                    time3:'營業結束前半小時停止排隊',
                    mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.75176944696!2d120.3011071153499!3d22.663041935355338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0503fd408409%3A0x96599d9865afe589!2zODEz6auY6ZuE5biC5bem54ef5Y2A5Y2a5oSb5LqM6Lev!5e0!3m2!1szh-TW!2stw!4v1572837887154!5m2!1szh-TW!2stw"
                },
                {
                    area:'other',
                    title:'日本東京旗艦店',
                    location:'〒110-0005 日本東京都文京區湯島二丁目',
                    tel:'(012)345-6789',
                    time1:'週一-週五 09:00-22:00',
                    time2:'週六-週日 08:00-22:30 ',
                    time3:'營業結束前半小時停止排隊',
                    mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12958.719527897656!2d139.756963218293!3d35.70949440688833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c2474a30781%3A0x1d604f9a127ca6fd!2zNCBDaG9tZSDmua_ls7bmlofkuqzljYDmnbHkuqzpg73ml6XmnKw!5e0!3m2!1szh-TW!2stw!4v1572835368479!5m2!1szh-TW!2stw"
                },
                {
                    area:'other',
                    title:'美國紐約旗艦店',
                    location:'Second Ave. bet, New York, NY 10022',
                    tel:'202-609-9675',
                    time1:'週一-週五 09:00-22:00',
                    time2:'週六-週日 08:00-22:30 ',
                    time3:'營業結束前半小時停止排隊',
                    mapScr:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12088.128543323335!2d-73.95953190881451!3d40.761317922090555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e66c9885cb%3A0xb876db932621447b!2sTramway%20Plaza!5e0!3m2!1szh-TW!2stw!4v1572835716629!5m2!1szh-TW!2stw"
                }
            ]
        }
    },
    computed:{
        nowObj(){
            if(this.area == 'tw'){ return this.obj}
            let newArray= this.obj.filter(item =>{ return item.area == this.area})
            return newArray
        }
    },
    mounted(){
        window.scrollTo(0,0)
        let classVal = document.querySelector('.mainArea').getAttribute("class");
        classVal = classVal.concat(" updatePage");
        document.querySelector('.mainArea').setAttribute("class",classVal );
    }
}
</script>

<style lang="scss" scoped>
$primary-color:rgb(243, 57, 57);
$secondary-color:#739A97;
$special-color:#CC501D;
$eng-font: 'Oswald', sans-serif;
$tw-font: 'Noto Sans HK', sans-serif;
*{
    font-family: $tw-font;
}
.area{
    margin-top: 60px;
    font-size: 24px;
    margin-left: 20px;
    padding:4px 12px;

    &:focus{
        outline: none;
    }
}
.item{
    margin: 8vh 0;
    color: #666;
    line-height: 2;
    .item-inner{
        align-items: center;
        .info{
            padding:0 40px;
            h2{
                display: inline-block;
                font-size: 36px;
                position: relative;
                margin-bottom: .5em;
                @media (max-width:991px) {
                    font-size: 24px;
                }
                &:before{
                    content: '';
                    height:8px ;
                    width: 100%;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    z-index: -1;
                    background-color: $secondary-color;
                    opacity: .5;
                }
            }
            p{
                font-size: 18px;
                @media (max-width:991px) {
                    font-size: 16px;
                }
                .onlySM{
                    display: none;
                    @media (max-width:991px) {
                        display: inline-block;
                    }
                }
            }
        }
        .openTime{
            span{
                font-size: 22px;
                @media (max-width:991px) {
                    font-size: 18px;
                }
            }
        }
        .map{
            width: 88%;
            padding-top: 66%;
            background: #666;
            position: relative;
            margin: 0 auto;
            iframe{
                // border: 1px solid rgba(170, 170, 170, 0.425);
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                object-fit: cover;
                margin: 0 auto;

            }
        }


       
    }
    
}
</style>