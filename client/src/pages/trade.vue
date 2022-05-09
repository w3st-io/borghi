<template>
	<BContainer>
		<BRow class="mx-1 my-5 shadow">
			<!-- Trade -->
			<BCol
				cols="12"
				class="bg-primary border-bottom border-light bg-dotted"
				style="border-width: 3px !important;"
			>
				<h1 class="my-3 text-center text-light">
					<span class="px-2 bg-primary">
						Trade it Up!
					</span>
				</h1>
			</BCol>

			<!-- Buy -->
			<BCol cols="12" lg="8" class="bg-light text-dark bg-striped">
				<ul class="list-group my-4" data-aos="fade-right">
					<li class="list-group-item bg-light">
						<h2 class="my-2 text-center text-primary">
							Here Is a List of Things We Buy!
						</h2>
					</li>
					<li class="list-group-item">
						<h4 class="text-primary">
							Music Related
						</h4>
						Vinyl records, HI-Fi gear, Cd’s, Cassettes, Turn Tables, Speakers, Audio Equipment, 8 Tracks, Amplifiers, Phase Linear.
					</li>
					<li class="list-group-item">
						<h4 class="text-primary">
							Video Games
						</h4>
						Nintendo, Super Nintendo, Sega Genesis, Sega Saturn, Game Boy, Gameboy Color Etc.
					</li>
					<li class="list-group-item">
						<h4 class="text-primary">
							Off Beat Items
						</h4>
						Trading Cards (Pokémon, Baseball, Magic the Gathering, Basketball), Vintage T-Shirts, Old I Phones, Power Tools, Used Electronics.
					</li>
				</ul>

				<RouterLink to="/contact" class="">
					<div class="text-center">
						<BButton
							variant="primary"
							size="lg"
							class="w-100 mb-3 shadow"
						>Get an Appraisal</BButton>
					</div>
				</RouterLink>
			</BCol>

			<BCol
				cols="12" lg="4"
				class="p-0 bg-light border-left border-light"
				style="
					background-image: url('https://images2.imgbox.com/df/67/hJuA23jF_o.jpeg');
					background-position: right;
					border-width: 3px !important;
				"
			>
				<div class="py-sm-3 bg-shade">
					<div class="py-sm-5">
						<div class="py-sm-5">
							<div class="py-sm-5">
								<div class="py-md-5">
									<div class="py-md-3">
										<div class="p-3 text-center">
											<a :href="companyInfo.discogsLink">
												<BButton
													variant="primary"
													size="lg"
													class="w-100 text-light"
													style="max-width: 300px;"
													data-aos="fade-left"
												>Check Out Our Discogs!</BButton>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
import companyInfo from '@/defaults/companyInfo'
export default {
	data() {
		return {
			companyInfo: companyInfo,
		}
	},
}
</script>