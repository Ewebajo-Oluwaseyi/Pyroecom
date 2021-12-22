<template>
  <div>
    <nav class="bg-gray-dark flex justify-between items-center">
      <div
        @click="toggleSidebar"
        class="w-12 h-12 bg-amber flex justify-center items-center cursor-pointer"
      >
        <span
          class="iconify"
          data-icon="majesticons:menu"
          style="color: white"
        ></span>
      </div>
      <div class="flex items-center gap-5 text-white text-sm px-8">
        <h1 class="hidden md:block">December 1, 2021</h1>
        <div class="relative cursor-pointer">
          <span
            class="iconify"
            data-icon="bi:bell-fill"
            style="color: white"
          ></span>
          <div
            class="w-2 h-2 rounded-full bg-amber absolute -top-1 right-0"
          ></div>
        </div>
        <div
          class="w-4 h-4 rounded-full bg-white flex items-center justify-center cursor-pointer"
        >
          <h1 class="text-black font-bold text-sm">?</h1>
        </div>
        <h1 class="cursor-pointer">FAQs</h1>
        <h1 class="cursor-pointer">Log Out</h1>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
    },
  },
};
</script>
