export type taskData = {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export type task = taskData & { id: string }

export type taskDTO = {
	title: string,
   description: string,
   deadline: string,
   authorId: string
}