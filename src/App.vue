<template>
  <global-header :user="user" />
  <Loader v-if="isLoading" text="拼命加载中..." background="rgba(0, 0, 0, 0.8)"></Loader>
  <div class="content py-3">
    <router-view />
  </div>
  <footer class="text-center py-3 text-secondary bg-light mt-6">
    <small>
      <ul class="list-inline mb-0">
        <li class="list-inline-item">纸糊专栏</li>
        <li class="list-inline-item">课程</li>
        <li class="list-inline-item">文档</li>
        <li class="list-inline-item">联系</li>
        <li class="list-inline-item">更多</li>
      </ul>
    </small>
  </footer>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useStore } from 'vuex';
  import { GlobalDataProps } from './store';
  import GlobalHeader from '@/components/GlobalHeader.vue';
  import Loader from '@/components/Loader.vue';

  export default defineComponent({
    name: 'App',
    components: {
      GlobalHeader,
      Loader
    },
    setup() {
      const store = useStore<GlobalDataProps>();
      const currentuser = computed(() => store.state.user);
      const isLoading = computed(() => store.state.loading);
      return {
        user: currentuser,
        isLoading
      };
    }
  });
</script>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
