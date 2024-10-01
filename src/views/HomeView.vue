<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
	<main class="p-x-30 size-full flex items-center justify-center gap-20">
		<div class="flex flex-col items-center gap-4 p-b-40">
			<h1 class="text-20 font-bold bg-primary p-x-4 rounded-4">Signe</h1>
			<h2 class="text-6 max-w-30rem text-left">Take Your Bookmars With You Everywhere!</h2>
			<RouterLink to="/app" class="bg-primary border-2 border-fg rounded-2 p-2">Get Started</RouterLink>
			<!-- <div class="flex flex-col items-start gap-4">
				<h1 class="text-12 font-bold text-center">features</h1>
				<ul class="text-center">
					<li>Browser independant</li>
					<li>Keyboard navigation</li>
					<li>Clean UI</li>
					<li>Unique yet intutive UX</li>
				</ul>
			</div> -->
		</div>
	</main>
</template>
