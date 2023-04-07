import { ref, onMounted, onUnmounted, Ref } from 'vue';

// 绑定全局页面点击事件，比如下拉框：点击除选项外的页面其他地方会自动关闭下拉框
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false);
  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false;
      } else {
        isClickOutside.value = true;
      }
    }
  };

  onMounted(() => {
    document.addEventListener('click', handler);
  });
  onUnmounted(() => {
    document.removeEventListener('click', handler);
  });

  return isClickOutside;
};

export default useClickOutside;
