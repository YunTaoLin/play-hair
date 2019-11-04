<template>
  <div class="mainArea">
    <div class="serve">
      <div class="container">
        <h1>玩髮服務，邀您體驗</h1>
        <serveItem v-for="item in serveItem" :item='item' :key='item.c_title'/>
        <div class="QA">
        <h2>常見 <span>Q & A</span></h2>
        <ol>
          <li>請提早1週前預約，染燙最晚可預約時間為7點。</li>
          <li>收費方式為付現，滿2千可使用Line Pay刷卡。</li>
          <li>操作時間會因每個人的髮質、長度有所差異。</li>
          <li>指定設計師：須加價200元，可算入折扣優惠</li>
          <li>漂過頭髮屬於受損的狀態，不可進行燙髮。</li>
          <li>各分店不提供自備染膏及藥水的服務。</li>
          <li>染燙及乾性肌頭皮SPA，請於48小時後再洗髮。</li>
        </ol>
      </div>
      </div>
    </div>
    <MyFooter />
  </div>
</template>
<script>
import serveItem from '../components/Serve/Serve-item'
import MyFooter from '../components/footer'
export default {
  components:{
    serveItem,MyFooter
  },
  data(){
    return {
      serveItem:[
        {
          c_title :'洗髮',
          e_tilte :'SHAMPOO',
          price :'$250元',
          text1 : '於周一到周五預約12:00前顧客享85折優惠',
          text2 : '包含肩頸按摩、潤絲服務',
          time : '約20分鐘',
          img :"https://i.imgur.com/FHmihw3.jpg"
        },
         {
          c_title :'剪髮',
          e_tilte :'hair cutting',
          price :'A級:$1200元 | B級:$800元 | C級:$350元',
          text1 : '於周一到周五預約12:00前顧客享85折優惠',
          text2 : '包含完整洗髮服務',
          time : '約40~60分鐘',
          img :"https://i.imgur.com/VMb07rK.jpg"
        },
        {
          c_title :'染髮',
          e_tilte :'hair coloring',
          price :'一般染髮$999元 | 挑染$1800元',
          text1 : '平日9折優惠，憑學生證不限時段皆可享85折優惠',
          text2 : '包含完整洗髮、剪髮服務',
          time : '約120~180分鐘',
          img :"http://mcsara.com/wp-content/uploads/WHAT-COLOR-SHOULD-I-DYE-MY-HAIR.jpg"
        },
        {
          c_title :'燙髮',
          e_tilte :'permanent',
          price :'依需求而定，最低$1499起',
          text1 : '平日9折優惠，憑學生證不限時段皆可享85折優惠',
          text2 : '包含完整洗髮、剪髮服務',
          time : '約120~180分鐘',
          img :"https://i.imgur.com/qnj5yPS.jpg"
        },
        {
          c_title :'髮質護理',
          e_tilte :'hair treatment',
          price :'普通護理$650元 | 高級修復護理$950元',
          text1 : '平日9折優惠，憑學生證不限時段皆可享85折優惠',
          text2 : '包含完整洗髮服務',
          time : '約60~120分鐘',
          img :"https://i.imgur.com/gjR4KA0.jpg"
        },
        {
          c_title :'頭皮護理',
          e_tilte :'scalp care',
          price :'普通護理$850元 | 高級精油護理$1200元',
          text1 : '平日9折優惠，憑學生證不限時段皆可享85折優惠',
          text2 : '包含完整洗髮、SPA服務',
          time : '約60~120分鐘',
          img :"https://i.imgur.com/Zqled70.jpg"
        }
        
      ]
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
  .serve{
    padding: 5vh 3% 0;
    font-family: $tw-font;
    h1{
      font-size: 18px;
      color:$secondary-color;
      margin-bottom: 60px;
      font-weight: 400;
    }
}
.QA{
  margin: 20px 0 40px;
  @media (min-width:768px) {
    margin: 40px 0;
  }
  h2{
    color: $secondary-color;
    padding-left: 8%;
    margin-bottom: 20px;
    span{
      font-family: $eng-font;
      font-weight: 400;
    }
  }
  ol{
    padding-left: 8%;
    li{
      margin: 4px 0;
      color: #888;
      @media (min-width:768px) {
        font-size: 18px;
        margin: 8px 0;
        line-height: 2;
      }
    }
  }
}
</style>
