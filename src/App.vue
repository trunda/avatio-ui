<template>
  <div id="app" class="py-16 h-full bg-grey-light flex">
    <div class="container mx-auto">
      <div class="flex flex-1">
        <div class="w-1/4">
          <div class="p-6 bg-g-grey-dark rounded-br-none rounded-lg shadow-lg">
            <avatar :options="options[sex]" :config="config[sex]" class="rounded-full bg-g-grey-light"></avatar>
            <a @click.prevent="test"
               class="bg-g-orange hover:bg-g-orange-dark hover:shadow-lg p-4 rounded block text-center font-bold no-underline text-grey-lightest uppercase text-sm mt-6"
               href="">Náhodně zamíchat</a>
          </div>
        </div>
        <div class="w-3/4 rounded-lg rounded-tl-none shadow-lg bg-white"
             style="transform: translateY(40px); height: calc(100vh - 4rem - 80px);">
          <selector @sexChanged="(sex) => this.sex = sex" :sex="sex" v-model="options" :config="config"></selector>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  import Avatar, {Config as config} from 'avatio-avatar';
  import Selector from "./components/Selector.vue";
  import _ from 'lodash';

  const sexes = ['Male', 'Female'];

  export default {
    name: 'app',
    components: {Avatar, Selector},
    data() {
      return {
        config,
        sex: 'Female',
        options: {},
      };
    },
    created() {
      this.options = this.initOptions();
    },
    methods: {
      test() {
        const res = {};
        config[this.sex].variants.forEach((variant) => {
          if (!res[variant.component]) {
            res[variant.component] = {};
          }
          res[variant.component][variant.prop] = variant.values[
            Math.floor(Math.random() * variant.values.length)
            ].value;
        });


        const test = _.cloneDeep(this.options);
        test[this.sex] = res;
        this.options = test;
      },

      initOptions() {
        const result = {};
        sexes.forEach((sex) => {
          const res = result[sex] = {};
          config[sex].variants.forEach((variant) => {
            if (!res[variant.component]) {
              res[variant.component] = {};
            }
            if (this.options[variant.component] && this.options[component][variant.prop]) {
              res[variant.component][variant.prop] = this.options[component][variant.prop];
            } else {
              res[variant.component][variant.prop] = variant.values[Math.floor(Math.random() * variant.values.length)].value;
            }
          });
        });

        return result;
      },
    },
  };

</script>

<style>
  body, html {
    height: 100%;
  }
</style>
