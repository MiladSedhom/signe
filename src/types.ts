export interface Bookmark {
	id: string
	name: string
	url: string
	parentId: string | 'root'
}

export interface Folder {
	id: string
	name: string
	parentId: string | 'root'
}
