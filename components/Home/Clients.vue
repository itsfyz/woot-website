<template>
  <section class="py-16 lg:py-24">
    <div class="container mx-auto">
      <p class="text-center text-gray-500 mb-6 font-semibold text-sm">
        Used by 1000+ organizations worldwide
      </p>
    </div>
    <div class="container mx-auto relative overflow-hidden gradient-fade">
      <div class="w-[3492px] slide-animate flex">
        <div class="relative overflow-hidden inline-block w-[1731px] h-6">
          <img
            alt=""
            class="absolute top-0 left-0 w-full h-full object-cover object-center transition-all duration-500"
            src="https://images.ctfassets.net/vkdbses00qqt/6gYYhIZTJq0VHl3tXT8oPC/18d49aaa1fd3fed25b6b6593350897b7/homepage-used-by-logos__2_.png?w=1731&amp;h=24&amp;q=80&amp;fm=webp&amp;fit=fill"
          />
        </div>
        <div class="relative overflow-hidden inline-block w-[1731px] h-6 ml-8">
          <img
            alt=""
            class="absolute top-0 left-0 w-full h-full object-cover object-center transition-all duration-500"
            src="https://images.ctfassets.net/vkdbses00qqt/6gYYhIZTJq0VHl3tXT8oPC/18d49aaa1fd3fed25b6b6593350897b7/homepage-used-by-logos__2_.png?w=1731&amp;h=24&amp;q=80&amp;fm=webp&amp;fit=fill"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-animate {
  animation-play-state: running;
  animation: slider 80s linear infinite;
}

.gradient-fade::after {
  content: "";
  background: linear-gradient(
    to right,
    #fff 0,
    rgba(255, 255, 255, 0.1) 10%,
    rgba(255, 255, 255, 0.1) 90%,
    #fff 100%
  );
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

@keyframes slider {
  0% {
    will-change: transform;
    transform: translateX(0);
  }
  100% {
    will-change: transform;
    transform: translateX(calc(-50% - 15px));
  }
}
</style>
