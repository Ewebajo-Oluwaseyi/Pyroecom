<template>
  <div class="bg-cream">
    <sidebar />
    <div>
      <top-nav />

      <section class="py-8 px-5 bg-white flex justify-between">
        <div class="flex gap-5 items-center">
          <div class="w-16 h-16 rounded-full overflow-hidden">
            <img
              src="https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU="
              alt=""
            />
          </div>
          <div>
            <h1>Firstname Lastname</h1>
            <h1 class="text-sm italic">Brand Influencer</h1>
          </div>
        </div>
        <div>
          <button class="py-1 w-32 rounded-sm bg-amber text-white">
            Edit Profile
          </button>
        </div>
      </section>

      <section class="mt-6 bg-white mx-4 px-4 py-2">
        <div>
          <div class="pb-3 border-b flex justify-between">
            <h1 class="text-2xl font-bold">Bio</h1>
            <div
              class="w-10 h-10 rounded-full hover:bg-cream flex justify-center items-center cursor-pointer"
            >
              <span class="iconify" data-icon="akar-icons:pencil"></span>
            </div>
          </div>
          <p class="mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            libero quisquam debitis iure quos eaque et repellat est doloremque,
            placeat suscipit ad expedita aliquam odio facilis corporis
            cupiditate dolores quas maxime vitae dolorum quidem eveniet! Ab,
            quos tempore! Adipisci, esse!
          </p>
        </div>
      </section>

      <section class="bg-white mt-6 mx-4 px-4 py-2">
        <div>
          <div class="pb-3 border-b flex justify-between">
            <h1 class="text-2xl font-bold">Personal Information</h1>
            <div
              class="w-10 h-10 rounded-full hover:bg-cream flex justify-center items-center cursor-pointer"
            >
              <span class="iconify" data-icon="akar-icons:pencil"></span>
            </div>
          </div>
          <div>
            <div class="my-1">
              <h1>Email:</h1>
              <p>example@email.com</p>
            </div>
            <div class="my-1">
              <h1>Address 1:</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
                hic in enim veritatis nostrum quam, temporibus similique at
                ipsam minima
              </p>
            </div>
            <div class="my-1">
              <h1>Address 2:</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                dolor mollitia quia veritatis est. Quae vel dicta architecto.
              </p>
            </div>
            <div class="my-1">
              <h1>City:</h1>
              <p>Lekki</p>
            </div>
            <div class="my-1">
              <h1>State:</h1>
              <p>Lagos</p>
            </div>
            <div class="my-1">
              <h1>Country:</h1>
              <p>Nigeria</p>
            </div>
          </div>
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
};
</script>
