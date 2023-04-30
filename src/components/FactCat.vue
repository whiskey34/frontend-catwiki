<template>
	<div class="container">
		<div class="row">
			<div class="col-md-5 fact-title">
				<h1>Why you should have a cat?</h1>
				<p class="fact-text">Having a cat around you can actually trigger the release 
					of calming chemicals in your body which lower your stress and anxiety 
					levels</p>
				<a href="">Read more...</a>
			</div>
			<div class="col-md-4"></div>
		</div>
	</div>
	
</template>

<script>
export default {
	name: 'FactCat',
	props: {
		msg: String
	},
}
</script>

<style scoped>
.fact-text {
	margin-top: 43px;
}
</style>