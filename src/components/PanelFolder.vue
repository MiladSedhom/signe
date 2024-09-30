<script setup lang="ts">
const props = defineProps({ name: String, id: String })
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()

const handleClick = () => {
	store.commit('toggleFolder', props.id)
}

const selected = computed(() => {
	return store.state.activeFolders.has(props.id)
})
</script>

<template>
	<button
		class="size-full cursor-pointer p-2 flex gap-2 items-center"
		:class="{ 'bg-fg text-secondary rounded': selected }"
		@click="handleClick"
	>
		<div class="i-tabler-folder-filled text-5"></div>

		<p class="font-500">{{ name }}</p>
	</button>
</template>
