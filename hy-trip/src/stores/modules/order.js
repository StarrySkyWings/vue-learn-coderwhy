import { getOrderList } from "@/services";
import { defineStore } from "pinia";

const useOrderStore = defineStore("order", {
  state: () => ({
    orderlist: [],
  }),
  actions:{
    async fetchOrderList(type){
      const res = await getOrderList(type)
      // console.log(res)
      this.orderlist = res.data.data.orders
    }
  }
});

export default useOrderStore
