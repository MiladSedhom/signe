// @ts-ignore
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import type { InjectionKey } from 'vue'

export const store = createStore<State>({
	state() {
		return {
			activeFolders: new Set(['f0']),
		}
	},
	mutations: {
		toggleFolder(state: State, id: string) {
			if (state.activeFolders.has(id)) state.activeFolders.delete(id)
			else state.activeFolders.add(id)
		},
	},
})

export interface State {
	activeFolders: Set<string>
}

export const key: InjectionKey<Store<State>> = Symbol()

export function useStore() {
	return baseUseStore(key)
}
