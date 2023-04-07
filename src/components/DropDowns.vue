<template>
  <div class="dropdown" ref="dropdownRef">
    <button class="btn btn-secondary dropdown-toggle" type="button" @click.prevent="toggleOpen">
      {{ title }}
    </button>
    <ul class="dropdown-menu" v-if="isOpen" :style="{ display: 'block' }">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import useClickOutside from '../hooks/useClickOutside';

export interface IMenuProps {
  name: string;
  action: string;
}

export default defineComponent({
  name: 'DropDown',
  props: {
    title: String
  },
  setup() {
    const isOpen = ref(false);
    // 控制下拉框展开/关闭
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };

    // 添加全局事件
    const dropdownRef = ref<null | HTMLElement>(null);
    const isClickOutside = useClickOutside(dropdownRef);

    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false;
      }
    });
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    };
  }
});
</script>

<style lang="less" scoped></style>
