<template>
  <item @selected="select" :sex="sex" :options="variatedOptions" :name="item.name" :selected="selected" :config="config"></item>
</template>

<script>
  import Item from './Item.vue';

  export default {
    components: {Item},

    props: {
      sex: {
        type: String,
        default: 'Female'
      },
      value: {
        required: true,
        type: Object,
      },
      variant: {
        required: true,
        type: Object,
      },
      config: {
        required: true,
        type: Object,
      },
      item: {
        required: true,
        type: Object,
      }
    },

    methods: {
      select() {
        this.$emit('input', this.variatedOptions);
      }
    },

    computed: {
      selected() {
        return this.value[this.sex][this.variant.component][this.variant.prop] === this.item.value;
      },

      variatedOptions() {
        const res = _.cloneDeep(this.value);

        if (!res[this.sex][this.variant.component]) {
          res[this.sex][this.variant.component] = {};
        }

        res[this.sex][this.variant.component][this.variant.prop] = this.item.value;

        return res;
      }
    }
  }
</script>
