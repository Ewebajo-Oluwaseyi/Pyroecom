<template>
  <div class="h-screen lg:flex">
    <div class="hidden lg:block p-8 flex-grow">
      <h1 class="text-3xl text-center font-bold mb-6">Welcome to Pyroecom</h1>
      <p class="text-center">
        A large warm-contact influencer network of real and willing people!
      </p>
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
            v-model="email"
            class="w-full my-5 bg-transparent focus:outline-none px-1 py-4 border-b border-opacity-75"
          />
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            v-model="password"
            class="w-full my-5 bg-transparent focus:outline-none px-1 py-4 border-b border-opacity-75"
          />

          <button
            @click.prevent="login"
            type="submit"
            class="w-full my-6 bg-amber uppercase text-black font-bold rounded-lg py-2.5"
          >
            Login
          </button>
        </form>

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
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.push("/dashboard");
    },
  },
};
</script>
