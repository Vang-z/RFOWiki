<script setup lang="ts">
import {onMounted, nextTick} from "vue";
import {useRouter} from "vue-router";


const Lead = () => {
  const date = `2024-03`;
  const update_uri = `bf1942f1-477d-4b0b-9451-b96c1a052005`;
  const params = new URLSearchParams(window.location.search);
  const version = params.get(`version`);
  if (!version) return;
  if (window.location.pathname.includes(update_uri)) {
    const ul = document.querySelector(`#下载链接 + ul`);
    if (version !== `Ver@0.1.14`) {
      const li = ul.children[0] as HTMLElement;
      li.style.textDecoration = `line-through`;
    } else {
      const li = ul.children[1] as HTMLElement;
      li.style.textDecoration = `line-through`;
    }
  } else {
    window.location.href = `https://rfo.wiki/notice/${date}/${update_uri}.html?version=${version}`
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
