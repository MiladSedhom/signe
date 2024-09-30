<script setup>
import { computed } from 'vue'
import { bookmarks, folders } from '@/data'
import PanelLink from '@/components/PanelLink.vue'
import PanelFolder from '@/components/PanelFolder.vue'

const props = defineProps({ folderId: String, folderName: String })

const items = computed(() => {
	return [...folders, ...bookmarks].filter(item => item.parentId === props.folderId)
})
</script>

<template>
	<div class="p-4 bg-primary border-2 h-full w-75 border-fg rounded-2 shrink-0">
		<h1 class="text-1.5rem">{{ props.folderId + ' ' + props.folderName }}</h1>
		<ul>
			<li v-for="i in items" class="rounded hover:bg-fg hover:text-primary">
				<PanelLink v-if="i.url" :name="i.name" :url="i.url" />
				<PanelFolder v-else :name="i.name" />
			</li>
		</ul>
	</div>
</template>
