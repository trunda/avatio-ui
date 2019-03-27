<template>
  <div id="app" class="py-16 px-4 lg:px-0 lg:h-full bg-grey-light flex">
    <div class="container mx-auto">
      <div class="flex flex-wrap flex-1 relative">
        <div class="w-full lg:w-1/4">
          <div class="p-6 bg-g-grey-dark rounded-b-none lg:rounded-bl-lg rounded-lg shadow-lg flex flex-col">
            <avatar :options="options[sex]" :config="config[sex]" class="w-1/3 lg:w-full rounded-full bg-g-grey-light self-center"></avatar>
            <a @click.prevent="randomize(sex)"
               class="bg-g-orange hover:bg-g-orange-dark hover:shadow-lg p-4 rounded block text-center font-bold no-underline text-grey-lightest uppercase text-sm mt-6"
               href="">Random</a>
          </div>

          <div class="hidden lg:block mt-6 p-6 bg-g-grey-dark lg:rounded-r-none rounded-lg shadow-lg text-grey">
            <strong>Image URL (SVG)</strong><br>
            <textarea onclick="this.focus();this.select()" readonly="readonly" class="p-2 text-grey rounded bg-g-grey text-sm whitespace-pre-line break-words w-full my-2 font-mono outline-none" rows="5" style="resize: none;">
https://img.avatio.cool/avatar.svg{{imgPath}}
            </textarea>
            <strong>Image URL (PNG)</strong><br>
            <textarea onclick="this.focus();this.select()" readonly="readonly" class="p-2 text-grey rounded bg-g-grey text-sm whitespace-pre-line break-words w-full mt-2 font-mono outline-none" rows="5" style="resize: none;">
https://img.avatio.cool/avatar.png{{imgPath}}
            </textarea>
          </div>

          <div class="hidden lg:block p-6 text-grey-dark text-sm leading-loose text-right flex justify-between flex-col container pin-t">
            <p>
              Designed by <a class="text-grey-dark font-bold no-underline" href="https://github.com/teneresa">Teneresa 🎨️</a>
            </p>
            <p>
              Developed by <a class="text-grey-dark font-bold no-underline" href="https://github.com/trunda">Jakub Truneček ❤️</a>
            </p>
            <p>
              <a class="text-grey-dark font-bold no-underline" href="https://github.com/trunda/avatio-avatar">GitHub️</a>
            </p>
          </div>

        </div>
        <div class="pin-r absolute">
          <a class="github-button" href="https://github.com/trunda/avatio-avatar" data-size="large" data-show-count="false"  data-icon="octicon-star" aria-label="Star trunda/avatio-avatar on GitHub">Star</a>
          <a class="github-button" href="https://github.com/trunda" data-size="large" data-show-count="false"  data-icon="octicon-eye" aria-label="Follow @trunda on GitHub">Follow @trunda</a>
          <a class="github-button" href="https://github.com/trunda/avatio-avatar/issues" data-size="large" data-show-count="false" data-icon="octicon-issue-opened" aria-label="Issue trunda/avatio-avatar on GitHub">Issue</a>
        </div>
        <div class="w-full lg:w-3/4 rounded-lg rounded-t-none lg:rounded-tl-none shadow-lg bg-white offsetted">
          <selector @sexChanged="(sex) => this.sex = sex" :sex="sex" v-model="options" :config="config"></selector>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  import Avatar from 'avatio-avatar/src/Avatar.vue';
  import config from 'avatio-avatar/src/avatio';
  import Selector from "./components/Selector.vue";
  import createHistory from 'history/createBrowserHistory'

  const qs = require('qs');
  const history = createHistory();

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
      // 1. parse from URI
      this.randomize();
      this.loadState();


      history.listen((location, action) => {
        if (action === 'POP') {
          if (!_.eq(this.currentState, this.stateFromUrl())) {
            this.loadState();
          }
        }
      })

    },

    watch: {
      currentState() {
        this.storeState();
      }
    },

    computed: {
      currentState() {
        return {
          sex: this.sex,
          options: this.options
        };
      },
      currentStateString() {
        return "?" + qs.stringify(this.currentState);
      },
      imgPath() {
        return "?" + qs.stringify({
          sex: this.sex,
          options: this.options[this.sex]
        });
      }
    },

    methods: {
      loadState() {
        this.sex = this.stateFromUrl()['sex'] || 'Female';
        this.options = _.merge(this.options, this.stateFromUrl()['options'] || {});
      },

      storeState() {
        if (!_.eq(this.currentState, this.stateFromUrl())) {
          history.push(this.currentStateString)
        }
      },

      stateFromUrl() {
        return qs.parse(window.location.search.replace(/^\?/, ''));
      },

      randomize(sex = null) {
        if (sex) {
          const res = _.cloneDeep(this.options);
          res[sex] = this.random(sex);
          this.options = res;
        } else {
          sexes.forEach((sex) => {
            const res = _.cloneDeep(this.options);
            res[sex] = this.random(sex);
            this.options = res;
          })
        }

      },

      random(sex) {
        const res = {};
        config[sex].variants.forEach((variant) => {
          if (!res[variant.component]) {
            res[variant.component] = {};
          }
          res[variant.component][variant.prop] = variant.values[
            Math.floor(Math.random() * variant.values.length)
            ].value;
        });

        return res;
      },
    },
  };

</script>

<style>
  body, html {
    height: 100%;
  }
</style>
