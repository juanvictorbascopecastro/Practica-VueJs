<template>
  <div>
    <fade-loader :loading="isLoading" :color="'#68d391'" :size="100"/>
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable.vue"
import api from "@/api"
export default {
  name: "Home",
  data() {
    return {
      isLoading: false,
      assets: [],
    }
  },
  components: {
    PxAssetsTable,
  },
  created() {
    this.isLoading = true;
    api.getAssets().then((assets) => (this.assets = assets))
    .finally(() => this.isLoading = false);
  },
}
</script>
