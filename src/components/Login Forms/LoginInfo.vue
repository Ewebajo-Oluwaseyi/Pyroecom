<template>
  <div>
    <div class="">
      <!-- <h1 class="text-2xl font-bold">Login Information</h1> -->
      <div class="bg-white px-6 py-10 my-6 shadow-md rounded-md md:flex gap-6">
        <div
          class="w-16 h-16 px-8 mx-auto mb-6 md:mb-0 rounded-full bg-blueDark flex items-center justify-center"
        >
          <h1 class="text-white text-4xl font-bold">1</h1>
        </div>
        <form action="" class="flex flex-wrap gap-6">
          <div class="flex-grow">
            <label for="firstname"
              >First Name <span class="text-red-600">*</span></label
            ><br />
            <input
              type="text"
              id="firstName"
              v-model="register.firstName"
              placeholder="Enter your first name"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full"
            />
          </div>
          <div class="flex-grow">
            <label for="lastname"
              >Last Name <span class="text-red-600">*</span></label
            ><br />
            <input
              type="text"
              id="lastName"
              v-model="register.lastName"
              placeholder="Enter your last name"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full"
            />
          </div>
          <div class="flex-grow">
            <label for="email">Email <span class="text-red-600">*</span></label
            ><br />
            <input
              type="email"
              id="email"
              v-model="register.email"
              placeholder="Enter your email"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full"
            />
          </div>
          <div class="flex-grow">
            <label for="password"
              >Password <span class="text-red-600">*</span></label
            ><br />
            <input
              type="password"
              id="password"
              v-model="register.password"
              placeholder="Enter a password"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full"
            />
          </div>
          <div class="flex-grow">
            <label for="confirmpassword">
              Confirm password <span class="text-red-600">*</span></label
            ><br />
            <input
              type="password"
              id="confirmPassword"
              v-model="register.confirmPassword"
              placeholder="Confirm password"
              class="bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full"
            />
          </div>
          <div class="flex items-center">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox" class="text-sm ml-1"
              >I accept the Terms of Service and Privacy Policy
            </label>
          </div>
        </form>
      </div>
    </div>
    <p class="text-center text-red-500">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      register: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      error: "",
    };
  },
  methods: {
    submit() {
      if (
        this.register.firstName === "" ||
        this.register.lastName === "" ||
        this.register.email === "" ||
        this.register.password === "" ||
        this.register.confirmPassword === ""
      ) {
        this.error = "Include credentials";
        setTimeout(() => {
          this.error = "";
        }, 2000);
        this.loading = false;
        this.$store.commit("enableNext", false);
      } else if (this.register.password !== this.register.confirmPassword) {
        this.error = "Password does not match";
        setTimeout(() => {
          this.error = "";
        }, 2000);
        this.loading = false;
        this.$store.commit("enableNext", false);
      } else if (
        this.register.password.length <= 6 ||
        (this.register.confirmPassword.length <= 6 &&
          this.register.password.length > 19) ||
        this.register.confirmPassword.length > 19
      ) {
        this.error = "The password must be between 7 and 20 characters.";
        setTimeout(() => {
          this.error = "";
        }, 2000);
        this.loading = false;
        this.$store.commit("enableNext", false);
      } else {
        this.$store.commit("enableNext", true);
        const firstName = this.register.firstName;
        const lastName = this.register.lastName;
        const email = this.register.email;
        const password = this.register.password;
        const confirmPassword = this.register.confirmPassword;

        const payload = {
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
          password_confirmation: confirmPassword,
        };
        this.$store.commit("loginInfo", payload);
      }
    },
  },
  mounted: function mounted() {
    this.$root.$on("Next", () => {
      this.submit();
    });
  },
};
</script>
