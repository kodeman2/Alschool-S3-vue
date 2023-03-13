
 <template>
 <div class="container lg:p-[100px] p-11 text-[#ffffff]">
 <nav class="flex lg:flex-row flex-col items-center lg:items-start justify-between">
  <div class="flex">

   <h2 class="text-3xl font-semibold text-[#ffff] transition-all duration-700 hover:text-[#0CCE6B] mt-[-5px]">kodeman.</h2>
  </div>
  <div class="flex text-lg font-medium text-[#ffffff] gap-4">
   <button @click=" scrollToRepos"  class="group mr-4 transition duration-300">Repos
    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#0cce6b]"></span>
   </button>

   <button @click="scrollToContact" class="group mr-1 transition duration-300">Contact Me
    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#0cce6b]"></span>
   </button>

  </div>


 
  </nav>
  <div data-aos="zoom-in"  data-aos-duration="1500" class="flex flex-col mt-20">
    <div  data-aos="fade-right" data-aos-duration="2500" class="flex flex-col">
     
      <p  class=" text-6xl font-medium w-full">hello, welcome to my <a  href="https://github.com/kodeman2" class="text-[#0cce6b] ">Github</a> portfolio.</p>
      <button @click="scrollToContact" class="mr-auto bg-[#0cce6b] text-[#000] text-base font-medium px-8 py-3 rounded-lg mt-10">Contact Me</button>
    </div>

    <div class="flex flex-col lg:flex-row gap-4 lg:gap-2 my-11">
      <div  data-aos="fade-left" data-aos-duration="1500" class="flex flex-col w-3/4 text-2xl">

        <p>{{ data.bio }}</p>
        <p class="text-3xl mt-2
        ">Github username :{{ data.login }}</p>
        <p>Location: {{ data.location }}</p>
        <p> Repositories: {{ data.public_repos }}</p>
        <div class="flex flex-row gap-4 mt-3 mr-auto p-5 rounded-lg border-2 border-[#0cce6b]">

          <p>Followers: {{ data.followers }}</p>
          <p>Following: {{ data.following }}</p>
        </div>

      </div>
      <div>
       <img :src= "data.avatar_url" alt="profile-picture" class="w-64 h-64 rounded-full"/>
      </div>
    </div>

    </div>
    <div  ref="repos">
      
      <Repolist/>
    </div>
    <div  data-aos="fade-left"  data-aos-duration="1500" class="flex flex-col m-[80px] items-center" ref="contact">
      <div class="flex flex-col items-center">

        <p class="text-3xl font-semibold text-center">Want to work with me? </p>
        <!-- redirect to send a mail button -->
        <a href="mailto:holuwakoladey@gmail.com" class=" bg-[#0cce6b] text-[#000] text-lg font-medium px-8 py-3 rounded-full mt-10 transition-all duration-1500 hover:border-2">Get in touch</a>
        <div class="flex gap-8 mt-[80px] text-lg cursor-pointer">
          <a class="hover:border-b-2 transition-all duration-1500 border-[#0cce6b]" href="https://github.com/kodeman2">

            Github
          </a>
          <a class="hover:border-b-2 transition-all duration-1500 border-[#0cce6b]" href="https://www.linkedin.com/in/olagunju-oluwakolade-13b5239a/">

            linkedin
          </a>
          <a class="hover:border-b-2 transition-all duration-500 border-[#0cce6b]" href="https://twitter.com/Kodeman_">

           Twitter
          </a>
          
      </div>
        
      </div>

     
    </div>
    <p class="mb-[-60px]">&copy Kodeman 2023 </p>
  
   </div>
 </template>

<script >
import axios from 'axios';
import Repolist from './Repolist.vue' ;


export default {
 components: {
 Repolist,
 },
 data() {
 return {
  data:{},
 };
 },
 methods: {
    scrollToRepos(){
      this.$refs['repos'].scrollIntoView({behavior: "smooth"})
    },
    scrollToContact(){
      this.$refs['contact'].scrollIntoView({behavior: "smooth"})
    },

  },
 mounted() {
    axios
      .get("https://api.github.com/users/kodeman2", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        this.data = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
 
} 


 </script>