<template>
	<BaseHeader />
	<div style="display: flex">
		<BaseSide />
		<router-view></router-view>
	</div>
</template>

<style>
#app {
	text-align: center;
	color: var(--el-text-color-primary);
}
.element-plus-logo {
	width: 50%;
}
</style>
