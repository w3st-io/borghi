<template>
	<BContainer class="">
		<BRow class="mx-1 my-5 shadow">
			<BCol
				cols="12"
				class="bg-primary border-bottom border-light bg-dotted"
				style="border-width: 3px !important;"
			>
				<h1
					class="my-3 text-center text-light"
					data-aos="fade-up"
				>
					<span class="px-2 bg-primary">
						Our Services
					</span>
				</h1>
			</BCol>

			<!-- VINYL CLEANING -->
			<BCol
				cols="12" lg="4"
				class="p-0 bg-light border-right border-light"
				style="
					background-image: url('https://images2.imgbox.com/3f/e8/GjDpOQOj_o.jpg');
					background-position: right;
					border-width: 3px !important;
				"
			>
				<!-- IMAGE -->
				<div class="p-5 h-100 rounded text-light shadow bg-shade">
					<div class="py-lg-5">
						<h3 class="text-center mb-3 text-primary">
							Vinyl Cleaning
						</h3>
						<p class="h4">
							We care about your collection. We provide a variety of cleaning levels to keep your collection fresh to death!
						</p>
					</div>
				</div>
			</BCol>

			<BCol cols="12" lg="8" class="py-4 bg-light bg-striped">
				<ul
					class="list-group mb-3"
					data-aos="fade-left"
				>
					<li class="list-group-item bg-light">
						<h2 class="my-2 text-center  text-primary">
							Cleaning Tiers
						</h2>
					</li>

					<li class="list-group-item">
						<h5 class="text-primary">
							Tier 1: The Wash
						</h5>
						<h6 class="small  text-secondary">$1.00/Record</h6>
						<ol class="px-3">
							<li>Hand cleaned Vinyl record with record cleaning solution.</li>
						</ol>
					</li>

					<li class="list-group-item">
						<h5 class="text-primary">
							Tier 2: The Washaleen
						</h5>
						<h6 class="small  text-secondary">$3.00/Record</h6>
						<ol class="px-3">
							<li>
								Hand Washed vinyl record and record Cover with the special sauce. All records will be placed in a crystal-clear sealed plastic sleeve.
							</li>
						</ol>
					</li>
					<li class="list-group-item">
						<h5 class="text-primary">
							Tier 3: The Washaleenalashamba (The Holy Grail of Detail Cleaning)
						</h5>
						<h6 class="small  text-secondary">$5.00/Record</h6>
						<ol class="px-3">
							<li>
								Professional ultrasonic cleaning of Vinyl Record with industrial grade machine (Takes 5min/Record).
							</li>
							<li>Cover Cleaning</li>
							<li>Replacement of inner sleeve (If not original).</li>
							<li> Sealed Plastic Sleeve</li>
							<li>White Box Treatment- All records will be placed in a transportation box that you keep! ($20/Box)</li>
						</ol>
					</li>
				</ul>

				<RouterLink to="/contact">
					<div class="text-center">
						<BButton
							variant="primary"
							size="lg"
							class="w-100"
							style="max-width: 300px;"
							data-aos="fade-up"
						>Contact Us</BButton>
					</div>
				</RouterLink>
			</BCol>
		</BRow>

		<!-- VIYNL-RECORD-SETUP -->
		<BRow class="mx-1 my-5 shadow">
			<BCol
				cols="12"
				class="p-0 bg-primary border-bottom border-light"
				style="
					background-position: right;
					border-width: 3px !important;
				"
			>
				<h3 class="text-center m-0 py-4  text-light">
					Vinyl Record Setup
				</h3>
			</BCol>

			<BCol cols="12" md="8" class="p-5 bg-light bg-dotted">
				<div class="p-md-5" data-aos="fade">
					<p class="p-md-5 h4 m-0  text-primary">
						New to vinyl records? Need an upgrade? No problem, we got your back. Our team can create custom setups for your own personal listening experience! Please feel free to reach out to us and get a free quote!
					</p>

					<div class="text-center p-4">
						<RouterLink to="/contact">
							<BButton
								variant="primary"
								size="lg"
								class="w-100 mb-3"
							style="max-width: 300px;"
							>Contact Us</BButton>
						</RouterLink>
					</div>
				</div>
			</BCol>

			<BCol
				cols="12" md="4"
				class="d-none d-md-block p-0 bg-light border-left border-light"
				style="
					background-image: url('https://images2.imgbox.com/be/76/yeyTZb3U_o.jpg');
					background-position: right;
					border-width: 3px !important;
				"
			>
				<div class="h-100 bg-shade"></div>
			</BCol>
		</BRow>

		<!-- ESTATE-SALE
			background-image: url('https://images2.imgbox.com/6a/c6/wZXolYSS_o.jpeg');
		-->
		<BRow class="mx-1 my-5 shadow">
			<BCol
				cols="12"
				class="p-0 bg-primary border-bottom border-light"
				style="
					min-height: 80px;
					background-position: right;
					border-width: 3px !important;
				"
			>
				<h3 class="text-center m-0 py-4  text-light">
					Estate Sales
				</h3>
			</BCol>

			<BCol
				cols="12" md="4"
				class="d-none d-md-block p-0 bg-light border-right border-light"
				style="
					background-image: url('https://images2.imgbox.com/61/19/hNE3HSmU_o.jpg');
					background-position: center;
					border-width: 3px !important;
				"
			>
				<div class="w-100 h-100 bg-shade"></div>
			</BCol>

			<BCol cols="12" md="8" class="p-5 bg-light text-primary bg-dotted">
				<div class="p-md-5">
					<p class="p-md-5 m-0 h4 ">
						Need Help with an Estate? Our team has over 10 years of professional experience selling anything from house hold items to commercial goods. Contact us!
					</p>

					<div class="text-center p-4">
						<RouterLink to="/contact">
							<BButton
								variant="primary"
								size="lg"
								class="w-100 mb-3"
							style="max-width: 300px;"
							>Contact Us</BButton>
						</RouterLink>
					</div>
				</div>
			</BCol>
		</BRow>
	</BContainer>
</template>