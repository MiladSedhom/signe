<script setup>
const props = defineProps({ url: String, name: String })
</script>

<template>
	<a :href="url" class="size-full flex gap-2 items-center p-2">
		<img height="16" width="16" :src="`http://www.google.com/s2/favicons?domain=${url}`" />

		<p>{{ name }}</p>
	</a>
</template>
