<template>
  <div class="lg:h-screen">
    <div
      class="bg-blueDark lg:w-5/12 px-4 py-8 lg:py-0 text-white lg:h-full lg:flex items-center"
    >
      <div class="max-w-lg mx-auto w-11/12">
        <h1 class="text-2xl font-bold">
          Register on <span class="text-amber">Pyroecom</span>
        </h1>
        <form action="">
          <input
            type="text"
            placeholder="Enter your first name"
            v-model="firstName"
            class="w-full my-4 bg-transparent focus:outline-none px-1 py-4 border-b border-opacity-75"
          />
          <input
            type="text"
            placeholder="Enter your last name"
            v-model="lastName"
            class="w-full my-4 bg-transparent focus:outline-none px-1 py-4 border-b border-opacity-75"
          />
          <input
            type="email"
            placeholder="Enter your email address"
            v-model="email"
            class="w-full my-4 bg-transparent focus:outline-none px-1 py-4 border-b border-opacity-75"
          />
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            v-model="password"
            class="w-full my-4 bg-transparent focus:outline-none px-1 py-4 border-b border-opacity-75"
          />
          <input
            type="password"
            placeholder="Confirm your password"
            v-model="confirmPassword"
            class="w-full my-4 bg-transparent focus:outline-none px-1 py-4 border-b border-opacity-75"
          />

          <button
            type="submit"
            class="w-full my-6 bg-amber uppercase text-black font-bold rounded-lg py-2.5"
          >
            Create Account
          </button>
        </form>

        <p class="text-center mt-8">
          Already have an account?
          <router-link to="/login" class="text-amber">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
