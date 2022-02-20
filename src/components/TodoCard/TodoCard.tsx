import { FC, useRef, useState } from 'react'
import styles from './TodoCard.module.css'
import { ITodo } from '../../types'

interface ITodoCard extends ITodo {
    onChange: (updatedTodo: ITodo) => void
    onDelete: (id: string) => void
}

const TodoCard: FC<ITodoCard> = ({
    title,
    description,
    onChange,
    onDelete,
    ...data
}) => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false)
    const titleRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLTextAreaElement>(null)
    return (
        <div className={styles.card}>
            <input defaultValue={title} disabled={!isEditMode} ref={titleRef} />
            <textarea
                defaultValue={description}
                disabled={!isEditMode}
                ref={descriptionRef}
            ></textarea>
            <button
                type="button"
                onClick={() => {
                    setIsEditMode(!isEditMode)
                    onChange({
                        ...data,
                        title: titleRef.current?.value || '',
                        description: descriptionRef.current?.value || '',
                    })
                }}
            >
                {isEditMode ? 'Save' : 'Edit'}
            </button>
            <button type="button" onClick={() => onDelete(data.id)}>
                Delete
            </button>
        </div>
    )
}

export default TodoCard
