<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../assets/test.webp" class="d-block w-100" alt="剪髮圖片">
          <div class="inner-text">
            <h3>完美實現<br>你的<span>想</span><span>法</span></h3>
            <a href="javascript:;" class='inner-btn'>立即預約</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/test2.jpg" class="d-block w-100" alt="美容院圖片">
          <div class="inner-text">
            <h3><span>時</span><span>尚</span><br>是一種生活態度</h3>
            <a href="javascript:;" class='inner-btn'>立即預約</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/理髮廳3.jpg" class="d-block w-100" alt="染髮">
          <div class="inner-text">
            <h3>給自己一個<br><span>改</span><span>變</span>的契機</h3>
            <a href="javascript:;" class='inner-btn'>立即預約</a>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <div class="btn-box">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </div>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <div class="btn-box">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </div>
      </a>
    </div>
</template>

<script>
</script>


<style lang="scss" scoped>
$primary-color:rgb(243, 57, 57);
$secondary-color:#739A97;
$special-color:#CC501D;
$eng-font: 'Oswald', sans-serif;
$tw-font: 'Noto Sans HK', sans-serif;


//banner
.carousel-item{
  height: 85vh ;
  position: relative;

  @media (max-width:1023px) {
    height: 60vh;
  }
  @media (max-width:767px) {
    height: 40vh;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    
  }
  &:after{
      content: '';
      background:linear-gradient(0deg, #928780 20%, rgba(255, 249, 246, 0.4) 100%);
      opacity: 0.5;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .inner-text{
      width: auto;
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      letter-spacing: 8px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 3;
      font-family: $tw-font;
      h3{
        color:#111;
        font-size: 68px;
        line-height: 68px;
        font-weight: 400;
        @media (max-width:1200px) {
          font-size: 52px;
          line-height: 52px;
        }
        @media (max-width:991px) {
          font-size: 40px;
          line-height: 40px;
        }
        @media (max-width:767px) {
          font-size: 32px;
          line-height: 32px;
        }
        @media (max-width:425px) {
          font-size: 24px;
          line-height: 24px;
        }
        span{
          display: inline-block;
          font-size: 1.3em;
          color:#000;
          font-weight: 500;
          margin: .5em 0;
        }
        span:nth-of-type(1){
          padding: 0.3em 0em  0.3em 0.2em;
          background-color:rgb(243, 57, 57,.8);
          transform: translateY(-0.2em);
          margin: 0 12px;
        }
        span:nth-of-type(2){
          padding: .2em 0em 0.3em 0.2em;
          background: rgba(238, 238, 238, 0.8);
          transform: translateY(0.1em);
          margin-right: 12px;
        }
        br{
          display: none;
          @media (max-width:375px) {
            display: block;
          }
        }
      }
      .inner-btn{
        display: inline-block;
        padding: 12px 24px;
        border: 1px solid #fefefe;
        border-radius: 1em;
        color: #fff;
        background-color: rgba(255, 255, 255, 0.2);
        margin: 20px 0;
        letter-spacing: 4px;
        transition: .3s;
        &:hover{
          text-decoration: none;
          // color: #111;
          background-color: rgba(161, 92, 92, 0.3);
        }
        @media (max-width:991px) {
          font-size: 14px;
          padding: 8px 20px;
          margin: 12px 0 20px;
        }
      }
    }
}
.carousel-indicators{
  li{
    height: 15px;
    margin: 8px;
    &.active{
      background-color: $primary-color;
      }
    }
}
.btn-box{
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 100%;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:767px) {
    padding: 10px;
    height: 40px;
    width: 40px;
  }

}
.carousel-control-prev,
.carousel-control-next{
  transition: .8s;
  opacity: 0;
  &:hover{
    opacity: 1;
  }
}

</style><style lang="scss" scoped>
$primary-color:rgb(243, 57, 57);
$eng-font: 'Oswald', sans-serif;
$tw-font: 'Noto Sans HK', sans-serif;


//banner
.carousel-item{
  height: 85vh ;
  position: relative;
  @media (max-width:1023px) {
    height: 60vh;
  }
  @media (max-width:767px) {
    height: 40vh;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    
  }
  &:after{
      content: '';
      background:linear-gradient(0deg, #928780 20%, rgba(255, 249, 246, 0.4) 100%);
      opacity: 0.5;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .inner-text{
      width: 90vw;
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      letter-spacing: 8px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      z-index: 3;
      font-family: $tw-font;
      h3{
        color:#111;
        font-size: 68px;
        line-height: 68px;
        font-weight: 400;
        @media (max-width:1200px) {
          font-size: 52px;
          line-height: 52px;
        }
        @media (max-width:991px) {
          font-size: 40px;
          line-height: 40px;
        }
        @media (max-width:767px) {
          font-size: 32px;
          line-height: 32px;
        }
        @media (max-width:425px) {
          font-size: 24px;
          line-height: 24px;
        }
        span{
          display: inline-block;
          font-size: 1.3em;
          color:#000;
          font-weight: 500;
          margin: .5em 0;
        }
        span:nth-of-type(1){
          padding: 0.3em 0.1em  0.3em 0.2em;
          background-color:rgb(243, 57, 57,.8);
          transform: translateY(-0.2em);
          margin: 0 12px;
        }
        span:nth-of-type(2){
          padding: .2em 0.1em 0.3em 0.2em;
          background: rgba(238, 238, 238, 0.8);
          transform: translateY(0.1em);
          margin-right: 12px;
        }
        br{
          display: none;
          @media (max-width:375px) {
            display: block;
          }
        }
      }
      .inner-btn{
        display: inline-block;
        padding: 12px 24px;
        border: 1px solid #fefefe;
        border-radius: 1em;
        color: #fff;
        background-color: rgba(255, 255, 255, 0.2);
        margin: 20px 0;
        letter-spacing: 4px;
        transition: .3s;
        &:hover{
          text-decoration: none;
          // color: #111;
          background-color: rgba(161, 92, 92, 0.3);
        }
        @media (max-width:991px) {
          font-size: 14px;
          padding: 8px 20px;
          margin: 12px 0 20px;
        }
      }
    }
}
.carousel-indicators{
  li{
    height: 15px;
    margin: 8px;
    &.active{
      background-color: $primary-color;
      }
    }
}
.btn-box{
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 100%;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:767px) {
    padding: 10px;
    height: 40px;
    width: 40px;
  }

}
.carousel-control-prev,
.carousel-control-next{
  transition: .8s;
  opacity: 0;
  &:hover{
    opacity: 1;
  }
}

</style>