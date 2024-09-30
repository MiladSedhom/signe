<script setup>
const props = defineProps({ name: String })
</script>

<template>
	<button class="size-full cursor-pointer p-2 flex gap-2 items-center">
		<div class="i-tabler-folder-filled text-5"></div>

		<p>{{ name }}</p>
	</button>
</template>
