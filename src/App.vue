<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<div class="bg-bg size-screen text-fg">
		<header class="h-3rem flex justify-between items-center p-x-4 border-b-2 border-fg/30">
			<h1 class="bg-primary p-x-1 rounded font-bold">Signe</h1>

			<nav class="flex gap-2">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
				<RouterLink to="/app">App</RouterLink>
			</nav>
		</header>
		<RouterView />
	</div>
</template>
