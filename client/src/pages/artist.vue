<template>
	<BContainer>
		<BRow>
			<BCol
				v-for="(a, i) in artists"
				:key="i"
				cols=12 md=4
			>
				<RouterLink to="">
					<h1 class="my-3" >{{ a.name }}</h1>
				</RouterLink>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
import artists from '@/defaults/artists'

export default {
	data() {
		return {
			artists ,
		}
	},
}
</script>