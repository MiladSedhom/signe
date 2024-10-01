import type { Bookmark, Folder } from './types'
import { useLocalStorage } from '@vueuse/core'

const defaultBookmarks: Bookmark[] = [
	{
		id: 'b1',
		name: 'Facebook',
		url: 'https://www.facebook.com',
		parentId: 'f0',
	},
	{
		id: 'b2',
		name: 'Twitter',
		url: 'https://www.x.com',
		parentId: 'f0',
	},
	{
		id: 'b3',
		name: 'Discord',
		url: 'https://www.discord.com',
		parentId: 'f1',
	},
]

const defaultFolders: Folder[] = [
	{
		id: 'f1',
		name: 'blogs',
		parentId: 'f0',
	},
	{
		id: 'f2',
		name: 'css',
		parentId: 'f1',
	},
]

export const bookmarks = useLocalStorage('bookmarks', defaultBookmarks)
export const folders = useLocalStorage('folders', defaultFolders)
