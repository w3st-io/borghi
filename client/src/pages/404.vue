<template>
	<BContainer class="my-5">
		<BCard
			class="w-100 m-0 mx-auto text-center bg-white shadow"
			style=""
		>
			<h1 class="w-100 font-weight-bold text-primary">404 Not Found</h1>

			<div class="">
				<lottie-player
					src="https://assets6.lottiefiles.com/packages/lf20_pxmjlK.json"
					class="m-0 mx-auto text-center"
					style="max-width: 200px;"
					background="transparent"
					speed="1"
					loop
					autoplay
				/>
			
				<RouterLink to="/">
					<BButton variant="primary" size="lg" class="m-auto">
						Go Home
					</BButton>
				</RouterLink>
			</div>
		</BCard>
	</BContainer>
</template>