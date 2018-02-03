<template>
	<div>
		<div style="height: 40px;"></div>
		<InfoChild ></InfoChild>
		<Footer></Footer>
	</div>
</template>

<script>
	import Footer from "./Footer"
	import InfoChild from "./InfoChild"
	export default {
		name:"Info",
		components:{Footer,InfoChild},
		data(){
			return {
				msg:"惠家有",
				_search:""
			}
		},
		mounted(){
			this.$emit("to-parent",this.msg)
		}
	}
</script>

<style>
	
</style>