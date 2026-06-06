import { getGuessulike, getSearchConditions, getSearchHouse } from "@/services";
import { defineStore } from "pinia";

const useSearchStore = defineStore("search", {
  state: () => ({
    searchConditions: [],
    searchHouse:[],
    // guessulike:[]
  }),
  actions: {
    async fetchSearchConditions(){
        const res = await getSearchConditions()
        this.searchConditions = res.data.data.allConditions
    },
    async fetchSearchHouse(){
      const res = await getSearchHouse()
      this.searchHouse = res.data.data
    },
    // async fetchGuessulike(){
    //   const res = await getGuessulike()
    //   console.log(res)
    //   this.guessulike = res.data
    // }
  },
});

export default useSearchStore
