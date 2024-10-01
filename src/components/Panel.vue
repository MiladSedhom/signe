<script setup lang="ts">
import { computed, ref } from 'vue'
import { bookmarks, folders } from '@/data'
import PanelLink from '@/components/PanelLink.vue'
import PanelFolder from '@/components/PanelFolder.vue'
import type { Bookmark } from '@/types'
import Modal from '@/components/Modal.vue'
import BookmarkForm from '@/components/BookmarkForm.vue'

const props = defineProps({ folderId: { type: String, required: true }, folderName: String })

const items = computed(() => {
	return [...folders.value, ...bookmarks.value].filter(item => item.parentId === props.folderId) as Bookmark[]
})

const show = ref(false)
const showModal = () => {
	show.value = true
}
const hideModal = () => (show.value = false)
</script>

<template>
	<div class="p-x-4 p-y-8 bg-primary border-2 h-full w-75 border-fg rounded-2 shrink-0 flex flex-col justify-between">
		<ul>
			<li v-for="i in items" class="hover:bg-fg hover:text-primary rounded">
				<PanelLink v-if="i.url" :name="i.name" :url="i.url" />
				<PanelFolder v-else :name="i.name" :id="i.id" />
			</li>
		</ul>
		<Modal :show @close-modal="hideModal">
			<BookmarkForm :folderId="props.folderId" @form-submit="hideModal" />
		</Modal>
		<div>
			<button @click="showModal">add</button>
		</div>
	</div>
</template>
