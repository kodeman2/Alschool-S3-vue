<template>
 <div class="flex flex-col">
  <h1 class="text-4xl font-medium w-full gap-4 text-center hover:text-5xl transition-all duration-700 hover:text-[#0CCE6B] ">My Repositories</h1>
  
  <div  data-aos="fade-right" data-aos-duration="2500"  class="flex mt-5" v-for="repo in Repositories" :key="repo.id">
   <router-link :to="'/repositories/' + repo.name" class="flex font-medium  p-10 border-b-2 rounded-lg my-5 w-full hover:border-2 border-[#0cce6b]">
    <div class="flex flex-col gap-3 break-all">
     <h2 class="lg:text-3xl text-xl font-medium">{{ repo.name }}</h2>

     <p class=" bg-[#0cce6b] mr-auto p-4  rounded-lg text-xl">Watchers: {{ repo.watchers }}</p>
     <p class="lg:text-2xl text-xl font-normal">{{ repo.description }}</p>
    
            

     
    </div>

   </router-link>

  </div>
  <div class="flex flex-col items-center gap-1 mt-3 m-auto p-5 rounded-lg border-2 border-[#0cce6b]">
  
   <p>Page: {{ currentPage }}</p>
   <div class="flex gap-3 mt-3">

    <button  :disabled="currentPage <= 1" @click="prevPage" class="bg-[#0cce6b] text-[#000] text-base font-medium px-8 py-3 rounded-lg ">Prev</button>
    <button :disabled="currentPage >= 10" @click="nextPage" class="bg-[#0cce6b] text-[#000] text-base font-medium px-8 py-3 rounded-lg ">Next</button>
   </div>
 </div>
 </div>
 
</template>
<script>
import axios from "axios";
export default{
 data(){
  return {
   currentPage: 1,
  
   Repositories: [],
   totalPages: 1,
  };
 },
 async mounted (){
  await this.getRepositories(this.currentPage);
 },

 methods: {
  async getRepositories(page) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/kodeman2/repos?page=${page}&per_page=5`,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    this.Repositories = response.data;
    this.totalPages = Math.ceil(response.headers["x-total-count"] / 5);
  } catch (error) {
    console.log(error);
  }
},

    async nextPage() {
      this.currentPage++;
      await this.getRepositories(this.currentPage);
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages;
      }
    },
    async prevPage() {
      this.currentPage--;
      if (this.currentPage < 1) {
        this.currentPage = 1;
        return;
      }
      await this.getRepositories(this.currentPage);
    },
  },

 

}
</script>

