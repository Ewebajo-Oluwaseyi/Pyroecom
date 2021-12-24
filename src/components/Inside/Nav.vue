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
        <h1 class="hidden md:block mr-4">December 1, 2021</h1>
        <button @click="isOpen = !isOpen" class="relative cursor-pointer mr-4">
          <span
            class="iconify"
            data-icon="bi:bell-fill"
            style="color: white"
          ></span>
          <div
            class="w-2 h-2 rounded-full bg-amber absolute -top-1 right-0"
          ></div>
          <div
            v-if="isOpen"
            class="absolute bottom-0 left-0 notification-group bg-white rounded-lg shadow-xl"
          >
            <div class="notifWrapper">
              <h3 class="text-left text-gray-dark text-base">Notifications</h3>

              <div
                class="notif"
                v-for="notification in notifications"
                :key="notification.id"
              >
                <div class="notiimg">
                  <img :src="notification.image" alt="" />
                </div>
                <div class="noti-details text-left ml-4">
                  <h2 class="text-black">{{ notification.message }}</h2>
                  <h5 class="text-black text-muted">
                    {{ notification.time }}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </button>
        <button
          v-if="isOpen"
          @click="isOpen = false"
          tabindex="-1"
          class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
        ></button>
        <div
          class="w-4 h-4 rounded-full bg-white flex items-center justify-center cursor-pointer mr-4"
        >
          <h1 class="text-black font-bold text-sm">?</h1>
        </div>
        <h1 class="cursor-pointer mr-4">FAQs</h1>
        <h1 class="cursor-pointer mr-4">Log Out</h1>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      notifications: [
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1610646402667-79fce5fc1666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjY3MzZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTYxOTY4MTUzMw&ixlib=rb-1.2.1&q=80&w=400",
          message: "Michael liked you!",
          time: "About 20 minutes ago",
        },
        {
          id: 2,
          image:
            "https://images.unsplash.com/photo-1614440288714-57c4b5b6700a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjY3MzZ8MHwxfGFsbHwxfHx8fHx8Mnx8MTYxOTY4MTUzMw&ixlib=rb-1.2.1&q=80&w=400",
          message: "Jack liked you!",
          time: "About 40 minutes ago",
        },
        {
          id: 3,
          image:
            "https://images.unsplash.com/photo-1591157866194-b3b4e279c698?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjY3MzZ8MHwxfGFsbHw0fHx8fHx8Mnx8MTYxOTY4MTUzMw&ixlib=rb-1.2.1&q=80&w=400",
          message: "Michael commented on your photo!",
          time: "About 56 minutes ago",
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.$store.commit("toggleSidebar");
    },
  },
};
</script>

<style scoped>
.notification-group {
  transform: translate(-30%, 110%);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
  z-index: 5;
  margin-right: 10rem;
}
@media (min-width: 520px) {
  .notification-group {
    transform: translate(-50%, 110%);
  }
}
.notification-group::after {
  content: "";
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  background-color: white;
  position: absolute;
  top: 0;
  left: 24%;
  transform: rotate(45deg) translateY(-70%);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 100ms ease-in-out;
  z-index: -1;
}
@media (min-width: 520px) {
  .notification-group::after {
    left: 46%;
  }
}

.notifWrapper {
  transition: all 100ms ease-in-out;
  width: 18rem;
  padding: 1.5rem 1.5rem;
}

@media (min-width: 520px) {
  .notifWrapper {
    width: 27rem;
    padding: 1.5rem 2rem;
  }
}
.notif {
  display: flex;
  align-items: center;
  padding: 1rem 0;
}
.notif:not(:last-of-type) {
  border-bottom: 1px solid #6a6975;
}
.notiimg {
  align-self: flex-start;
  margin-right: 1rem;
  border-radius: 100%;
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.notiimg img {
  width: 100%;
}
</style>
