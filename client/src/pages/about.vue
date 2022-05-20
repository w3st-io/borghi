<template>
<BContainer fluid class="m-0 p-0">
	<BContainer class="my-5" data-aos="fade-up">
		<About />
	</BContainer>

	<ContactInfo />
</BContainer>
</template>

<script>
	import About from '@/components/About'
	import ContactInfo from '@/components/ContactInfo'
	
	export default {
		components: {
			About,
			ContactInfo
		}
	}
</script>