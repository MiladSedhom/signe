<script setup lang="ts">
import Panel from '@/components/Panel.vue'
import { folders } from '@/data'
import { computed } from 'vue'
import { useStore } from '@/store'

const store = useStore()

const activeFolders = computed(() => {
	return folders.filter(f => store.state.activeFolders.has(f.id))
})
</script>

<template>
	<div class="flex gap-4 h-[calc(100%-3rem)] p-4 overflow-x-auto">
		<Panel folderName="root" folderId="f0" />
		<div v-for="folder in activeFolders">
			<Panel :folderName="folder.name" :folderId="folder.id" />
		</div>
	</div>
</template>
