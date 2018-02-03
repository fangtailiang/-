<template>
	<div>搜索页
		<mt-search v-model="value">
		  <mt-cell
		    v-for="item in result"
		    :title="item.title"
		    :value="item.value">
		  </mt-cell>
		</mt-search>
	</div>
</template>

<script>
	export default {
		name:"Search",
		data(){
			return {
				value:""
				result:[1,2,3,12,4,5,6,7]
			}
		}
	}
</script>

<style>
</style>