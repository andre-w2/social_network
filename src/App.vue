<template>
	<mvc-top-bar />
	<router-view></router-view>
</template>

<script>
import MvcTopBar from '@/components/TopBar';

export default {
	name: 'MvcApp',
	components: {
		MvcTopBar
	}
}
</script>