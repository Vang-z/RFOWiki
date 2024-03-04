<script setup lang="ts">
import {onMounted, nextTick} from "vue";
import {useRouter} from "vue-router";


const Lead = () => {
  const date = `2024-03`;
  const update_uri = `9850938e-a268-49cd-9e8b-7c20e37d0b40`;
  const params = new URLSearchParams(window.location.search);
  const version = params.get(`version`);
  if (!version) return;
  if (window.location.pathname.includes(update_uri)) {
    const ul = document.querySelector(`#下载链接 + ul`);
    if (version !== `Ver@0.1.9`) {
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
