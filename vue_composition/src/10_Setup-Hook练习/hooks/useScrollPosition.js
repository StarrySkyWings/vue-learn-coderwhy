import { reactive, ref } from "vue";

export default function useScrollPosition() {
  // 使用reactive记录位置
  const scrollPosition = reactive({
    x: 0,
    y: 0,
  });
  // const scrollX = ref(0)
  // const scrollY = ref(0)

  // 监听滚动
  document.addEventListener("scroll", () => {
    scrollPosition.x = window.scrollX
    scrollPosition.y = window.scrollY
  });

  return {
    // scrollX,
    // scrollY,
    scrollPosition
  };
}
