<template>
    <div class="award">
        <div class="mark"></div>
        <div class="container">
            <h2>玩髮二十年，值得您信賴</h2>
            <p class="title-content">1998年台北總店成立迄今，榮獲各大好評</p>
            <div class="row">
                <div class="col-10 col-md-4 item">
                    <div class="img-box">
                        <img src="../../assets/獎盃2.png" alt="">
                    </div>
                    <p>2019全美時尚之星</p>
                    <p>美容造型組 TOP1 優勝</p>
                </div>
                <div class="col-10 col-md-4 item">
                    <div class="img-box ">
                        <img src="../../assets/獎盃.png" alt="">
                    </div>
                    <p>2017~2019連續蟬聯</p>
                    <p>模擬設計-亞洲區大賽冠軍</p>
                </div>
                <div class="col-10 col-md-4 item">
                    <div class="img-box ">
                        <img src="../../assets/讚.png" alt="">
                    </div>
                    <p>享譽各大社群媒體</p>
                    <p>粉絲成長速度世界第一</p>
                </div>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
$primary-color:rgb(243, 57, 57);
$secondary-color:#739A97;
$special-color:#CC501D;
$eng-font: 'Oswald', sans-serif;
$tw-font: 'Noto Sans HK', sans-serif;

    .award{
        width: 100vw;
        padding: 10vh 0;
        background: url('../../assets/333.jpeg')  center center ;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        position: relative;
        font-family: $tw-font;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        .mark{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, #16110d 40%, rgba(82,69,60,0.45) 100%);
            opacity: .6;
        }
        .container{
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .row{
            justify-content: center;
        }
        h2{
            color:#FFF;
            font-size: 48px;
            @media (max-width:991px) {
            font-size: 32px;
            }
            @media (max-width:575px) {
                font-size: 24px;
            }
        }
        .title-content{
            color: #ccc;
            display: flex;
            align-items: center;
            text-align: center;
            @media (max-width:575px) {
                font-size: 14px;
            }
            &:after,
            &:before{
                content: '';
                height: 1px;
                width: 3em;
                margin: 0 1em;
                background-color: #CCC;
                @media (max-width:575px) {
                    width: 2em;
                }
            }
        }
        
    }

//item
.item{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .img-box{
        padding: 10% 20% 0;
        margin-bottom: 2vh;
        img{
            width: 100%;
            object-fit: cover;
            opacity: .8;
        }
    }
    p{
        color: #fff;
        font-size: 24px;
        text-align: center;
        @media (max-width:991px) {
            font-size: 18px;
        }
        @media (max-width:767px) {
            font-size: 16px;
        }

    }
}

















</style>