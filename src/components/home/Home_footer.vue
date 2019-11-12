<template>
   <div class="footer">
        <div class="info">
            <div class="row">
                <div class="qrCode">
                    <img src="../../assets/QRCode.png" alt="">
                </div>
                <div class="info-inner">
                    <p>
                        玩髮-實現你的想法<br>
                        提供各種造型、髮質護理服務，<br class="sp-br">給您既舒適又滿意的高品質。
                    </p>
                    <p>
                        平日晚上與假日顧客較多，<br class="sp-br">請先來電或線上預約<br>
                        <span>Weekdays and holidays, please call or make an online reservation.</span>
                        
                    </p>
                </div>
            </div>
        </div>
         <div class="container">
             <nav>
                <router-link to="/serve">服務</router-link>
                <router-link to="/popularCut">髮型</router-link>
                <router-link to="/location">店址</router-link>
                <a href="javascript:;" @click="FB">粉絲專頁</a>
                <router-link to="/reservation">線上預約</router-link>
            </nav>
         </div>
        <div class="coyRight"><img src="../../assets/icon-去背.png" alt=""> 玩髮 - 模擬專案 Copyright © YunTao.Lin ｜<a href="https://github.com/YunTaoLin/play-hair"> Github  </a></div>
   </div>
</template>

<script>
export default {
    methods:{
        FB(){
            alert('敬請期待');
        }
    }
}
</script>

<style lang="scss" scoped>
$primary-color:rgb(243, 57, 57);
$secondary-color:#739A97;
$special-color:#CC501D;
$tw-font: 'Noto Sans HK', sans-serif;
$eng-font: 'Oswald', sans-serif;
    .footer{
        padding: 40px 10vw 20px;
        background-color: $secondary-color;
        font-family: '微軟正黑體';
        display: flex;
        flex-direction: column;
        align-content: center;
        color: #eee;
        .row{
            justify-content: center;
        }
        .info{
            display: flex;
            justify-content: center;
            align-content: center;
            margin-bottom: 40px;
            .info-inner{
                margin:0 20px;
                letter-spacing: 2px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                @media (max-width:767px) {
                    text-align: center;
                    line-height: 2;
                }
                p:nth-of-type(1){
                    padding: 8px 0;
                    border-bottom: 1px solid #fff;
                }
                p:nth-of-type(2){
                    font-size: 15px;
                }
                span{
                    font-family: $eng-font;
                }
                @media (min-width:768px) {
                    .sp-br{
                        display: none;
                    }
                }

            }
            
        }
        nav{
            padding: 0 30%;
            width: 100%;
            display: flex;
            justify-content: space-around;
            
            @media (max-width:767px) {
                flex-direction: column;
            }
            a{
                color: #eee;
                font-size: 14px;
                transition: .5s;
                text-align: center;
                margin-bottom: 24px;
                &:hover{
                    text-decoration: none;
                    transform: scale(1.2);
                }
            }
        }
        .coyRight{
            font-size: 14px;
            margin-bottom: 24px;
            text-align: center;
            vertical-align: middle;
            img{
                width: 1.5em;
                height: 1.5em;
                object-fit: cover;
                margin: 0 4px 1px;
            }
            a{
                color:#eee;
                font-family: $eng-font;
                margin-left: 4px;
                transition: .3s;
                letter-spacing: 1px;
                font-weight: 600;
                &:hover{
                    text-decoration: none;
                    color: #444;
                }
            }
        }

    }
</style>