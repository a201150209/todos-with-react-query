import makeRequest from './makeRequest'
import { ITodo } from '../types'
import { API_URL } from './config'

export const getTodos = (): Promise<ITodo[]> =>
    makeRequest({ url: `${API_URL}/todos` })

export const updateTodo = (todo: ITodo): Promise<ITodo[]> =>
    makeRequest({
        url: `${API_URL}/todos/${todo.id}`,
        method: 'PUT',
        body: todo,
    })

export const removeTodo = (id: string): Promise<ITodo[]> =>
    makeRequest({
        url: `${API_URL}/todos/${id}`,
        method: 'DELETE',
    })
