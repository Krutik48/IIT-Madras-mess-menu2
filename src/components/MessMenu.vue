<template>
  <div class="d-flex justify-content-center flex-column align-items-center my-2">
    <div class="head-div">
      <h1 class="menu-title">{{ current_menu }} Mess Menu</h1>
      <h2 class="menu-week">{{ current_week }} Week </h2>
      <div class="head-line"></div>
    </div>

    <div class="toogle-btn d-flex justify-content-center flex-row align-items-center">
      <button @click="toogleMessMenu" class="btn btn-primary mx-2">Change Mess</button>
      <button @click="toogleWeek" class="btn btn-dark mx-2">Change Week</button>
    </div>

    <h2 class="day-title">{{ current_day}} Menu</h2>
    <div class="card mx-auto anim" id="card" style="width: 18rem;">
        <img :src="imgSrc" class="card-img-top img-fluid" ref="topCard">
        <div class="card-body">
          <h5 class="card-title" id="card-title">{{ current_title }}</h5>
          <li class="card-text" v-for="item in items" :key="item">{{ item }}</li>
        </div>
    </div>
    <h2 class="full-title" id="full_menu_title">{{ full_munu_title }}</h2>
    <div class="d-flex justify-content-center flex-row flex-wrap">
      <div class="card full-card anim" style="width: 18rem;">
          <img :src="bfImgSrc" class="card-img-top img-fluid"/>
          <div class="card-body">
            <h5 class="card-title" id="card-title">Breakfast Menu</h5>
            <li class="card-text" v-for="item in breakfast_items" :key="item">{{ item }}</li>
          </div>
      </div>
      <div class="card full-card anim" style="width: 18rem;">
          <img :src="lunchImgSrc" class="card-img-top img-fluid"/>
          <div class="card-body">
            <h5 class="card-title" id="card-title">Lunch Menu</h5>
            <li class="card-text" v-for="item in lunch_items" :key="item">{{ item }}</li>
          </div>
      </div>
      <div class="card full-card anim" style="width: 18rem;">
          <img :src="dinnerImgSrc" class="card-img-top img-fluid" />
          <div class="card-body">
            <h5 class="card-title" id="card-title">Dinner Menu</h5>
            <li class="card-text" v-for="item in dinner_items" :key="item">{{ item }}</li>
          </div>
      </div>
    </div>
    <div class="toogle-btn d-flex justify-content-center flex-row align-items-center">
      <button  @click="previous" id="previousBtn" class="btn btn-dark mx-2 nav-btn">Previous</button>
      <button  @click="next" id="nextBtn" class="btn btn-dark mx-2 nav-btn">Next</button>
    </div>
    <a href="https://linktr.ee/mmcc_iitm" class="link-dark feedback-link">
      <p id="feedback">Mess Feedback</p>
    </a>
    <div class="footer-line"></div>
    <h6 class="footer">Developed By Krutik</h6>
  </div>

</template>

