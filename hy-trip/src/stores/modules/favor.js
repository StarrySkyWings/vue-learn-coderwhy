import { defineStore } from "pinia";
import { getFavorList, getHistoryList } from "@/services";

const useFavorStore = defineStore("favor", {
  state: () => ({
    favorlist: [],
    historylist: [],
    landlordlist: [],
  }),
  actions: {
    async fetchFavorListData() {
      const res = await getFavorList();
      this.favorlist = res.data.data.items;
    },
    async fetchHistoryListData() {
      const res = await getHistoryList();
      this.historylist = res.data.data.items;
    },
  },
});

export default useFavorStore;
