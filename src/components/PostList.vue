<template>
  <div class="post-list">
    <article v-for="post in list" :key="post._id" class="card mb-3">
      <div class="card-body">
        <h4>{{ post.title }}</h4>
        <div class="row my-3 align-items-center">
          <div v-if="post.image" class="col-3">
            <img :src="post.image.url" alt="" class="rounded-lg w-100" />
          </div>
          <p :class="[{ 'col-9': post.image }, 'card-content']">{{ post.content }}</p>
        </div>
        <span class="text-muted">{{ post.createdAt }}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import { PostProps } from '../store';
  export default defineComponent({
    name: 'PostList',
    props: {
      list: {
        require: true,
        type: Array as PropType<PostProps[]>
      }
    },
    setup() {
      return {};
    }
  });
</script>

<style lang="less" scoped>
  .card-content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
