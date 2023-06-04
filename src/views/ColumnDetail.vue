<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar && column.avatar.url" alt="" class="rounded-circle border w-100" />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="column-desc text-muted">{{ column?.description }}</p>
      </div>
    </div>
    <post-list :list="list" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import PostList from '@/components/PostList.vue';

  export default defineComponent({
    name: 'ColumnDetail',
    components: { PostList },
    setup() {
      const store = useStore();
      const route = useRoute();
      const currentid = route.params.id;

      onMounted(() => {
        store.dispatch('fetchPosts', currentid);
      });

      const column = computed(() => store.getters.getColumnById(currentid));
      const list = computed(() => store.state.posts);
      return {
        column,
        list
      };
    }
  });
</script>

<style lang="less" scoped>
  .column-desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
