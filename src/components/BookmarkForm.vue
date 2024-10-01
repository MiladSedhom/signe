<script setup lang="ts">
import { bookmarks, folders } from '@/data'
import { ref } from 'vue'

const props = defineProps({ folderId: { type: String, required: true } })
const emit = defineEmits(['form-submit'])

const isFolder = ref(false)
const name = ref('')
const url = ref('')

const handleSubmit = () => {
	if (isFolder) folders.value.push({ name: name.value, parentId: props.folderId, id: crypto.randomUUID() })
	else bookmarks.value.push({ url: url.value, name: name.value, parentId: props.folderId, id: crypto.randomUUID() })
	emit('form-submit')
}
</script>

<template>
	<form
		class="bg-secondary border-2 border-fg w-90 flex flex-col items-center gap-4 p-4 rounded"
		@submit.prevent="handleSubmit"
	>
		<div class="w-full flex gap-10">
			<label for="type" class="font-500">Folder:</label>
			<div class="relative">
				<input
					v-model="isFolder"
					class="peer shrink-0 appearance-none w-6 h-6 border-2 border-fg rounded bg-secondary checked:bg-primary cursor-pointer"
					type="checkbox"
					name="type"
					id="type"
				/>
				<div class="i-tabler-check size-6 hidden peer-checked:block absolute top-0 pointer-events-none"></div>
			</div>
		</div>
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
		<div class="w-full flex-col flex has-[:disabled]:opacity-60">
			<label for="url" class="font-500">Url</label>
			<input
				:disabled="isFolder"
				v-model="url"
				class="bg-white/40 border-2 border-fg p-2 rounded disabled:opacity-60"
				type="text"
				name="url"
				id="url"
			/>
		</div>
		<button class="bg-primary w-full p-2 rounded border-2 border-fg m-t-4">Create</button>
	</form>
</template>
