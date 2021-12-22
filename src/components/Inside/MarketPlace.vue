<template>
  <div>
    <div class="py-5 border">
      <div class="flex items-center justify-between w-11/12 mx-auto">
        <h1 class="font-bold text-2xl">Marketplace</h1>
        <div class="flex items-center">
          <p class="mr-2 text-sm">Last 30 days</p>
          <span
            class="iconify"
            data-icon="bx:bx-caret-down"
            data-width="14"
          ></span>
        </div>
      </div>
      <hr class="my-5" />
      <div class="flex justify-between w-11/12 mx-auto">
        <div>
          <h1 class="text-gray-500 uppercase text-sm font-bold">Available</h1>
          <h1 class="text-4xl font-bold text-blueMid">1</h1>
        </div>

        <div>
          <h1 class="text-gray-500 uppercase text-sm font-bold">Applied</h1>
          <h1 class="text-4xl font-bold text-blueMid">0</h1>
        </div>

        <div>
          <h1 class="text-gray-500 uppercase text-sm font-bold">Waitlist</h1>
          <h1 class="text-4xl font-bold text-blueMid">0</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
