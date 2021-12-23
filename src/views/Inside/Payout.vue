<template>
  <div class="bg-cream">
    <sidebar />
    <div
      :class="`absolute top-0 h-full duration-1000 ease-in-out ${
        sidebar ? 'left-56 w-10/12' : 'left-0 w-full'
      }`"
    >
      <top-nav />
      <section class="w-full py-8 px-5">
        <div class="bg-white shadow-sm">
          <table class="table-auto w-full boarder-collapse">
            <thead class="bg-grey-light">
              <tr>
                <th class="px-4 py-2 text-gray-dark">Id</th>
                <th class="px-4 py-2 text-gray-dark">Amount</th>
                <th class="px-4 py-2 text-gray-dark">Student</th>
                <th class="px-4 py-2 text-gray-dark">Paid_Date</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import sidebar from "@/components/Side bar/SideBar.vue";
import Nav from "@/components/Inside/Nav.vue";

export default {
  components: {
    sidebar,
    "top-nav": Nav,
  },
  computed: {
    sidebar() {
      return this.$store.state.sidebar;
    },
  },
};
</script>
