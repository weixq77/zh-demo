<template>
  <global-header :user="user" />
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

  export default defineComponent({
    name: 'App',
    components: {
      GlobalHeader
    },
    setup(props) {
      const store = useStore<GlobalDataProps>();
      const currentuser = computed(() => store.state.user);
      return {
        user: currentuser
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
