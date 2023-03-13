<template>
  <div class="flex flex-col lg:flex-row gap-11  items-center justify-center  mt-[140px] text-white">
    

      <div data-aos="fade-down-right"  data-aos-duration="1500" class="flex">
        
          <router-link class="" to="/">
            <button class="bg-[#0cce6b] text-[#000] text-base font-medium px-8 py-3 rounded-lg hover:bg-[#98f5c5] ">
              Back
            </button>
          </router-link>
        
      </div>
      <div data-aos="flip-right" data-aos-duration="1500" class="flex flex-col border-2 p-5 hover:border-[#0cce6b] rounded-lg w-[300px] lg:w-[400px]">
  
        <div class="flex flex-row justify-between ">
          <img class="w-11 h-11 rounded-lg" :src="repository.owner.avatar_url" alt="avatar" />
  
  
          <h1 class="text-xl">{{ repository.name }}</h1>
        </div>
        
        
          <p class="border-2 border-[#0cce6b] rounded-lg mt-5 p-4">Description: {{ repository.description }}</p>
          <p class="text-red-700 font-medium text-xl mt-3 pl-2
          "> {{ repository.language }}</p>
          <p class="font-normal text-base pl-2">Size: {{ repository.size }}</p>
  
          <div data-aos="zoom-in"  data-aos-duration="3000" class="flex ml-auto">
            <a :href="repository.html_url" class="bg-[#0cce6b] text-[#000] text-base font-medium px-8 py-3 rounded-lg mt-5 hover:bg-[#98f5c5]">View on Github</a>
  
  
          </div>
       
      </div>
   
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      repository: {},
    };
  },
  async created() {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/kodeman2/${this.$route.params.name}`
      );
      this.repository = response.data;
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  },
};

</script>