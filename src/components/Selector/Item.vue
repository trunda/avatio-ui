<template>
  <div>
    <div @click.prevent="select"
         class="cursor-pointer hover:bg-g-orange flex-1 h-full p-3 flex flex-col justify-between rounded-lg"
         :class="selected ? ['bg-g-orange'] : ['bg-g-grey'] ">
      <strong class="text-ellipsis text-grey-light text-xs block text-center uppercase mb-2">{{ name }}</strong>
      <avatar :options="options[sex]" :config="config[sex]" class="rounded-full bg-g-grey-light"></avatar>
    </div>
  </div>
</template>

<script>
  import Avatar from 'avatio-avatar';

  export default {
    components: {Avatar},

    props: {
      sex: {
        type: String,
        default: 'Female'
      },
      options: {
        required: true,
        type: Object,
      },
      name: {
        required: true,
        type: String,
      },
      selected: {
        default: false,
        type: Boolean,
      },
      config: {
        type: Object,
        required: false,
      }
    },

    methods: {
      select() {
        this.$emit('selected');
      }
    },
  }
</script>
