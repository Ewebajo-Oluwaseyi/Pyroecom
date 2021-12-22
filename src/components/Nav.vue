<template>
  <div>
    <nav
      class="w-11/12 mx-auto py-6 flex justify-between items-center text-white"
    >
      <h1 class="text-amber text-2xl font-bold">PYROECOM</h1>

      <ul class="hidden md:flex">
        <li
          v-for="nav in navs"
          :key="nav"
          class="cursor-pointer mr-8 duration-200 hover:text-amber"
        >
          {{ nav }}
        </li>
      </ul>
      <div class="hidden md:block">
        <router-link to="/login">
          <button
            class="w-28 py-1.5 rounded-md uppercase focus:outline-none font-bold"
          >
            Login
          </button></router-link
        >
        <router-link to="/register">
          <button
            class="w-28 py-1.5 rounded-md uppercase focus:outline-none font-bold bg-amber text-black"
          >
            Sign Up
          </button></router-link
        >
      </div>

      <!-- Hamburger Menu -->
      <div
        @click="toggleNav"
        :class="`flex justify-center items-center md:hidden menu-btn ${
          nav ? 'open' : ''
        }`"
      >
        <div class="menu-btn-burger"></div>
      </div>
    </nav>

    <!-- Mobile Nav -->
    <nav
      :class="` md:hidden text-white overflow-hidden transition-all duration-500 ${
        nav ? 'h-60 ' : 'h-0'
      }`"
    >
      <ul class="w-11/12 mx-auto">
        <li
          v-for="nav in navs"
          :key="nav"
          class="cursor-pointer mr-8 duration-200 my-4"
        >
          {{ nav }}
        </li>
      </ul>
      <div class="w-11/12 mx-auto">
        <router-link to="/login">
          <button
            class="w-full py-1.5 mb-4 rounded-md uppercase focus:outline-none font-bold border-2 border-amber block"
          >
            Login
          </button></router-link
        >
        <router-link to="/register">
          <button
            class="w-full py-1.5 rounded-md uppercase focus:outline-none font-bold bg-amber text-black block"
          >
            Sign Up
          </button></router-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: ["Brands", "Influencers", "Categories"],
      nav: false,
    };
  },
  methods: {
    toggleNav() {
      this.nav = !this.nav;
    },
  },
};
</script>

<style scoped>
.menu-btn {
  position: relative;
  width: 60px;
  height: 50px;
  cursor: pointer;
}

.menu-btn-burger {
  width: 40px;
  height: 4px;
  background: #fff;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
}

.menu-btn-burger::before,
.menu-btn-burger::after {
  content: "";
  position: absolute;
  width: 40px;
  height: 4px;
  background: #fff;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
}

.menu-btn-burger::before {
  transform: translateY(-12px);
}
.menu-btn-burger::after {
  transform: translateY(12px);
}

/* Animation */
.menu-btn.open .menu-btn-burger {
  transform: translateX(-40px);
  background: transparent;
}

.menu-btn.open .menu-btn-burger::before {
  transform: rotate(45deg) translate(30px, -30px);
}

.menu-btn.open .menu-btn-burger::after {
  transform: rotate(-45deg) translate(30px, 30px);
}
</style>
