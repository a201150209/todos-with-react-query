import { FC } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { addTodo } from '../../api'
import Desk from '../Desk'
import TodoCards from '../TodoCards'

const TodoDesk: FC = () => {
    const queryClient = useQueryClient()

    const add = useMutation(addTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
        },
    })
    return (
        <>
            <button type="button" onClick={() => add.mutate()}>
                Add
            </button>
            <Desk>
                <TodoCards />
            </Desk>
        </>
    )
}

export default TodoDesk
