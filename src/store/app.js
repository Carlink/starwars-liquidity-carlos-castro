// Using Pinia since VUEX is the recommended way to go with Vue3
// it uses almost the same sintaxis and structure

import { defineStore } from "pinia";
import mock_json from "@/assets/request_mock/page1.json";

const highlightText = (string, highlightString) => {
  var reg = new RegExp(highlightString, "gi");
  var final_str = string.replace(reg, function (str) {
    return '<span style="background-color: yellow">' + str + "</span>";
  });
  return final_str;
};

export const useAppStore = defineStore("app", {
  state: () => ({
    categories: [
      "films",
      "people",
      "planets",
      "species",
      "starships",
      "vehicles",
    ],
    swData: null,
    searchTerm: "",
    categoryViewData: {},
  }),
  actions: {
    async getAllCategories(searchQuery) {
      this.searchTerm = searchQuery;
      let swPromises = [];
      const url = import.meta.env.VITE_SW_API;
      const options = {
        method: "GET",
      };
      for (let category in this.categories) {
        swPromises.push(
          new Promise((resolve, reject) => {
            return fetch(
              `${url}${this.categories[category]}/?search=${searchQuery}`,
              options
            )
              .then((response) => response.json())
              .then((response) => {
                return resolve({
                  ...response,
                  category: this.categories[category],
                });
              })
              .catch((error) => reject(error));
          })
        );
      }
      this.swData = await Promise.all(swPromises);
      return this.swGroupedCategories;
    },
    async getCategory(category) {
      const url = import.meta.env.VITE_SW_API;
      const options = {
        method: "GET",
      };
      const response = await fetch(`${url}${category}`, options);
      const jsonResponse = await response.json();
      console.log("sending data", jsonResponse.results);
      this.categoryViewData = jsonResponse.results;
      return jsonResponse.results;
    },
    getMockCategory() {
      this.categoryViewData = mock_json.results;
      return mock_json.results;
    },
    // TODO ERASE ITEM
    eraseItem(item) {
      this.categoryViewData = this.categoryViewData.filter((el) => {
        return el.name !== item.name;
      });
      return this.categoryViewData;
    },
    // TODO EDIT ITEM
    // async editItem(item) {

    // }
    // TODO NEW ITEM
    // async newItem(item) {

    // }
  },
  getters: {
    swGroupedCategories: (state) => {
      const categoryObject = [];
      if (!state.swData) return [];
      state.swData.forEach((category) => {
        if (category.results.length > 0) {
          const items = category.results.splice(0, 3).map((el) => {
            return {
              label: highlightText(el.name || el.title, state.searchTerm),
              value: el.name || el.title,
            };
          });
          categoryObject.push({
            label: category.category,
            items: [
              ...items,
              {
                label: "View all",
                value: "View all",
                category: category.category,
              },
            ],
          });
        }
      });
      return categoryObject;
    },
  },
});
