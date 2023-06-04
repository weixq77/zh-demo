<template>
  <div class="container">
    <div class="container-top py-4 text-center">
      <button type="button" class="btn btn-primary" @click="jump">开始写文章</button>
    </div>
    <column-list :list="list" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import { GlobalDataProps } from '../store';
  import ColumnList from '@/components/ColumnList.vue';

  export default defineComponent({
    name: 'Home',
    components: {
      ColumnList
    },
    setup() {
      const store = useStore<GlobalDataProps>();
      const router = useRouter();

      // 专栏列表
      const list = computed(() => store.state.columns);

      // 页面跳转
      const jump = () => {
        router.push('/create');
      };

      onMounted(() => {
        // 获取专栏列表数据
        store.dispatch('fetchColumns');
      });

      return {
        list,
        jump
      };
    }
  });
</script>
