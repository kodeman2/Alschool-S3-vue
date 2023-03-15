<template>
  <div class="container">
    <div class="flex items-center justify-center mt-[120px]">
      <div class="flex flex-col text-white gap-5 items-center justify-center">
        <img src="../assets/error.svg" alt="404" />
        <h1 class="text-4xl font-semibold">Oops!</h1>
        <p class="text-xl lg:w-[500px]">Something went wrong. The page you are looking for might have been removed or temporarily unavailable.</p>
        <router-link to="/">
          <button class="bg-[#0cce6b] text-[#000] text-base font-medium px-8 py-3 rounded-lg hover:bg-[#98f5c5] ">
            Back to Home
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name : "Errorpage",
};


</script>


