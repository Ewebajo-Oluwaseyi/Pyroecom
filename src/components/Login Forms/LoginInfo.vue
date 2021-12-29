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
              v-bind:class="
                error.firstName
                  ? 'ring ring-red-500 bg-cream shadow-sm py-2 px-2 mt-2 w-full'
                  : 'bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full'
              "
            />
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.firstName }}
            </p>
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
              v-bind:class="
                error.lastName
                  ? 'ring ring-red-500 bg-cream shadow-sm py-2 px-2 mt-2 w-full'
                  : 'bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full'
              "
            />
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.lastName }}
            </p>
          </div>
          <div class="flex-grow">
            <label for="email">Email <span class="text-red-600">*</span></label
            ><br />
            <input
              type="email"
              id="email"
              v-model="register.email"
              placeholder="Enter your email"
              v-bind:class="
                error.email
                  ? 'ring ring-red-500 bg-cream shadow-sm py-2 px-2 mt-2 w-full'
                  : 'bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full'
              "
            />
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.email }}
            </p>
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
              v-bind:class="
                error.password
                  ? 'ring ring-red-500 bg-cream shadow-sm py-2 px-2 mt-2 w-full'
                  : 'bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full'
              "
            />
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.password }}
            </p>
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
              v-bind:class="
                error.confirmPassword
                  ? 'ring ring-red-500 bg-cream shadow-sm py-2 px-2 mt-2 w-full'
                  : 'bg-cream focus:outline-none shadow-sm py-2 px-2 mt-2 w-full'
              "
            />
            <p class="text-center text-red-500 text-xs mt-2">
              {{ error.confirmPassword }}
            </p>
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
      error: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      loginInfo: "loginInfo",
    }),
  },
  methods: {
    submit() {
      if (this.register.firstName === "") {
        this.error.firstName = "firstname is required";
        setTimeout(() => {
          this.error.firstName = "";
        }, 1000);
        this.loading = false;
        this.$store.commit("enableNext", false);
      } else if (this.register.lastName === "") {
        this.error.lastName = "last name is required";
        setTimeout(() => {
          this.error.lastName = "";
        }, 1000);
        this.loading = false;
        this.$store.commit("enableNext", false);
      } else if (this.register.email === "") {
        this.error.email = "email is required";
        setTimeout(() => {
          this.error.email = "";
        }, 1000);
        this.loading = false;
        this.$store.commit("enableNext", false);
      } else if (this.register.password === "") {
        this.error.password = "password is required";
        setTimeout(() => {
          this.error.password = "";
        }, 1000);
        this.loading = false;
        this.$store.commit("enableNext", false);
      } else if (
        this.register.password.length <= 6 ||
        this.register.password.length > 19
      ) {
        this.error.password =
          "The password must be between 7 and 20 characters.";
        setTimeout(() => {
          this.error.password = "";
        }, 2000);
        this.loading = false;
        this.$store.commit("enableNext", false);
      } else if (this.register.confirmPassword === "") {
        this.error.confirmPassword = "password is required";
        setTimeout(() => {
          this.error.confirmPassword = "";
        }, 1000);
        this.loading = false;
        this.$store.commit("enableNext", false);
      } else if (this.register.password !== this.register.confirmPassword) {
        this.error.confirmPassword = "Password does not match";
        setTimeout(() => {
          this.error.confirmPassword = "";
        }, 2000);
        this.loading = false;
        this.$store.commit("enableNext", false);
      } else if (
        this.register.confirmPassword.length <= 6 ||
        this.register.confirmPassword.length > 19
      ) {
        this.error.confirmPassword =
          "The password must be between 7 and 20 characters.";
        setTimeout(() => {
          this.error.confirmPassword = "";
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
    Prev() {
      console.log(this.loginInfo);
      this.register = {
        firstName: this.loginInfo.firstname,
        lastName: this.loginInfo.lastname,
        email: this.loginInfo.email,
        password: this.loginInfo.password,
        confirmPassword: this.loginInfo.password_confirmation,
      };
    },
  },
  mounted: function mounted() {
    this.$root.$on("Next", () => {
      this.submit();
    });
    this.$root.$on("Previous", () => {
      this.Prev();
    });
  },
};
</script>
