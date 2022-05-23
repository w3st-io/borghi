<template>
	<div class="py-5 bg-img" :style="backgroundStyle">
		<BContainer class="py-5">
			<BRow class="my-5">
				<BCol
					v-for="(a, i) in artists"
					:key="i"
					cols=12 md=4
				>
					<RouterLink :to="`/artist-profile/${a.name}`">
						<h1
							class="my-3 p-0 text-center text-light text-uppercase"
							data-aos="fade"
							:data-aos-delay="i < 27 ? 50 * i : 0"
							data-aos-once="true"
						>
							<span
								class="py-2 bg-glass-darker" style=""
								@mouseover="hoveredOverArtist(i)"
								@mouseleave="removeBG()"
							>{{ a.name }}</span>
						</h1>
					</RouterLink>
				</BCol>
			</BRow>
	</BContainer>
	</div>
</template>

<script>
import artists from '@/defaults/artists'

export default {
	data() {
		return {
			artists ,
			backgroundStyle: '',
		}
	},

	methods: {
		hoveredOverArtist(i) {
			this.backgroundStyle = `
				background-image: url(${artists[i].image});

			`
		},

		removeBG() {
			this.backgroundStyle = ''
		}
	},
}
</script>

<style lang="scss" scoped>
	@import '@/assets/styles';

	.bg-img {
		background-image: url(../assets/bg.jpg);
		background-position: center;
		background-attachment: fixed;
		background-size: inherit;
		background-size: auto 100%;
		background-size: 100% auto;

		@extend .img-black-and-white;
	}
</style>