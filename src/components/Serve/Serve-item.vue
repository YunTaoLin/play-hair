<template>
    <div class="col-12 serve-item">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="serve-pic">
              <img :src="item.img" alt="洗髮">
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="serve-info">
              <h2>{{item.c_title}}<span>{{item.e_tilte}}</span></h2>
              <p>
                {{'原價：'+item.price}}<br>
                {{item.text1}}<br>
                {{'■ '+item.text2}}<br>
                {{'服務時間：'+item.time}}
              </p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    props:{
       item:{
            c_title:String,
            e_tilte:String,
            price:String,
            text1:String,
            text2:String,
            time:String,
            img:String
       }
    }
}
</script>

<style lang="scss" scoped>
$primary-color:rgb(243, 57, 57);
$secondary-color:#739A97;
$special-color:#CC501D;
$eng-font: 'Oswald', sans-serif;
$tw-font: 'Noto Sans HK', sans-serif;
     .serve-item{
        padding: 0;
        margin-top: 5vh;
        .serve-pic{
          width: 100%;
          img{
            width: 100%;
            object-fit: cover;
          }
        }
        .serve-info{
          padding: 2vh 0;
          h2{
            color: #333;
            position: relative;
            padding-left: .5em;
            @media (max-width:375px) {
              font-size: 24px;
            }
            &:after{
              content: '';
              height: 1.2em;
              width: .25em;
              position: absolute;
              left: 0;
              top: 0;
              background-color: $primary-color;
              opacity: .8;
            }
            span{
              margin-left: .5em;
              font-family: $eng-font;
              font-size: .7em;
              letter-spacing: 1px;
              text-transform: uppercase;
            }
          }
          p{
            padding-top: 2%;
            line-height: 2;
            color: #666;
            @media (max-width:767px) {
              font-size: 14px;
            }
          }
        }
      }

</style>