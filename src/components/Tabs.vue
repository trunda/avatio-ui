<template>
  <div class="flex flex-col h-full">
    <div class="p-6 pb-0">
      <h2 class="text-center mb-6 font-semibold text-grey-darkest uppercase text-base">Features</h2>
      <ul class="list-reset flex uppercase font-normal text-grey-dark text-sm justify-between">
        <li class="mr-1 flex-shrink truncate" v-for="(tab, index) in tabs" :key="index">
          <a @click="selectTab(tab)"
             class="truncate cursor-pointer inline-block p-4 hover:text-blue-darker"
             :class="tab.isActive ? ['border-b-4', 'border-orange', 'text-orange'] : []">
            <span>{{ tab.name }}</span>
            <span class="tag" v-if="tab.tags.length > 0" v-for="(tag, index) in tab.tags" :key="index"
                  :style="[tag.color ? {backgroundColor: tag.color} : '']">{{ tag.content }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="flex-1 bg-grey-lighter flex-1 overflow-auto" style="min-height: 0px;">
        <div class="p-6">
          <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabs',
    data() {
      return {
        tabs: [],
      }
    },
    methods: {
      selectTab(selectedTab) {
        this.tabs.forEach(tab => {
          tab.isActive = (tab.name === selectedTab.name)
        })
      },
    },
    created() {
      this.tabs = this.$children
    },
  }
</script>
