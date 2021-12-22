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
              id="firstname"
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
              id="lastname"
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
              id="password"
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
  </div>
</template>

<script>
export default {};
</script>
