<template>
	<BContainer class="py-5">
		<BRow class="py-5">
			<BCol cols="12">
				<h1 class="text-center font-weight-bold text-primary text-uppercase">
					About
				</h1>

				<div class="w-100 mx-auto  my-5" style="max-width: 800px;font-size: 1.2em;">
					<p style="">
						Borghi Fine Art gallery opened in February of 2007. A family owned business for over 60 years and locations posted around the world. Borghi Fine Art is now owned and operated by Laura Borghi, a second generation private art dealer. Having over 30 years of compassion and hard work ethic Borghi Fine Art is still family owned. We specialize in Fine Art from the 15th century to the 20th century, contemporary and modern art work.
						<br>
						Our Satellite galleries located all over the East coast allow us to diversify ourselves from the average gallery. Our mission is simple, offer the best quality in Fine Art, foster the love and understanding of art. Our services include the following:
					</p>

					<ul>
						<li>
							Organize Exhibitions.
						</li>
						<li>
							Handle artist’s estates.
						</li>
						<li>
							Advise private collectors
						</li>
						<li>
							Authenticate and appraise artwork 
						</li>
						<li>
							Conservation
						</li>
						<li>
							Archiving and education
						</li>
					</ul>

					<p>
						Laura’s knowledge and passion in the arts has motivated her to look in a new direction, a direction of living artist that she feels are creative, artistic and are painting history. She carefully reviews each artist’s portfolio with a keen perception of knowledge. Her main objective is to support our local artist and promote them to her fullest. 
					</p>
				</div>

				<div class="text-center">
					<RouterLink to="/contact">
						<BButton variant="tertiary" size="lg">Contact Us</BButton>
					</RouterLink>
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
			companyInfo
		}
	},
}
</script>