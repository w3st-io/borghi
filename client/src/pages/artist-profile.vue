<template>
	<div class="py-5">
		<div class="py-5">
			<BContainer class="mx-auto py-5" style="max-width: 800px;">
				<h1 class="mb-5 text-uppercase" data-aos="fade-right">{{ $route.params.artist }}</h1>

				<p v-html="artist.description" class="mb-5"></p>

				<BRow>
					<BCol
						v-for="(f, i) in artist.figures"
						:key="i"
						cols="12" sm="6"
						class="mb-4"
						data-aos="fade-up"
						data-aos-once="true"
					>
						<img :src="f.src" alt="" class="w-100">
						<h6 class="my-3 font-weight-bold">{{ f.text }}</h6>
					</BCol>
				</BRow>
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