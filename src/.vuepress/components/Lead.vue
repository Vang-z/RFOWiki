<script setup lang="ts">
import {onMounted, nextTick} from "vue";
import {useRouter} from "vue-router";


const Lead = () => {
  const date = `2024-11`;
  const update_uri = `09452ab4-4d1c-4cad-8564-9c79037ea8f2`;
  const params = new URLSearchParams(window.location.search);
  const version = params.get(`version`);
  if (!version) return;
  if (window.location.pathname.includes(update_uri)) {
    // const ul = document.querySelector(`#下载链接 + ul`);
    // if (version !== `Ver@0.1.51`) {
    //   const li = ul.children[0] as HTMLElement;
    //   li.style.textDecoration = `line-through`;
    // } else {
    //   const li = ul.children[1] as HTMLElement;
    //   li.style.textDecoration = `line-through`;
    // }
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
