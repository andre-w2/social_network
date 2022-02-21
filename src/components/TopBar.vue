<template>
	<nav class="navbar navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand">
				<img src="@/assets/logo.png" alt="" width="60" height="60">
			</a>
			<form class="d-flex">
				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn btn-outline-success" type="submit">Search</button>
			</form>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'MvcTopBar'
	}
</script>