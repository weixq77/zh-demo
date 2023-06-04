<!-- 首页专栏列表组件 -->
<template>
  <div class="row">
    <div v-for="col in columnList" :key="col._id" class="col-4 my-2">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="col.avatar && col.avatar.url"
            :alt="col.title"
            class="card-img-top rounded-circle border border-light my-3"
          />
          <h5 class="card-title">{{ col.title }}</h5>
          <p class="card-text text-left">{{ col.description }}</p>
          <router-link class="btn" :to="`/column/${col._id}`">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue';
  import { ColumnProps } from '../store';

  export default defineComponent({
    name: 'ColumnList',
    props: {
      list: {
        type: Array as PropType<ColumnProps[]>, // PropType是vue提供用于泛型断言
        required: true
      }
    },
    setup(props) {
      const columnList = computed(() => {
        return props.list.map(column => {
          if (!column.avatar) {
            column.avatar = {
              url: require('@/assets/logo.png')
            };
          } else {
            column.avatar.url = column.avatar.url + '?x-oss-process=image/resize,m_pad,h_50,w_50';
          }
          return column;
        });
      });
      return {
        columnList
      };
    }
  });
</script>
<style scoped>
  .card-img-top {
    width: 50px;
    height: 50px;
  }
  .card-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
