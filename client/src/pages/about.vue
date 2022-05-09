<template>
	<BContainer class="py-5">
		<BRow class="mx-1 mb-5 shadow">
			<BCol
				cols="12"
				class="py-3 bg-primary border-bottom border-light bg-dotted"
				style="border-width: 3px !important;"
			>
				<h1 class="m-0 text-center  text-light" data-aos="fade-up">
					<span class="px-2 bg-primary">
						{{ pData.r1.c1.title }}
					</span>
				</h1>
			</BCol>

			<!-- [IMAGE] -->
			<BCol
				cols="12" lg="6"
				class="d-none d-lg-block p-0 bg-light border-right border-light"
				style="overflow: hidden; border-width: 3px !important;"
				data-aos="fade-right"
			>
				<img
					:src="pData.r1.c2.image"
					alt="Vinyl Records Image Here"
					class="h-100"
					data-aos="fade-right"
				>
			</BCol>

			<!-- [OUR-MISSION] -->
			<BCol cols="12" lg="6" class="p-5 bg-light bg-striped" data-aos="fade-up">
				<h2 class="mb-4 text-center text-primary">
					{{ pData.r1.c3.title }}
				</h2>
				<p v-html="pData.r1.c3.description" class="mb-5 text-justify"></p>

				<a
					href="https://medium.com/yardcouch-com/a-professor-and-engineers-unexpected-philosophy-to-side-hustle-5a329c0a3235"
					target="blank"
				>
					<BButton
						variant="primary"
						size="lg"
						class="w-100"
					>
						Check Out this Article About Us!
					</BButton>
				</a>
			</BCol>
		</BRow>

		<!-- [FOUNDERS] -->
		<BRow v-if="0 == 1" class="mx-1 mb-5 bg-light bg-striped shadow">
			<BCol
				cols="12"
				class="py-3 bg-dark border-bottom border-light bg-dotted"
				style="border-width: 3px !important;"
			>
				<h1 class="m-0 text-center  text-light" data-aos="fade-up">
					<span class="px-2 bg-dark">
						The Founders
					</span>
				</h1>
			</BCol>

			<BCol cols="12" class="py-5">
				<BRow>
					<BCol cols="12" md="4">
						<BCard
							img-src="https://images2.imgbox.com/65/87/DIOor5nJ_o.jpeg"
							img-alt="Image"
							img-top
							tag="article"
							class="w-100 mb-3 shadow"
						>
							<h3 class="text-center mb-3  text-primary">Jonny</h3>
							<a :href="companyInfo.jonnyPhoneNumberLink" class="">
								<BButton
									size="lg"
									variant="primary"
									class="w-100"
								>Contact</BButton>
							</a>
						</BCard>
					</BCol>

					<BCol cols="12" md="4">
						<BCard
							title=""
							img-src="https://images2.imgbox.com/c8/8f/AyRfvOxf_o.jpeg"
							img-alt="Image"
							img-top
							tag="article"
							class="w-100 mb-3 shadow"
						>
							<h3 class="text-center mb-3  text-primary">Joey</h3>
							<a :href="companyInfo.joeyPhoneNumberLink" class="">
								<BButton
									size="lg"
									variant="primary"
									class="w-100"
								>Contact</BButton>
							</a>
						</BCard>
					</BCol>

					<BCol cols="12" md="4">
						<BCard
							title=""
							img-src="https://images2.imgbox.com/e9/52/VbtIPOUX_o.jpeg"
							img-alt="Image"
							img-top
							tag="article"
							class="w-100 mb-3 shadow"
						>
							<h3 class="text-center mb-3  text-primary">Gaby</h3>
							<a :href="companyInfo.joeyPhoneNumberLink" class="">
								<BButton
									size="lg"
									variant="primary"
									class="w-100"
								>Contact</BButton>
							</a>
						</BCard>
					</BCol>
				</BRow>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import companyInfo from '../defaults/companyInfo'
	import pData from '../defaults/pages/about'

	export default {
		data() {
			return {
				companyInfo: companyInfo,
				pData: pData,
			}
		},
	}
</script>