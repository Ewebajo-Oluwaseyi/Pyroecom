<template>
  <div>
    <div class="">
      <!-- <h1 class="text-2xl font-bold">Login Information</h1> -->
      <div class="bg-white px-6 py-10 my-6 shadow-md rounded-md md:flex gap-6">
        <div
          class="w-16 h-16 px-8 mx-auto md:mx-0 mb-6 md:mb-0 rounded-full bg-blueDark flex items-center justify-center"
        >
          <h1 class="text-white text-4xl font-bold">6</h1>
        </div>
        <form action="" class="flex flex-wrap gap-6">
          <div class="flex-grow">
            <label for="address"
              >Address <span class="text-red-600">*</span></label
            ><br />
            <input
              type="text"
              id="address"
              v-model="address.address1"
              placeholder="Address"
              v-bind:class="
                error.address1
                  ? 'ring ring-red-500 bg-cream shadow-sm py-2 px-2 mt-2 w-full'
                  : 'bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full'
              "
            />
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.address1 }}
            </p>
          </div>

          <div class="flex-grow">
            <label for="address 2">Address 2</label><br />
            <input
              type="text"
              id="address 2"
              v-model="address.address2"
              placeholder="Address line 2"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full"
            />
          </div>
          <div class="flex-grow">
            <label for="country"
              >Country <span class="text-red-600">*</span></label
            ><br />
            <input
              type="text"
              id="country"
              v-model="address.country"
              placeholder=""
              v-bind:class="
                error.country
                  ? 'ring ring-red-500 bg-cream shadow-sm py-2 px-2 mt-2 w-full'
                  : 'bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full'
              "
            />
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.country }}
            </p>
          </div>
          <div class="flex-grow">
            <label for="state">State </label><br />
            <input
              type="text"
              id="state"
              placeholder="State"
              v-model="address.state"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full"
            />
          </div>
          <div class="flex-grow">
            <label for="city">City <span class="text-red-600">*</span></label
            ><br />
            <input
              type="text"
              id="city"
              placeholder="City"
              v-model="address.city"
              v-bind:class="
                error.city
                  ? 'ring ring-red-500 bg-cream shadow-sm py-2 px-2 mt-2 w-full'
                  : 'bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full'
              "
            />
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.city }}
            </p>
          </div>
          <div class="flex-grow">
            <label for="telephone">
              Phone Number <span class="text-red-600">*</span></label
            ><br />
            <input
              type="tel"
              id="telephone"
              v-model="address.phone"
              placeholder="Phone number"
              v-bind:class="
                error.phone
                  ? 'ring ring-red-500 bg-cream shadow-sm py-2 px-2 mt-2 w-full'
                  : 'bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full'
              "
            />
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.phone }}
            </p>
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
      address: {
        address1: "",
        address2: "",
        country: "",
        state: "",
        city: "",
        phone: "",
      },
      error: {
        address1: "",
        country: "",
        city: "",
        phone: "",
      },
    };
  },
  methods: {
    submit() {
      if (this.address.address1 === "") {
        this.error.address1 = "Include Address";
        setTimeout(() => {
          this.error.address1 = "";
        }, 1000);
        this.$store.commit("enableNext", false);
      } else if (this.address.country === "") {
        this.error.country = "Include country";
        setTimeout(() => {
          this.error.country = "";
        }, 1000);
        this.$store.commit("enableNext", false);
      } else if (this.address.city === "") {
        this.error.city = "Include city";
        setTimeout(() => {
          this.error.city = "";
        }, 1000);
        this.$store.commit("enableNext", false);
      } else if (this.address.phone === "") {
        this.error.phone = "Include phone number";
        setTimeout(() => {
          this.error.phone = "";
        }, 1000);
        this.$store.commit("enableNext", false);
      } else {
        this.$store.commit("enableNext", true);
        const address1 = this.address.address1;
        const country = this.address.country;
        const city = this.address.city;
        const phone = this.address.phone;
        const payload = {
          address_1: address1,
          phone: phone,
          city: city,
          country: country,
        };
        this.$store.commit("address", payload);
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
