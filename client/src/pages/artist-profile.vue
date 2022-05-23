<template>
	<div class="py-5">
		<div class="py-5">
			<BContainer class="mx-auto py-5" style="max-width: 800px;">
				<h1 data-aos="fade-right">{{ $route.params.artist }}</h1>

				<p v-html="artist.description"></p>
			</BContainer>
		</div>
	</div>
</template>

<script>
import artists from '@/defaults/artists'

export default {
	data() {
		return {
			artists,
			artist: {},
		}
	},
	created() {
		this.artist = this.artists.find(element => element.name == this.$route.params.artist);
	},
}
</script>