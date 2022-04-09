<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: "HelloWorld",
	props: {
		msg: { type: String, required: true }
	},
	data() {
		return {
			count: 0,
		};
	},
})
</script>

<template>
	<h1>Hello world</h1>
	<p>{{ msg }}</p>
</template>

<style>
.el-button {
	margin: 4px;
}
</style>