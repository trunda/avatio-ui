<template>
  <div class="lg:h-full">
    <tabs>
      <tab name="Gender" :selected="true">
        <div class="mb-4 p-6 bg-g-grey-light rounded-lg w-full">
          <strong class="text-grey-darker flex items-center mb-4">
            <i class="inline-block bg-g-orange w-3 h-3 mr-2 relative rounded-full" style="top: -1px"></i>
            Gender
          </strong>
          <div class="flex flex-wrap -mx-1">
              <item @selected="$emit('sexChanged', s)" class="w-1/3 md:w-1/4 lg:w-1/8 px-1 mb-2" v-for="(c, s) in config" :name="c.label" :config="config" :options="value" :sex="s" :selected="s === sex"></item>
          </div>
        </div>
      </tab>
      <tab v-for="tab in tabs" :name="tab">
        <div v-for="variant in variants(tab)" class="mb-4 p-6 bg-g-grey-light rounded-lg w-full" v-if="variant.values.length > 1">
          <strong class="text-grey-darker flex items-center mb-4">
            <i class="inline-block bg-g-orange w-3 h-3 mr-2 relative rounded-full" style="top: -1px"></i>
            {{ variant.label }}
          </strong>
          <div class="flex flex-wrap -mx-1">
            <item-variant v-for="item in variant.values" class="w-1/3 md:w-1/4 lg:w-1/8 px-1 mb-2" :variant="variant" :sex="sex" :item="item" :value="value" @input="change" :config="config"></item-variant>
          </div>
        </div>
      </tab>
    </tabs>
  </div>
</template>
<script>
  import _ from 'lodash';

  import Tabs from './Tabs.vue';
  import Tab from './Tabs/Tab.vue';
  import ItemVariant from "./Selector/ItemVariant.vue";
  import Item from './Selector/Item.vue';

  export default {
    components: {ItemVariant, Item, Tabs, Tab},

    props: {
      sex: {
        type: String,
        default: 'Female'
      },
      value: {
        required: true,
        type: Object,
      },
      config: {
        required: true,
        type: Object,
      }
    },

    computed: {
      tabs() {
        return _.uniq(_.map(this.config[this.sex].variants, "tab"));
      }
    },

    methods: {
      change(value) {
        this.$emit('input', value);
      },

      variants(tab) {
        const res = [];
        this.config[this.sex].variants.forEach((variant) => {
          if (variant.tab === tab) {
            res.push(variant)
          }
        });

        return res;
      }
    }
  }
</script>
