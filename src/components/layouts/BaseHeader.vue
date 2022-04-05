<template>
	<el-menu class="el-menu-demo" mode="horizontal">
		<el-menu-item index="1">
			<router-link to="/">
				<el-image style="width:42px;padding-top:10px;" :src="logoUrl" fit="contain" />
			</router-link>
		</el-menu-item>
		<el-sub-menu index="2">
			<template #title>Workspace</template>
			<el-menu-item index="2-1">item one</el-menu-item>
			<el-menu-item index="2-2">item two</el-menu-item>
			<el-menu-item index="2-3">item three</el-menu-item>
			<el-sub-menu index="2-4">
				<template #title>item four</template>
				<el-menu-item index="2-4-1">item one</el-menu-item>
				<el-menu-item index="2-4-2">item two</el-menu-item>
				<el-menu-item index="2-4-3">item three</el-menu-item>
			</el-sub-menu>
		</el-sub-menu>
		<el-menu-item index="3" style="padding-top:5px" disabled>Info</el-menu-item>
		<el-menu-item index="4" style="padding-top:5px">Orders</el-menu-item>
	</el-menu>
</template>

<script lang="ts" setup>
const logoUrl = new URL('../../assets/logo-icon.png', import.meta.url).href;
</script>