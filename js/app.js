// Tu código aquí.

import {
  createApp,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const number = ref(0);
    const increase = () => {
      number.value++;
    };
    const decrease = () => {
      number.value--;
    };

    const getColorCount = () => {
      if (number.value == 0) {
        return 'black';
      } else if (number.value > 0) {
        return "green";
      } else 
      return "red";
    };

    //OTRA MANERA DE HACERLO SERIA EN EL HTML: :style"{color: counter === 0 ? 'gray' : (counter >0 ? 'green' : 'red')}"   o bien poner :class="{'text-success': counter>0, 'text-danger':counter<0}"

    return {
      number,
      increase,
      decrease,
      getColorCount,
    };
  },
}).mount("#app");
