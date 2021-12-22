<template>
  <div class="h-screen">
    <div class="bg-blueDark lg:w-5/12 px-4 text-white h-full flex items-center">
      <div class="max-w-lg mx-auto w-11/12">
        <h1 class="my-5 text-amber text-4xl font-bold">Forgot Password</h1>
        <h1 class="text-xl">Enter your email to reset your passord</h1>
        <form action="">
          <input
            type="email"
            placeholder="Enter your email address"
            v-model="email"
            class="w-full my-5 bg-transparent focus:outline-none px-1 py-4 border-b border-opacity-75"
          />

          <button
            type="submit"
            class="w-full my-6 bg-amber uppercase text-black font-bold rounded-lg py-2.5"
          >
            Reset password
          </button>
        </form>

        <router-link to="/login" class="text-amber">Back to login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
