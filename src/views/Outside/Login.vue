<template>
  <div class="h-screen lg:flex">
    <div class="hidden lg:block p-8 flex-grow">
      <h1 class="text-3xl text-center font-bold mb-6">Welcome to Pyroecom</h1>
      <p class="text-center">
        A large warm-contact influencer network of real and willing people!
      </p>
      <div class="image-wrapper">
        <img src="@/assets/images/login.jpg" alt="" />
      </div>
      <!-- <div class="mt-12">
        <div class="xl:flex justify-evenly gap-7">
          <div
            class="bg-gray-dark rounded-md mb-7 xl:mb-0 p-4 xl:w-80 text-center"
          >
            <div class="w-16 h-12 border-2 border-amber mx-auto"></div>
            <h1 class="text-amber text-lg font-bold my-3">173,000+</h1>
            <p class="text-white text-lg">Registered influencers</p>
          </div>
          <div class="bg-gray-dark rounded-md p-4 xl:w-80 text-center">
            <div class="w-16 h-12 border-2 border-amber mx-auto"></div>
            <h1 class="text-amber text-lg font-bold my-3">173,000+</h1>
            <p class="text-white text-lg">Registered influencers</p>
          </div>
        </div>
        <div class="xl:flex justify-evenly gap-7 mt-7">
          <div
            class="bg-gray-dark rounded-md mb-7 xl:mb-0 p-4 xl:w-80 text-center"
          >
            <div class="w-16 h-12 border-2 border-amber mx-auto"></div>
            <h1 class="text-amber text-lg font-bold my-3">173,000+</h1>
            <p class="text-white text-lg">Registered influencers</p>
          </div>
          <div class="bg-gray-dark rounded-md p-4 xl:w-80 text-center">
            <div class="w-16 h-12 border-2 border-amber mx-auto"></div>
            <h1 class="text-amber text-lg font-bold my-3">173,000+</h1>
            <p class="text-white text-lg">Registered influencers</p>
          </div>
        </div>
      </div> -->
    </div>
    <div class="bg-blueDark lg:w-1/2 px-4 text-white h-full flex items-center">
      <div class="max-w-lg mx-auto w-11/12">
        <h1 class="text-2xl font-bold">
          Log in to <span class="text-amber">Pyroecom</span>
        </h1>
        <form action="">
          <input
            type="email"
            placeholder="Enter your email address"
            v-model="login.email"
            v-bind:class="
              error.email
                ? 'w-full my-5 bg-transparent focus:outline-none px-1 py-4 border-b border-red-500'
                : 'w-full my-5 bg-transparent focus:outline-none px-1 py-4 border-b border-opacity-75'
            "
          />
          <p class="text-center text-red-500 text-xs">
            {{ error.email }}
          </p>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            v-model="login.password"
            v-bind:class="
              error.password
                ? 'w-full my-5 bg-transparent focus:outline-none px-1 py-4 border-b border-red-500'
                : 'w-full my-5 bg-transparent focus:outline-none px-1 py-4 border-b border-opacity-75'
            "
          />
          <p class="text-center text-red-500 text-xs">
            {{ error.password }}
          </p>

          <button
            @click.prevent="Userlogin"
            type="submit"
            class="w-full my-6 bg-amber uppercase text-black font-bold rounded-lg py-2.5"
          >
            {{ loading ? "loading..." : "Login" }}
          </button>
        </form>
        <p class="text-center text-red-500">{{ error.error }}</p>
        <p class="text-center my-8">
          Don't have an account?
          <router-link to="/register" class="text-amber">Register</router-link>
        </p>
        <router-link to="/forgot-password">
          <p class="text-center">Forgot password?</p></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      loading: false,
      login: {
        email: "",
        password: "",
      },
      error: {
        email: "",
        password: "",
        error: "",
      },
    };
  },
  methods: {
    ...mapActions(["postlogin"]),
    async Userlogin() {
      if (this.login.email == "") {
        this.error.email = "Include email";
        setTimeout(() => {
          this.error.email = "";
        }, 1000);
        this.loading = false;
      } else if (this.login.password == "") {
        this.error.password = "Include password";
        setTimeout(() => {
          this.error.password = "";
        }, 1000);
        this.loading = false;
      } else {
        this.loading = true;
        try {
          const email = this.login.email;
          const password = this.login.password;
          const payload = {
            email,
            password,
          };
          await this.postlogin(payload);
          this.loading = false;
        } catch (err) {
          if (err) {
            this.error.error = "Incorrect email and password";
            setTimeout(() => {
              this.error.error = "";
            }, 1000);
            this.loading = false;
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.image-wrapper img {
  mix-blend-mode: multiply;
  max-width: 100%;
  height: 440px;
  max-height: 100%;
  display: block;
  margin: 50px auto 0;
}
</style>
