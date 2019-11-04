<template>
   <div class="hotInfo">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-4 inner-text">
                    <h2>今夏熱門造型</h2>
                    <i class="icon icon-scissors"></i>
                    <p>千變萬化-看見新的自己</p>
                    <p>我們一同，探索時尚 </p>
                </div>
               
                <div class="col-12 col-lg-8 inner-pic">
                    <!-- <div class="row"> -->
                         <div class="btn-group mr-2 order-lg-1" role="group" aria-label="First group">
                            <button type="button" class="btn btn-secondary" :class='{active: sex_active}' @click="sex_active=true">女 </button>
                            <button type="button" class="btn btn-secondary" :class='{active: !sex_active}' @click="sex_active=false">男</button>
                        </div>
                        <div class="box">
                            
                            <transition  mode="out-in">
                                <div class="row" v-if='sex_active' key='girl'>
                                    <div class="col-6 col-md-4 pic-item">
                                        <img src="../../assets/hotHair/girl1.jpg" alt="女髮1">
                                    </div>
                                    <div class="col-6 col-md-4 pic-item">
                                        <img src="../../assets/hotHair/girl2.jpg" alt="女髮2">
                                    </div>
                                    <div class="col-6 col-md-4 pic-item">
                                        <img src="../../assets/hotHair/girl3.jpg" alt="女髮3">
                                    </div>
                                    <div class="col-6 col-md-4 pic-item">
                                        <img src="../../assets/hotHair/girl4.jpg" alt="女髮4">
                                    </div>
                                     <div class="col-6 col-md-4 pic-item pic-item-ex">
                                        <img src="../../assets/hotHair/girl5.jpg" alt="女髮3">
                                    </div>
                                    <div class="col-6 col-md-4 pic-item pic-item-ex">
                                        <img src="../../assets/hotHair/girl6.jpg" alt="女髮4">
                                    </div>
                                </div>
                                <div class="row" v-else key='boy'>
                                    <div class="col-6 col-md-4 pic-item">
                                        <img src="../../assets/hotHair/boy1.jpg" alt="男髮1">
                                    </div>
                                    <div class="col-6 col-md-4 pic-item">
                                        <img src="../../assets/hotHair/boy2.jpg" alt="男髮2">
                                    </div>
                                    <div class="col-6 col-md-4 pic-item">
                                        <img src="../../assets/hotHair/boy3.jpg" alt="男髮3">
                                    </div>
                                    <div class="col-6 col-md-4 pic-item">
                                        <img src="../../assets/hotHair/boy4.jpg" alt="男髮4">
                                    </div>
                                    <div class="col-6 col-md-4 pic-item pic-item-ex">
                                        <img src="../../assets/hotHair/boy5.jpg" alt="男髮3">
                                    </div>
                                    <div class="col-6 col-md-4 pic-item pic-item-ex">
                                        <img src="../../assets/hotHair/boy6.jpg" alt="男髮4">
                                    </div>
                                </div>
                            </transition>
                        </div>
                       
                    <!-- </div> -->
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path class="elementor-shape-fill" d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"/>
        </svg>
   </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return {
           sex_active:true,
           box_height:0
        }
    },
    mounted(){
        let container_width = $('.container').width()
        if (container_width < 930){
            this.box_height = container_width  ;
        }else{
            this.box_height = container_width / 2 * 0.85;
        } 
        $('.box').height(this.box_height+'px');
    }
}
</script>

<style lang="scss" scoped>
$primary-color:rgb(243, 57, 57);
$secondary-color:#739A97;
$special-color:#CC501D;
$eng-font: 'Oswald', sans-serif;
$tw-font: 'Noto Sans HK', sans-serif;
    .hotInfo{
        padding: 80px 0;
        position: relative;
        display: flex;
        align-items: center;
        z-index: 5;
        > .comtainer{height: 100% }
        .row{
            justify-content: center;
        }
        
        .inner-text{
            font-family: $tw-font;
            line-height: 2;
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            h2{
                font-size: 48px;
                font-weight: 400;
                position: relative;
                @media (max-width: 991px) {
                   font-size: 32px; 
                }
                &:before{
                    content: '';
                    width: 6.5em;
                    height: .3em;
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    transform: translateX(-50%);
                    z-index: -1;
                    opacity: .5;
                    background-color:$secondary-color ;
                    

                }
            }
            i{
                display: inline-block;
                font-size: 24px;
                margin: 16px 0;
                color: #555;
            }
            p:nth-of-type(1){
                font-size: 16px;
                color: #111 ;
                font-weight: 7;
                @media (max-width: 991px) {
                   font-size: 14px; 
                }
            }
            p:nth-of-type(2){
                margin-top:24px;
                font-size: 20px;
                @media (max-width: 991px) {
                   font-size: 16px; 
                }
            }
        }
        .inner-pic{
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            .box{
                display: flex;
                position: relative;
                height: 400px;
            }
            .pic-item{
                display: flex;
                align-items: center;
                &.pic-item-ex{
                    @media (max-width:767px) {
                        display: none;
                    }
                }
                img{
                    width: 100%;
                    height: 80%;
                    object-fit: cover;
                }
            }
            .btn-group > .btn{
                background-color: #ccc;
                color: #888;
                font-weight: 700;
                font-family: $tw-font;
                border: none;
                transition: .3s;
                height: 40px;
                &:focus{
                    box-shadow: none;
                }
                &.active{
                    background-color: $secondary-color;
                    color: #fff;
                }
            }
            
        }
        svg{
            transform: rotate(180deg) translateY(-95%);
            height: 40px;
            width: 100vw;
            fill: #fff;
            stroke:#fff;
            stroke-opacity:0;
            position: absolute;
            bottom: 0;
            @media (max-width:767px) {
                transform: rotate(180deg) translateY(-99%);
                height: 24px;
            }
        }
        
    }
.v-enter,
.v-leave-to{
    opacity: 0;
}
.v-leave,
.v-enter-to{
    opacity: 1;
}
.v-enter-active,
.v-leave-active{
    transition: .5s;
}
// .v-leave{
//     display: none;
// }
// .v-leave-active{
//     transition: 2s;
// }


</style>