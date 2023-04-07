<template>
  <li class="dropdown-option" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="less">
.dropdown-option.is-disabled * {
  color: #666;
  pointer-events: none;
  background-color: transparent;
}
</style>
