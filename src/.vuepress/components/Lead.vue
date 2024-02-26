<script setup lang="ts">
import {onMounted, nextTick} from "vue";
import {useRouter} from "vue-router";


const Lead = () => {
  if (window.location.pathname.includes(`d2989548-9aad-46d0-80ee-f92ac6b228fb`)) {
    const params = new URLSearchParams(window.location.search);
    const version = params.get(`version`);
    if (!version) return;
    const ul = document.querySelector(`#下载链接 + ul`);
    if (version !== `Ver@0.1.4`) {
      const li = ul.children[0] as HTMLElement;
      li.style.textDecoration = `line-through`;
    } else {
      const li = ul.children[1] as HTMLElement;
      li.style.textDecoration = `line-through`;
    }
  }
};

onMounted(() => {
  nextTick(() => {
    Lead();
  });

  const router = useRouter();
  router.afterEach(() => {
    nextTick(() => {
      Lead();
    });
  });
});
</script>

<template>
  <ClientOnly>
    <div class="none"></div>
  </ClientOnly>
</template>
