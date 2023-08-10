import { http } from '@/services'
import { Todo } from '../types/responseApi'

const getTodos = (): Promise<Todo[]> => http.get('api/todos')

const getTodoById = (id: string): Promise<Todo> => http.get('api/todos/' + id)

const createTodo = (data: Todo): Promise<Todo> => http.post('api/todo', { data })

export { getTodos, getTodoById, createTodo }