<script>
import data from "../data"
import mealIcon from "../assets/meal.jpg"
import imageData from "../imageData"
export default {
  name: 'MessMenu',
  data(){
    return{
      mealImg: mealIcon,
      current_menu : "North", // north or south
      current_week : "Odd",   // odd or even
      current_day : "",       // "sunday", "monday".....
      current_hour : "",      
      current_time : "",
      current_title: "",      // "Let's do dinner"
      items: "",          // for current menu
      breakfast_items:"", // for lower cards
      lunch_items:"",     // for lower cards
      dinner_items:"",    // for lower cards
      data_menu: "north_menu_odd",
      data_time : "",
      day_no_for_full_munu: 0,
      day_for_full_menu : "",
      full_munu_title : "Today's Full Menu",
      weekday : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      data: data,
      imgData : imageData,
      imgSrc:"",
      bfImgSrc:"",
      lunchImgSrc:"",
      dinnerImgSrc:"",
      south_menu: [],
    };
  },
  created(){
    let menu  = JSON.parse(localStorage.getItem("menu"))
    if(menu){
      this.current_week = menu[0];
      this.current_menu = menu[1]
      if(this.current_menu==="North"){
        if(this.current_week=="Odd"){
          this.data_menu = "north_menu_odd"
        }
        else{
          this.data_menu = "north_menu_even"
        }
      }
      else{
        if(this.current_week=="Odd"){
          this.data_menu = "south_menu_odd"
        }
        else{
          this.data_menu = "south_menu_even"
        }
      }
    } 
    
  },
  methods: {
    toogleMessMenu(){
      if(this.current_menu==="North"){
        this.current_menu = "South"
        if(this.current_week==="Odd") this.data_menu = "south_menu_odd"
        else this.data_menu = "south_menu_even"
      }
      else{
        this.current_menu = "North"
        if(this.current_week==="Odd") this.data_menu = "north_menu_odd"
        else this.data_menu = "north_menu_even"
      }
      document.getElementById("card").classList.remove("anim");
      setTimeout(() => {
        document.getElementById("card").classList.add("anim");
      }, 1);
      this.setItmes();
    },
    toogleWeek(){
      if(this.current_week==="Odd"){
        this.current_week = "Even"
        if(this.current_menu==="North") this.data_menu = "north_menu_even"
        else this.data_menu = "south_menu_even"
      }
      else{
        this.current_week = "Odd"
        if(this.current_menu==="North") this.data_menu = "north_menu_odd"
        else this.data_menu = "south_menu_odd"
      }
      document.getElementById("card").classList.remove("anim");
      setTimeout(() => {
        document.getElementById("card").classList.add("anim");
      }, 1);
      this.setItmes();
    },
    previous(){
      if(this.day_no_for_full_menu!==0) this.day_no_for_full_munu--;
      this.day_for_full_menu = this.weekday[this.day_no_for_full_munu];
      this.setItmes();
    },
    next(){
      if(this.day_no_for_full_munu<6){
        this.day_no_for_full_munu++;
      }
      this.day_for_full_menu = this.weekday[this.day_no_for_full_munu];
      this.setItmes();
    },
    setItmes(){
      if(this.day_no_for_full_munu==0){
        document.getElementById("previousBtn").classList.add("disabled");
      }
      else{
        document.getElementById("previousBtn").classList.remove("disabled");
      }
      if(this.day_no_for_full_munu==6){
        document.getElementById("nextBtn").classList.add("disabled");
      }
      else{
        document.getElementById("nextBtn").classList.remove("disabled");
      }
      if(this.current_day==this.day_for_full_menu){
        this.full_munu_title = "Today's Full Menu"
      }
      else{
        this.full_munu_title = this.day_for_full_menu + " Menu"
      }
      this.items = data[this.data_menu][this.current_day][this.data_time]
      this.breakfast_items = data[this.data_menu][this.day_for_full_menu]["bf"]
      this.lunch_items = data[this.data_menu][this.day_for_full_menu]["lunch"]
      this.dinner_items = data[this.data_menu][this.day_for_full_menu]["dinner"]
      this.imgSrc = this.imgData[this.data_menu][this.current_day][this.data_time]
      this.bfImgSrc =this.imgData[this.data_menu][this.day_for_full_menu]["bf"]
      this.lunchImgSrc =this.imgData[this.data_menu][this.day_for_full_menu]["lunch"]
      this.dinnerImgSrc =this.imgData[this.data_menu][this.day_for_full_menu]["dinner"]
      if(this.imgSrc==""){
        this.imgSrc = this.mealImg
      }
      if( this.bfImgSrc=="") this.bfImgSrc = this.mealImg
      if(this.lunchImgSrc=="") this.lunchImgSrc = this.mealImg
      if(this.dinnerImgSrc=="") this.dinnerImgSrc = this.mealImg
      this.saveWeek()
    },
    saveWeek(){
      localStorage.setItem("menu",JSON.stringify([this.current_week,this.current_menu]))
    }
  },
  mounted(){
    var today = new Date();
    this.current_hour = today.getHours();
    this.current_day = this.weekday[today.getDay()];
    this.day_no_for_full_munu = today.getDay();
    this.day_for_full_menu = this.weekday[today.getDay()];
    
    if(this.current_hour>=10 && this.current_hour<15){
      this.current_title = "Let's do lunch"
      this.data_time = "lunch"
      this.setItmes()
    }
    else if(this.current_hour>=15 && this.current_hour<24){
      this.current_title = "Let's do dinner"
      this.data_time = "dinner"
      this.setItmes()
    }
    else{
      this.current_title = "Let's do breakfast"
      this.data_time = "bf"
      this.setItmes()
    }
   
  }
}
</script>

<style scoped>
.card-title{
  font-family: 'Poppins', sans-serif;
}
.card-text{
  font-family: 'Poppins', sans-serif;
}
.card{
  overflow: hidden;
  border: 0px;
  transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
  box-shadow: 0px 5px 10px gray;
}
.anim{
  animation: post-card-anim 0.7s ease-out;
}
.full-card{
  margin:20px;
}
.menu-title{
  text-align: center;
  font-family: "Raleway", sans-serif;
  color: #080808;
  font-size: 40px;
  font-weight: 400;
}

.menu-week{
  text-align: center;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 4px;
  line-height: 3em;
  color: rgba(0, 0, 0, 0.4);
}
.head-line{
  margin: auto;
  width: 80vw;
  height: 2px;
  margin-top: -5px; 
  margin-bottom: 20px;
  background-color: red;
}
.footer-line{
  background-color: red;
  width: 80vw;
  height: 2px;
  margin-top: 30px;
}
.day-title  {
  font-size:30px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  color:gray;
}
.feedback-link{
  margin-bottom: -20px;
}
.footer{
  margin-top:10px;
  color:gray;
  font-family: "Raleway", sans-serif;
}
.full-title{
  font-size:30px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  color:gray;
  margin-top: 50px;
}
.card-img-top{
  height: 200px;
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -o-transition: all 0.8s;
  transition: all 0.8s;
}
.card-img-top:hover{
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  transform: scale(1.1);
}
.nav-btn{
  width: 100px;
}
.toogle-btn{
  margin-bottom: 20px;
}

@keyframes post-card-anim{
    0%{
        transform: scale(0);
        opacity: 0;
    }
    40%{
        transform: scale(1.25);
    }
    60%{
        transform: scale(1);
    }
    80%{
        transform: scale(1.1);
    }
    100%{
        transform: scale(1);
        opacity: 100;
    }
}
</style>
