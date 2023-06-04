<template>
  <teleport to="#back">
    <div class="load-cmp" :style="{ background }">
      <div class="">
        <div class="spinner-border text-primary" role="status">
          <!-- <span class="sr-only">{{ text || 'Loading...' }}</span> -->
        </div>
        <p v-if="text" class="text-primary small">{{ text }}</p>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import { defineProps, onUnmounted } from 'vue';
  // 定义props
  defineProps({
    text: {
      type: String
    },
    background: {
      type: String
    }
  });

  //   创建loading展示的节点
  function createDom() {
    const node = document.createElement('div');
    node.id = 'back';
    document.body.appendChild(node);
    return node;
  }
  const backNode = createDom();

  //   移除loading展示的节点
  function removeDom() {
    document.body.removeChild(backNode);
  }

  // 移除
  onUnmounted(() => {
    removeDom();
  });
</script>

<style lang="less" scoped>
  .load-cmp {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-align: center;
    background: rgba(255, 255, 255, 0.5);
    z-index: 999;
  }
</style>
