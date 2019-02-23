<template>
  <div class="categories">
    <div class="main-div">
      <h2> {{ pageTitle }} $t('LAYOUTS.categories') }}</h2>

      <RouterLink
        v-for="cate in $categories.list"
        :key="cate.name"
        :to="cate.path"
      >
        <IconTag
          icon="folder-open"
          :name="cate.name"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script>
import IconTag from '../IconTag.vue'
const that = this
export default {
  name: 'Categories',

  components: {
    IconTag,
  },

  computed: {
    pageTitle: () => {
      console.log('that: ', this.$t('LAYOUTS.categories'))
      return 'CategTest'
    },
  },

}
</script>
