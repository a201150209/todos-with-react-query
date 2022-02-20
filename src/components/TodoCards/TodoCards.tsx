import { FC } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { removeTodo, getTodos, updateTodo } from '../../api'
import TodoCard from '../TodoCard'
import Loader from '../Loader'
import DataLoadingError from '../DataLoadingError'

const TodoCards: FC = () => {
    const queryClient = useQueryClient()
    const { data = [], isLoading, isError } = useQuery('todos', getTodos)

    const update = useMutation(updateTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
        },
    })
    const remove = useMutation(removeTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
        },
    })

    return (
        <>
            <Loader isLoading={isLoading} />
            <DataLoadingError isError={isError} />

            {data.map((todo) => (
                <TodoCard
                    key={todo.id}
                    {...todo}
                    onChange={(updatedTodo) => {
                        update.mutate(updatedTodo)
                    }}
                    onDelete={(id) => {
                        remove.mutate(id)
                    }}
                />
            ))}
        </>
    )
}

export default TodoCards
