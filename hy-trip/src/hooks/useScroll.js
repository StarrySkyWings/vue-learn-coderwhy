import { onMounted, onUnmounted, ref } from "vue";
import { throttle } from "underscore";

// export default function useScroll(reachBottomCB) {
//   // 监听window窗口的滚动
//   // 1.当我们离开页面时,我们需要移除监听
//   // 2.如果别的页面也进行类似的监听，会编写重复代码
//   const scrollListenerHandler = () => {
//     const clientHeight = document.documentElement.clientHeight;
//     const scrollTop = document.documentElement.scrollTop;
//     const scrollHeight = document.documentElement.scrollHeight;
//     if (clientHeight + scrollTop >= scrollHeight) {
//       // homeStore.fetchHouselistData();
//       if(reachBottomCB) reachBottomCB()
//     }
//     // console.log(clientHeight,scrollTop,scrollHeight)
//   };
//   onMounted(() => {
//     window.addEventListener("scroll", scrollListenerHandler);
//   });

//   onUnmounted(() => {
//     window.removeEventListener("scroll", scrollListenerHandler);
//   });
// }

// export default function useScroll() {
//   const isReachBottom = ref(false);
//   const clientHeight = ref(0);
//   const scrollTop = ref(0);
//   const scrollHeight = ref(0);

//   // 防抖/节流
//   const scrollListenerHandler = throttle(() => {
//     clientHeight.value = document.documentElement.clientHeight;
//     scrollTop.value = document.documentElement.scrollTop;
//     scrollHeight.value = document.documentElement.scrollHeight;
//     if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
//       isReachBottom.value = true;
//     }
//     // console.log(clientHeight,scrollTop,scrollHeight)
//   }, 100);
//   onMounted(() => {
//     window.addEventListener("scroll", scrollListenerHandler);
//   });

//   onUnmounted(() => {
//     window.removeEventListener("scroll", scrollListenerHandler);
//   });

//   return { isReachBottom, clientHeight, scrollTop, scrollHeight };
// }

export default function useScroll(elRef) {
  let el = window;

  const isReachBottom = ref(false);
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);

  // 防抖/节流
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight;
      scrollTop.value = document.documentElement.scrollTop;
      scrollHeight.value = document.documentElement.scrollHeight;
    } else {
      clientHeight.value = el.clientHeight;
      scrollTop.value = el.scrollTop;
      scrollHeight.value = el.scrollHeight;
    }
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReachBottom.value = true;
    }
    // console.log(clientHeight,scrollTop,scrollHeight)
  }, 100);
  onMounted(() => {
    if (elRef) {
      el = elRef.value;
    }
    el.addEventListener("scroll", scrollListenerHandler);
  });

  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler);
  });

  return { isReachBottom, clientHeight, scrollTop, scrollHeight };
}
