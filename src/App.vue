<template>
  <div id="app">
    <div class="loading">
      <h1>Loading...</h1>
      <img src="../src/assets/LOGO.jpg" alt="">
    </div>
    <header class="js-scroll">
      <div class="container">
        <div class="nav">
            <div class="log"><img src="@/assets/LOGO.jpg" alt="LOGO"></div>
            <nav>
              <router-link to="/">HOME | 首頁</router-link>
              <router-link to="/serve">SERVE | 服務</router-link>
              <router-link to="/popularCut">POPULAR CUT | 熱門髮型</router-link>
              <router-link to="/location">LOATION | 店址</router-link>
              <a href="javascript:;" @click="FB">FB | 粉絲專頁</a>
              <router-link to="/reservation">RESERVATION | 線上預約</router-link>
            </nav>
        </div>
      </div>
        <a href="javascript:" class="menu-toggle" @click='menuToggle'>
          <span></span>
          <span></span>
          <span></span>
        </a>      
    </header>
    <div class="main">
      <div class="popup-menu">
        <div class="container-fluid">
          <div class="popup-menu-mark col-12" @click='menuToggle'></div>
            <nav class="popup-menu-nav col-8 col-sm-5">
              <!-- <h4>menu</h4> -->
              <ul>
                <li><router-link to="/"><span> HOME | 首頁</span><i class="icon icon-left-dir"></i></router-link></li>
                <li><router-link to="/serve"><span> SERVE | 服務</span><i class="icon icon-left-dir"></i></router-link></li>
                <li><router-link to="/popularCut"><span> POPULAR CUT | 熱門髮型</span><i class="icon icon-left-dir"></i></router-link></li>
                <li><router-link to="/location"><span>LOATION | 店址</span><i class="icon icon-left-dir"></i></router-link></li>
                <li><a href="javascript:;" @click="FB"><span>FB | 粉絲專頁</span><i class="icon icon-left-dir"></i></a></li>
                <li><router-link to="/reservation"><span>RESERVATION | 線上預約</span><i class="icon icon-left-dir"></i></router-link></li>
              </ul>
            </nav>  
         </div>          
      </div>
      <router-view  />
    </div>

  </div>
</template>
<script>
import $ from 'jquery'  //全域使用
export default {
  data(){
    return{
      pre:0
    }
  },
  methods:{
    menuToggle(){
        $('.js-scroll').toggleClass('active')
        $('.popup-menu').fadeToggle();
        $('.popup-menu  nav').toggleClass('nav-active')
    },
    FB(){
      alert('敬請期待');
    },
    scrollEvent(){
       $(window).on('scroll',()=>{
        let now = $(window).scrollTop();
        if(now >=200 && now > this.pre){
          $('.js-scroll').addClass('fading')
          }
        if(now < this.pre){
          $('.js-scroll').removeClass('fading')
          }
        this.pre = now;
      })
    }
  },
  mounted(){
    $('.popup-menu').hide();
    this.scrollEvent();
    setTimeout(()=>{
      $('.loading').fadeOut();
    },2000)
  },
  updated(){
    $('.js-scroll').removeClass('active')
    $('.popup-menu').fadeOut();
    $('.popup-menu  nav').removeClass('nav-active')
  }

}
</script>

<style lang="scss">
@import url('../src/assets/css/fontello.css');
$primary-color:rgb(243, 57, 57);
$secondary-color:#739A97;
$special-color:#CC501D;
$eng-font: 'Oswald', sans-serif;
$tw-font: 'Noto Sans HK', sans-serif;

//Loading
.loading{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    margin-top: 20px;
    width: 200px;
    object-fit: cover;
  }
}


//切換動畫
.updatePage{
  animation: fadeIn 1s;
  opacity: 1;
}
@keyframes fadeIn {
  from{opacity: 0;}
}

