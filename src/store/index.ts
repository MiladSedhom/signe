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
		addFolder(state: State, id: string) {
			state.activeFolders.add(id)
		},
		removeFolder(state: State, id: string) {
			state.activeFolders.delete(id)
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
