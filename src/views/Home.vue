<template>
  <div class="home mainArea" >
 
    <Banner></Banner>
    <HotInfo></HotInfo>
    <Award />
    <Recommend />
    <div class="youtube">
      <div class="container">
        <div class="youtube-inner">
           <iframe width="1060px" height="596px" src="https://www.youtube.com/embed/PbTQQFdbEL4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>

    <HomeFooter />









    
  </div>
</template>

<script>
import 'bootstrap'
import Banner from '../components/home/Banner'
import HotInfo from '../components/home/Hot-Info.vue'
import Recommend from '../components/home/Recommend.vue'
import Award from '../components/home/Award'
import HomeFooter from '../components/home/Home_footer'
export default {
  name: 'home',
  components: {
    Banner,HotInfo,Recommend,Award,HomeFooter
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

.youtube{
  width: 100%;
  padding:40px;
  @media (max-width:565px) {
    padding:0px;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    .youtube-inner{
      width: 80%;
      padding-top: 44.8%;
      background-color: #666;
      position: relative;
      @media (max-width:767px) {
        width: 100%;
        padding-top: 56%;
      }
      iframe{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  
}



</style>