/* Header */
.main{
  overflow-x: hidden;
  user-select: none;
}
  header{
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    background: #fefefe;
    box-sizing: border-box;
    box-shadow: 0 2px 10px 4px rgba(0, 0, 0, 0.4);
    z-index: 998;
    display: flex;
    //當popup-menu打開時，強制取消透明
    &.active{
      opacity: 1  !important;
      visibility: visible !important;
    }
    @media (max-width:575px) {
      height: 60px;
    }
    &:before{
      content: '';
      width: 80px;
      height: 100%;
      background-color: $primary-color;
      position: absolute;
      top: 0;
      left: 0;
      @media (max-width:575px) {
        width: 60px;
      }
    }
    .nav{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      nav{
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        @media (max-width:991px) {
            display: none;
        }
      }
      .log{
        height: 100%;
        padding: 12px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width:1199px) {
            padding: 20px;
        }
        @media (max-width:575px) {
            padding: 10px;
        }
        img{
          height: 100%;
          object-fit: cover;
        }
      }
      a{
        display: inline-block;
        color: #242424;
        font-family: $eng-font;
        line-height: 80px;
        font-size: 12px;
        font-weight: 200;
        padding: 0 16px;
        text-decoration: none;
        position: relative;
        &:after{
          content: '';
          position: absolute;
          left: 50%;
          bottom: 25%;
          height: 2px;
          width: 0%;
          transform: translateX(-50%);
          background-color: $primary-color;
          transition: .3s;
        }
        &:hover:after{
          width: 80%;
        }
        @media (max-width:1199px) {
          padding: 0 12px;
        }
        &:nth-of-type(4){
          margin-left: 200px;
          @media (max-width:1199px) {
            margin-left: 100px;
          }
        }

      }
    }
  }
  .main{
    margin-top: 80px;
    width: 100%;
    height: 100%;
    @media (max-width:575px) {
        margin-top: 60px;
    }
  }
  .router-link-exact-active{
    color: #aaa !important;
    pointer-events: none;
  }

// .router-link-active::after{
//   width: 80% !important;
// }


/* menu-toggle */
.menu-toggle {
    display: block;
    padding: 24px;
    display: none;  
    z-index: 5;
    width: 80px;
    height: 100%;
    flex-direction: column;
    @media (max-width: 991px) {
        display: flex;
      }
    @media (max-width:575px) {
        padding: 14px;
      }
    span {
      display: block;
      width: 32px;
      background-color: #000;
      height: 2px;
      margin: 4px 0;
      transition: all 0.3s;
  }
}
.popup-menu{
  display: none;
  position: fixed;
  right: 0;
  top: 78px;
  height:100vh;
  width:100vw;
  z-index: 998;
  @media (max-width:575px){
    top: 60px;
  }
  .container-fluid{
    padding: 0;
    height: 100%;
    display: flex;
  }
  .popup-menu-mark{
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .popup-menu-nav{
    background: #ff6e6e;
    transform: translateX(0);
    transition: .5s;
    
    
    &.nav-active{
      transform: translateX(-41vw);
      @media (max-width:575px) {
          transform: translateX(-65vw);
       }
    }
    ul{
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      padding-left: 0px;
      list-style: none;
      li{
        width: 100%;
        font-size: 16px;
        line-height: 18px;
        @media (max-width:374px) {
            font-size: 14px;
        }
        a{
          display: flex;
          color: #242424;
          span{
            display: inline-block;
            width:100%;
            padding: 16px 0;
            text-align: left;
            line-height: 18px;
            order:1
          }
          i:before{
            padding: 16px 0;
            line-height: 18px;
            margin-right: 8px;
          } 
          &.router-link-exact-active{
            color: #fefefe!important;
            pointer-events: none;
          } 
        }
      }
    }
  }
}

//---------------------
//$fixed-btn
//---------------------
.fixed-btn-group{
  position: fixed;
  right: 6vw;
  bottom: 8vh;
  z-index: 99;
  @media (max-width: 992px) {
    right: 4vw;
    bottom: 8vh;
    }
  @media (max-width: 768px) {
    right: 3vw;
    bottom: 7vh;
  }
  .fixed-btn{
    font-family: $tw-font;
    background-color: rgba(92, 92, 92, 0.5);
    color: #fff;
    padding: 4px;
    width: 5em;
    height: 5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 12px 0;
    transition: .3s;
    cursor: pointer;
   
    @media (max-width: 991px) {
        padding: 0px;
        width: 4em;
        height: 4em;
      }
    
    &:hover{
      background-color: #005BB0;
      color: #FFf;
    }
    span{
      font-size: 24px;
      font-weight: 700;
      @media (max-width: 991px) {
        font-size: 18px;
      }
    }
    p{
      font-size: 14px;
      line-height: 24px;
      margin: 0;
      padding: 0;
      
    }
  }
}
//---------------------
//$header動畫
//---------------------
.js-scroll{
  transition: .3s;
}
.fading{
  opacity: 0;
  visibility: hidden;
}
</style>
