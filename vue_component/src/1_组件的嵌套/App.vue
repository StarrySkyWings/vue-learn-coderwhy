<template>
  <div class="app">
    <!-- app header -->
    <AppHeader></AppHeader>

    <!-- app content -->
    <AppContent></AppContent>

    <!-- app footer -->
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent,
    AppFooter
  }
}
</script>

<style scoped></style>