<template>
  <div class="lg:flex">
    <div class="flex-grow">
      <div class="flex justify-between items-center py-6 px-10 border">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-red-600">
            <span
              class="iconify"
              data-icon="oi:transfer"
              style="color: white"
              data-width="50"
              data-height="50"
            ></span>
          </div>
          <div class="ml-4">
            <h1 class="text-2xl font-bold">Transactions</h1>
            <p class="text-gray-500">Needs your Attention</p>
          </div>
        </div>
        <span
          class="iconify"
          data-icon="clarity:caret-line"
          style="color: gainsboro"
          data-width="40"
          data-rotate="90deg"
        ></span>
      </div>
      <div class="flex justify-between items-center py-6 px-10 border">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-yellow-300">
            <span
              class="iconify"
              data-icon="ant-design:message-filled"
              style="color: white"
              data-width="50"
              data-height="50"
            ></span>
          </div>
          <div class="ml-4">
            <h1 class="text-2xl font-bold">0 New Messages</h1>
            <p class="text-gray-500">Await your reply</p>
          </div>
        </div>
        <span
          class="iconify"
          data-icon="clarity:caret-line"
          style="color: gainsboro"
          data-width="40"
          data-rotate="90deg"
        ></span>
      </div>
    </div>
    <div class="py-6 px-10 border flex-grow">
      <div class="flex justify-between">
        <div>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-green-400">
              <span
                class="iconify"
                data-icon="ant-design:home-filled"
                style="color: white"
                data-width="50"
                data-height="50"
              ></span>
            </div>
            <div class="ml-4">
              <p class="text-gray-500">
                Increase your chances for new offers...
              </p>
              <h1 class="text-2xl font-bold">Add your address</h1>
            </div>
          </div>
        </div>
        <span
          class="iconify"
          data-icon="clarity:caret-line"
          style="color: gainsboro"
          data-width="40"
          data-rotate="90deg"
        ></span>
      </div>
      <p class="mt-10 text-gray-500">Provide your address</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
