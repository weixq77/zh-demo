<!-- 全局头部 -->
<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link class="navbar-brand" to="/">纸糊</router-link>
    <ul v-if="!user.isLogin" class="list inline mb-0">
      <li class="list-inline-item">
        <router-link class="btn btn-outline-light" to="/login">登录</router-link>
      </li>
      <li class="list-inline-item">
        <router-link class="btn btn-outline-light" to="/login">注册</router-link>
      </li>
    </ul>
    <ul v-else class="list inline mb-0">
      <li class="list-inline-item">
        <drop-downs :title="`你好${user.name}`">
          <dropdown-item><a href="#" class="dropdown-item">新建文章</a></dropdown-item>
          <dropdown-item disabled><a href="#" class="dropdown-item">编辑资料</a></dropdown-item>
          <dropdown-item><a href="#" class="dropdown-item">退出登录</a></dropdown-item>
        </drop-downs>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import DropDowns from './DropDowns.vue';
  import DropdownItem from './DropdownItem.vue';

  export interface IUserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
  }

  export default defineComponent({
    name: 'GlobalHeader',
    components: { DropDowns, DropdownItem },
    props: {
      user: {
        type: Object as PropType<IUserProps>,
        required: true
      }
    },
    setup() {
      return {};
    }
  });
</script>

<style lang="less" scoped></style>
