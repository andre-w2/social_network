<template>
	<div>
		{{validationErrors}}
	</div>
</template>

<script>
export default {
	name: 'MvcValidationErrors',
	props: {
		validationErrors: {
			type: String,
			required: true
		}
	}
}
</script>