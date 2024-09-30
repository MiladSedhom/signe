<script setup>
import Panel from '@/components/Panel.vue'
import { folders } from '@/data'
</script>

<template>
	<div class="flex gap-4 h-[calc(100%-3rem)] p-4 overflow-x-auto">
		<Panel folderName="root" folderId="f0" />
		<div v-for="folder in folders">
			<Panel :folderName="folder.name" :folderId="folder.id" />
		</div>
	</div>
</template>
