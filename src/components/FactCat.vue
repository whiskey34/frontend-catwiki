<template>
	<div class="fact-container">
		<div class="row">
			<div class="col-md-5 fact-title">
				<hr class="line">
				<h1>Why you should have a cat?</h1>
				<p class="fact-text">Having a cat around you can actually trigger the release 
					of calming chemicals in your body which lower your stress and anxiety 
					levels</p>
				<a href="" style="text-decoration: none; color: #29150799;">Read more <i class=" fas fa-light fa-arrow-right-long" style="color: #291507;"></i></a>
			</div>
			<div class="col-md-4">
				<div class="row">
					<div class="col-sm-5">
						<img :src="require('@/assets/images/image-2.png')" alt="" style="height: 167px; width: 273px;">
						<img :src="require('@/assets/images/image-1.png')" alt="" style="height: 293px; width: 195px; margin-top: 28px; margin-left: 80px;">
					</div>
					<div class="col-sm-4">
						<img :src="require('@/assets/images/image-3.png')" alt="" style="width: 238px; height: 385px; margin-left: 143px;">
					</div>
				</div>
			</div>
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

.line {
  border: none;
  border-top: 2px solid #4D270C;
  margin: 10px 0;
  width: 50px;
}


</style>