<template>
  <div>
    <div class="">
      <!-- <h1 class="text-2xl font-bold">Login Information</h1> -->
      <div class="bg-white px-6 py-10 my-6 shadow-md rounded-md">
        <div class="md:flex items-center gap-6">
          <div
            class="w-16 h-16 px-8 mx-auto md:mx-0 mb-6 md:mb-0 rounded-full bg-blueDark flex items-center justify-center"
          >
            <h1 class="text-white text-3xl font-bold">3</h1>
          </div>
          <div>
            <h1 class="text-4xl text-center md:text-left">
              Connect social media and blogs
            </h1>
          </div>
        </div>
        <form class="flex flex-wrap gap-5 mt-5">
          <div class="flex-grow">
            <label for="twitter" class="flex items-center"
              ><span class="iconify" data-icon="logos:twitter"></span
              ><span class="ml-2">Twitter</span> </label
            ><br />
            <input
              type="text"
              id="twitter"
              v-model="register.twitter"
              placeholder="Enter your twitter handler"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 w-full"
            />
          </div>
          <div class="flex-grow">
            <label for="instagram" class="flex items-center"
              ><img src="@/assets/images/insta.png" alt="" class="h-4" /><span
                class="ml-2"
                >Instagram</span
              > </label
            ><br />
            <input
              type="text"
              id="instagram"
              v-model="register.instagram"
              placeholder="Enter your instagram handler"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 w-full"
            />
          </div>
          <div class="flex-grow">
            <label for="facebook" class="flex items-center"
              ><span class="iconify" data-icon="icon-park:facebook"></span
              ><span class="ml-2">Facebook</span> </label
            ><br />
            <input
              type="text"
              id="facebook"
              v-model="register.facebook"
              placeholder="Enter your instagram handler"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 w-full"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        twitter: "",
        instagram: "",
        facebook: "",
      },
    };
  },
  methods: {
    submit() {
      const twitter = this.register.twitter;
      const instagram = this.register.instagram;
      const facebook = this.register.facebook;
      const payload = {
        twitter_link: twitter,
        instagram_link: instagram,
        facebook_link: facebook,
      };

      this.$store.commit("social", payload);
    },
  },
  mounted: function mounted() {
    this.$root.$on("Next", () => {
      this.submit();
    });
  },
};
</script>
