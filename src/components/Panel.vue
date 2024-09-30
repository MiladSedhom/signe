<script setup lang="ts">
import { computed } from 'vue'
import { bookmarks, folders } from '@/data'
import PanelLink from '@/components/PanelLink.vue'
import PanelFolder from '@/components/PanelFolder.vue'
import type { Bookmark } from '@/types'

const props = defineProps({ folderId: String, folderName: String })

const items = computed(() => {
	return [...folders, ...bookmarks].filter(item => item.parentId === props.folderId) as Bookmark[]
})
</script>

<template>
	<div class="p-x-4 p-y-8 bg-primary border-2 h-full w-75 border-fg rounded-2 shrink-0">
		<ul>
			<li v-for="i in items">
				<PanelLink v-if="i.url" :name="i.name" :url="i.url" />
				<PanelFolder v-else :name="i.name" :id="i.id" />
			</li>
		</ul>
	</div>
</template>
