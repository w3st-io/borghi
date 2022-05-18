<template>
	<div id="app">
		<!-- UI -->
		<NavBar />

		<div v-if="!$store.state.isHomePage" class="d-none d-lg-block" style="height: 126px;" />
		<div v-if="!$store.state.isHomePage" class="d-block d-lg-none" style="height: 85.11px;" />

		<!-- RouterView -->
		<RouterView />

		<!-- Footer -->
		<Footer />
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import NavBar from "@/components/nav/NavBar"
	import Footer from "@/components/nav/Footer"

	export default {
		components: {
			NavBar,
			Footer,
		},

		methods: {
			onResize() {
				this.$store.state.window.innerWidth = window.innerWidth
			},
		},

		mounted() {
			this.$nextTick(() => {
				window.addEventListener('resize', this.onResize)
			})
		},

		beforeDestroy() { 
			window.removeEventListener('resize', this.onResize)
		},
	}
</script>

<style lang="scss">
	// [IMPORT] // heading // * //
	@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100&display=swap');

	* { font-family: 'League Spartan', sans-serif !important; }
	h1,h2,h3,h4,h5,h6 { font-family: 'League Spartan', sans-serif !important; }

	* {
		letter-spacing: .1rem;
	}

</style>