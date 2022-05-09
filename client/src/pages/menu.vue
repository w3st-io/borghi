<template>
	<BContainer class="py-5">
		<BCard
			bg-variant="none"
			class="mb-3 shadow"
			style="background-color: #21201e !important;"
		>
			<!-- [LOADING] -->
			<BRow v-if="loading">
				<BCol cols="12">
					<Loading v-if="loading" />
				</BCol>
			</BRow>
			
			<BRow v-if="!loading && !error">
				<BCol cols="12" class="text-center px-5">
					<a :href="PageData.companyInfo.orderingSystemLink">
						<BButton
							variant="light"
							size="lg"
							class="mt-3 w-100"
							pill
						><h2 class="m-0">Order Now</h2></BButton>
					</a>
				</BCol>

				<BCol v-for="(image, i) in PageData.images" :key="i" cols="12">
					<img :src="image" class="w-100 mb-3">
				</BCol>
			</BRow>

			<BRow v-if="!loading && !error && 0 == 1">
				<BCol
					v-for="(section, i) in pageData.menu" :key="i"
					cols="12" md="6" lg="4" xl="4"
					data-aos="fade-up"
					:data-aos-delay="calcDelay(i)"
				>
					<h1 class="m-0 text-center  text-primary">
						{{ section.title }}
					</h1>
					<p class="h4 mb-3 text-center text-secondary">
						{{ section.description }}
					</p>

					<!-- Options -->
					<BListGroup
						v-for="(option, i) in section.options"
						:key="i"
						class="mb-4"
					>
						<!-- Title -->
						<BListGroupItem v-if="option.title" variant="secondary">
							<h4 class="m-0 text-center">
								<span class="text-primary">
									{{ option.title }}
								</span>
							</h4>
						</BListGroupItem>

						<!-- variants -->
						<BListGroupItem
							v-for="(variant, i) in option.variants"
							:key="i"
							variant="secondary"
							class="py-4"
						>
							<BRow>
								<BCol cols="9" class="pr-0 text-primary">
									<h5 class="font-weight-bold">
										{{ variant.name }}
									</h5>
								</BCol>
									
								<BCol cols="3" class="pl-0 text-right text-dark">
									<p class="m-0 h5">
										${{ variant.cost.toFixed(2) }}
									</p>
								</BCol>

								<BCol v-if="variant.description" cols="12">
									<p>{{ variant.description }}</p>
								</BCol>

								<BCol
									v-if="
										variant.subCat != 'extras' &&
										variant.subCat != 'toppings'
									"
									cols="12"
									class="text-center"
								>
									<a :href="variant.link">
										<BButton
											variant="secondary"
											class="w-100"
										>Order</BButton>
									</a>

									<!-- [HIDDEN] Add to Order -->
									<RouterLink
										v-if="localStorage.node_env == 'development'"
										:to="`/shop/add/${variant._id}`"
									>
										<BButton
											variant="secondary"
											class="w-100"
										>Add to Order</BButton>
									</RouterLink>
								</BCol>
							</BRow>
						</BListGroupItem>
					</BListGroup>

					<!-- Flavor Options -->
					<BListGroup v-if="section.flavors" class="mb-3">
						<BListGroupItem variant="secondary" class="text-center">
							<h4 class="m-0 text-center">
								<span class="text-primary">
									Flavors
								</span>
							</h4>
						</BListGroupItem>

						<BListGroupItem
							v-for="(option, i) in section.flavors.options"
							:key="i"
							class="p-0 text-center"
							:style="spiceColor(section.flavors.options.length, i)"
						>
							<h5 class="m-0 px-5 py-0 text-light">
								{{ option.name }}
							</h5>
						</BListGroupItem>
					</BListGroup>

					<!-- Toppings Options -->
					<BListGroup v-if="section.toppings" class="mb-3">
						<BListGroupItem variant="secondary" class="text-center">
							<h4 class="m-0 text-center">
								<span class="text-primary">
									{{ section.toppings.name }}
								</span>
							</h4>
						</BListGroupItem>

						<BListGroupItem
							v-for="(option, i) in section.toppings.options"
							:key="i"
							variant="info"
							class=" py-1"
						>
							<BRow>
								<BCol cols="8" class="text-left">
									<h5 class="m-0 py-0">{{ option.name }}</h5>
								</BCol>

								<BCol cols="4" class="text-right">
									<p class="m-0 py-0 h5">
										${{ option.cost.toFixed(2) }}
									</p>
								</BCol>
							</BRow>
						</BListGroupItem>
					</BListGroup>

					<!-- Additions -->
					<BListGroup v-if="section.additions" class="mb-4">
						<BListGroupItem variant="secondary" class="text-center">
							<h4 class="m-0 text-center">
								<span class="text-primary">
									Additions
								</span>
							</h4>
						</BListGroupItem>
						
						<BListGroupItem
							v-for="(addition, i) in section.additions"
							:key="i"
							variant="info"
							class=" py-1"
						>
							<BRow>
								<BCol cols="8" class="text-left">
									<h5 class="m-0 py-0">{{ addition.name }}</h5>
								</BCol>

								<BCol cols="4" class="text-right">
									<p class="m-0 py-0 h5">
										${{ addition.cost.toFixed(2) }}
									</p>
								</BCol>
							</BRow>
						</BListGroupItem>
					</BListGroup>
					
					<!-- Sauces -->
					<BListGroup v-if="section.sauces" class="mb-4">
						<BListGroupItem variant="secondary" class="text-center">
							<h4 class="m-0 text-center">
								<span class="text-primary">
									{{ section.sauces.name }}
								</span>
							</h4>
						</BListGroupItem>

						<BListGroupItem
							v-for="(sauce, i) in section.sauces.options"
							:key="i"
							variant="info"
							class="p-1 text-center"
						><h5 class="m-0">{{ sauce.name }}</h5></BListGroupItem>
					</BListGroup>
				</BCol>
			</BRow>

			<BRow v-else>
				<BCol cols="12">
					<h5 class="text-danger">{{ error }}</h5>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	import Loading from '@/components/inform/Loading'
	import PageData from '../defaults/pages/menu'
	import PageService from '@/services/PageService'

	export default {
		components: {
			Loading,
		},

		data() {
			return {
				localStorage: localStorage,
				PageData: PageData,
				reqData: {},
				loading: true,
				error: '',
			}
		},

		async created() {
			await this.getPageData()

			this.log()
		},

		methods: {
			async getPageData() {
				this.reqData = await PageService.s_menu()

				if (this.reqData.status) { this.pageData = this.reqData }
				else { this.error = this.reqData.message }

				this.loading = false
			},

			calcDelay(i) {
				if (i > 2) return 0
				else return 300 * (i)
			},

			spiceColor(length, index) {
				index++
				const increment = 100 / length
				const R = (255 * (index * increment)) / 100
				const G = (255 * (100 - (index * increment))) / 100 
				const B = 0

				return `background-color: rgb(${R}, ${G}, ${B});`
			},

			log() {
				console.log('%%% [PAGES] Menu %%%')
				console.log('pageData:', this.pageData)
			},
		},
	}
</script>