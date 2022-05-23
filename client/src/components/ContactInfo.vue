<template>
	<div class="bg-primary">
		<BContainer class="py-4">
			<BRow class="m-0 p-0 bg-primary contact-info">
				<!-- Email -->
				<BCol cols="12" md="6" lg="4" class="py-3">
					<h5 class="text-tertiary font-weight-bold">
						Email
					</h5>
					<h6 class="font-weight-bold">
						<a :href="companyInfo.emailLink" class="text-light">
							{{ companyInfo.email }}
						</a>
					</h6>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
import companyInfo from '../defaults/companyInfo'

export default {
	data() {
		return {
			companyInfo
		}
	},
}
</script>

<style lang="scss" scoped>
	.contact-info i {
		display: block;
		float: left;
		width: 60px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		color: #ffffff;
		font-size: 30px;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		-ms-border-radius: 50%;
		border-radius: 50%;
		margin-right: 20px;
	}
</style>