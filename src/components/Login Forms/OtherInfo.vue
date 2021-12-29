<template>
  <div>
    <div class="">
      <!-- <h1 class="text-2xl font-bold">Login Information</h1> -->
      <div class="bg-white px-6 py-10 my-6 shadow-md rounded-md md:flex gap-6">
        <div
          class="w-16 h-16 px-8 mx-auto md:mx-0 mb-6 md:mb-0 rounded-full bg-blueDark flex items-center justify-center"
        >
          <h1 class="text-white text-4xl font-bold">9</h1>
        </div>
        <form action="" class="flex flex-wrap gap-6">
          <div class="flex-grow">
            <label for="gender"
              >Gender <span class="text-red-600">*</span></label
            ><br />
            <select
              type="text"
              id="gender"
              v-model="data.gender"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full"
            >
              <option disables :value="null">Select a gender</option>
              <option
                v-for="(gender, index) in genders"
                :key="index"
                :value="gender.gender"
              >
                {{ gender.gender }}
              </option>
            </select>
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.gender }}
            </p>
          </div>

          <div class="flex-grow">
            <label for="address 2">Birthday</label><br />
            <input
              type="date"
              id="birthday"
              v-model="data.birthday"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full"
            />
          </div>
          <div class="flex-grow">
            <label for="languages"
              >Languages <span class="text-red-600">*</span></label
            >
            <p class="text-center text-red-500 text-xs">
              {{ error.languages }}
            </p>
            <br />
            <input
              type="text"
              id="languages"
              v-model="data.languages1"
              placeholder="Select Language"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 w-full"
            />

            <input
              type="text"
              id="languages"
              v-model="data.languages2"
              placeholder="Select Fluency"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full"
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
      data: {
        gender: "",
        birthday: "",
        languages1: "",
        languages2: "",
      },
      genders: [
        {
          id: 1,
          gender: "MALE",
        },
        {
          id: 2,
          gender: "FEMALE",
        },
      ],
      error: {
        gender: "",
        languages: "",
      },
    };
  },
  methods: {
    submit() {
      if (this.data.gender === "") {
        this.error.gender = "Gender is required";
        setTimeout(() => {
          this.error.gender = "";
        }, 1000);
        this.$store.commit("enableNext", false);
      } else if (this.data.languages1 === "" || this.data.languages2 === "") {
        this.error.languages = "Languages is required";
        setTimeout(() => {
          this.error.languages = "";
        }, 1000);
        this.$store.commit("enableNext", false);
      } else {
        this.$store.commit("enableNext", true);
        const gender = this.data.gender;
        const languages = [this.data.languages1, this.data.languages2];
        const Arrlanguages = Object.values(languages);

        const payload = {
          gender: gender,
          twitter_link: "https://twitter.com",
          instagram_link: "https://instagram.com",
          languages: Arrlanguages,
        };
        this.$store.commit("moreInfo", payload);
      }
    },
  },
  mounted: function mounted() {
    this.$root.$on("Submit", () => {
      this.submit();
    });
  },
};
</script>
