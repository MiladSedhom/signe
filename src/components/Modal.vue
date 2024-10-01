<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref, Teleport, Transition } from 'vue'

defineProps({
	show: Boolean,
})

const emit = defineEmits(['close-modal'])

const target = ref(null)

onClickOutside(target, () => emit('close-modal'))
</script>

<template>
	<Teleport to="body">
		<Transition name="modal">
			<div v-if="show" ref="target" class="pos-absolute top-50% left-50% translate--50%">
				<div>
					<slot />
				</div>
			</div>
		</Transition>
	</Teleport>
</template>
