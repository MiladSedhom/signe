<script setup lang="ts">
import { bookmarks } from '../data'
import { ref } from 'vue'

const props = defineProps({ folderId: { type: String, required: true } })
const emit = defineEmits(['close-modal'])

const name = ref('')
const url = ref('')

function handleSubmit() {
	bookmarks.value.push({ url: url.value, name: name.value, parentId: props.folderId, id: crypto.randomUUID() })
	emit('close-modal')
}
</script>

<template>
	<form
		class="bg-secondary border-2 border-fg w-90 flex flex-col items-center gap-4 p-4 rounded"
		@submit.prevent="handleSubmit"
	>
		<div class="w-full flex-col flex">
			<label for="name" class="font-500">Name</label>
			<input
				v-model="name"
				class="bg-white/40 border-2 border-fg p-2 rounded"
				type="text"
				name="name"
				id="name"
			/>
		</div>
		<div class="w-full flex-col flex">
			<label for="url" class="font-500">Url</label>
			<input v-model="url" class="bg-white/40 border-2 border-fg p-2 rounded" type="text" name="url" id="url" />
		</div>
		<button class="bg-primary w-full p-2 rounded border-2 border-fg m-t-4">Create</button>
	</form>
</template>
