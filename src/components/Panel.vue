<script setup lang="ts">
import { computed, ref } from 'vue'
import { bookmarks, folders } from '@/data'
import PanelLink from '@/components/PanelLink.vue'
import PanelFolder from '@/components/PanelFolder.vue'
import type { Bookmark } from '@/types'
import Modal from '@/components/Modal.vue'
import BookmarkForm from '@/components/BookmarkForm.vue'
import { useEventListener } from '@vueuse/core'
import { useStore } from '@/store'

const props = defineProps({ folderId: { type: String, required: true }, folderName: String })

const store = useStore()

const items = computed(() => {
	return [...folders.value, ...bookmarks.value].filter(item => item.parentId === props.folderId) as Bookmark[]
})
const index = ref<number>(0)

useEventListener(document, 'keydown', (e: KeyboardEvent) => {
	const currActiveFolderId = Array.from(store.state.activeFolders).pop()
	if (props.folderId !== currActiveFolderId) return
	console.log(e.key)
	if (e.key === 'ArrowDown') index.value = (index.value + 1) % items.value.length
	if (e.key === 'ArrowUp') index.value = (index.value - 1) % items.value.length
	if (e.key === 'ArrowLeft') store.commit('toggleFolder', currActiveFolderId)
	if (e.key === 'ArrowRight' || e.key === ' ') {
		const url = items.value[index.value].url
		const isFolder = !!url
		isFolder ? window.open(url, '_newtab') : store.commit('toggleFolder', items.value[index.value].id)
	}
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
			<li
				v-for="(i, idx) in items"
				class="hover:bg-fg hover:text-primary rounded"
				:class="idx === index && 'bg-fg text-primary '"
			>
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
