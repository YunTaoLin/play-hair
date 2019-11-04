<template>
    <div class="Recomment">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path class="elementor-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"/>
        </svg>
        <div class="container">
                    <h2 class="subtitle ">看看他們怎麼說</h2>
                    <div class="Recommend_group">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                    <div class="Recommend_card  wow flipInY" data-wow-duration="1s" >
                                        <div class="Recommend_card_inner" >
                                            <p class="Recommend_card_text">
                                                第一次體驗玩髮的服務就讓我驚艷，<br>
                                                設計師很有耐心聽我的想法，還會提出造型建議。<br>
                                                這邊的服務專業又多樣，大家一定要試試。



                                            </p>
                                            <h4 class="Recommend_card_title">華盛頓時尚教主 <span>--</span> Fish Yu</h4>
                                        </div>
                                        <div class="Recommend_card_icon">
                                            <img src="../../assets/設計師/設計師1.jpeg" alt="設計師1">
                                        </div>
                                    </div>
                            </div> 
                           <div class="col-12 col-md-6">
                                    <div class="Recommend_card wow flipInY" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div class="Recommend_card_inner">
                                            <p class="Recommend_card_text">
                                                當初選擇了玩髮，作為改變的開始，<br>
                                                才讓我知道時尚也能這麼簡單。<br>
                                                揚名國際的高品質，可謂是時尚界的一大福音!
                                                

                                            </p>
                                            <h4 class="Recommend_card_title">翰柏企業CEO <span>--</span> Memory Square</h4>
                                        </div>
                                        <div class="Recommend_card_icon">
                                            <img src="../../assets/設計師/設計師2.jpeg" alt="設計師2">
                                        </div>
                                    </div>
                            </div>
                            <div class="col-12 col-md-6">
                                        <div class="Recommend_card wow flipInY" data-wow-duration="1s" data-wow-delay="1s">
                                            <div class="Recommend_card_inner">
                                                <p class="Recommend_card_text">
                                                   從沒有想過能有CP值這麼高的服務，<br>
                                                    實惠的價格卻擁有卓越的水準，<br>
                                                    玩髮讓我在繁忙的生活中依然保持著時尚。 
                                                </p>
                                                <h4 class="Recommend_card_title">Taiwan Psy會長 <span>--</span> Wei Cheng</h4>
                                            </div>
                                            <div class="Recommend_card_icon">
                                                <img src="../../assets/設計師/設計師3.jpeg" alt="設計師3">
                                            </div>
                                        </div> 
                            </div>
                            <div class="col-12 col-md-6">
                                        <div class="Recommend_card wow flipInY"  data-wow-duration="1s" data-wow-delay="1.5s">
                                            <div class="Recommend_card_inner ">
                                                <p class="Recommend_card_text">
                                                    好奇為什麼閨蜜會那麼漂亮，陪同下來到玩髮，<br>
                                                    體驗一整套洗剪染燙，結果真的很滿意!<br>
                                                    從此之後，玩髮是我打理自己的唯一選擇。

                                                </p>
                                                <h4 class="Recommend_card_title">日本暢銷作家 <span>--</span> Shimodate Yuu</h4>
                                            </div>
                                            <div class="Recommend_card_icon">
                                                <img src="../../assets/設計師/設計師4.jpeg" alt="設計師4">
                                            </div>
                                        </div> 
                            </div>                         
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

    .Recomment{
        font-family: $tw-font;
        padding: 0 0 60px;
        svg{
            transform: translateY(-95%);
            fill: #fff;
            height: 40px;
            width: 100vw;
            @media (max-width:767px) {
                transform: translateY(-99%);
                height: 24px;
            }
        }
        .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
.subtitle{
    font-size: 40px;
    color: #333;
    line-height: 60px;
    margin-bottom: 60px;
}

.Recommend_card{
    padding: 0 32px;
    margin-bottom: 32px;
    position: relative;
}
.Recommend_card_inner{
    box-shadow: 0 3px 10px rgba(0,0,0,.5);
    color: #484848;
    border-radius: 4px;
    padding: 24px;
    padding-left: 48px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
@media (min-width:768px){
    .Recommend{
        padding: 40px 0 120px;
    }
    .Recommend_card_inner{
        padding: 18px;
        padding-left: 48px;
        height: 250px;
    }
}
@media (min-width:992px){
    .Recommend{
        padding: 60px 0 140px;
    }
    .Recommend_card_inner{
        padding: 32px 50px;
        height: 200px;
    }
}
.Recommend_card_title{
    align-self: flex-end;
    color: $secondary-color;
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 8px;
    @media (max-width:424px) {
            font-size: 13.5px;
        }
}
.Recommend_card_text{
    margin: 0;
    font-size: 16px;
    line-height: 28px;
    font-family:$tw-font;
    font-weight: 400;
    letter-spacing: 1px;
    color: #888;
    margin-bottom: 8px;
    br{
        @media (max-width:1199px) {
            display: none;
        }
    }
}
.Recommend_card_icon{
    box-shadow: 0 3px 10px rgba(0,0,0,.5);
    background-color: #fefefe;
    height: 64px;
    width: 64px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width:768px) {
        height: 88px;
        width: 88px;
        left: -3%;
    }
}
.Recommend_card_icon img{
    width: 80%;
    height: 80%;
    object-fit: cover;
    border-radius: 50%;
}
a:hover{
    text-decoration: none;
}
</style>