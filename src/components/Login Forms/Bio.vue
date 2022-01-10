<template>
  <div>
    <div class="">
      <!-- <h1 class="text-2xl font-bold">Login Information</h1> -->
      <div class="bg-white px-6 py-10 my-6 shadow-md rounded-md">
        <div class="md:flex items-center gap-6">
          <div
            class="w-16 h-16 px-8 mx-auto md:mx-0 mb-6 md:mb-0 rounded-full bg-blueDark flex items-center justify-center"
          >
            <h1 class="text-white text-3xl font-bold">2</h1>
          </div>
          <div>
            <h1 class="text-4xl text-center md:text-left">Add a bio</h1>
          </div>
        </div>
        <textarea
          id="bio"
          placeholder="Tell us about yourself"
          v-model="bio"
          class="bg-cream focus:outline-none shadow-sm py-3 px-2 mt-8 w-full"
        ></textarea>
        <p class="text-center text-red-500">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bio: "",
      error: "",
    };
  },
  methods: {
    submit() {
      if (this.bio == "") {
        this.error = "Bio field is required";
        setTimeout(() => {
          this.error = "";
        }, 1000);
        this.$store.commit("enableNext", false);
      } else {
        this.$store.commit("enableNext", true);
        this.$store.commit("bio", { bio: this.bio });
      }
    },
  },
  mounted: function mounted() {
    this.$root.$on("Next", () => {
      this.submit();
    });
  },
  created() {
    this.$store.commit("enableNext", false);
  },
};
</script>
