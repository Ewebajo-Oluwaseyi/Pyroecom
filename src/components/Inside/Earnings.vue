<template>
  <div>
    <div class="py-5 border">
      <div class="flex items-center justify-between w-11/12 mx-auto">
        <h1 class="font-bold text-2xl">Earnings</h1>
        <div class="flex items-center">
          <p class="mr-2 text-sm">Last 30 days</p>
          <span
            class="iconify"
            data-icon="bx:bx-caret-down"
            data-width="14"
          ></span>
        </div>
      </div>
      <hr class="mt-5" />
      <div
        class="flex items-center bg-yellow-100 text-sm text-gray-500 px-6 py-1"
      >
        <div
          class="w-3 h-3 rounded-full flex items-center justify-center mr-1 bg-gray-600 text-cream"
        >
          <p class="text-xs">?</p>
        </div>
        <p>Learn more about payments</p>
      </div>
      <div class="flex justify-between w-11/12 mx-auto">
        <div>
          <h1 class="text-gray-500 uppercase text-sm font-bold">Total</h1>
          <h1 class="text-2xl font-semibold text-blueDark">
            $0.00<span class="text-lg font-normal text-gray-500">USD</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
