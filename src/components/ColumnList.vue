<!-- 首页专栏列表组件 -->
<template>
  <div class="row">
    <div v-for="col in columnList" :key="col.id" class="col-4 my-2">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="col.avatar" :alt="col.title" class="card-img-top" />
          <h5 class="card-title">{{ col.title }}</h5>
          <p class="card-text text-left">{{ col.description }}</p>
          <router-link class="btn" :to="`/column/${col.id}`">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, computed } from 'vue';

  //定义接口，限制组件props传递的参数类型
  export interface IColumnProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
  }

  export default defineComponent({
    name: 'ColumnList',
    props: {
      list: {
        type: Array as PropType<IColumnProps[]>, // PropType是vue提供用于泛型断言
        required: true
      }
    },
    setup(props) {
      const columnList = computed(() => {
        return props.list.map(column => {
          if (!column.avatar) {
            column.avatar = require('@/assets/logo.png');
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
