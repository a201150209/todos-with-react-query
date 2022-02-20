import React, { FC } from 'react'
import './App.css'
import Desk from './components/Desk'
import TodoCards from './components/TodoCards'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

const App: FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Desk>
                    <TodoCards />
                </Desk>
            </div>
        </QueryClientProvider>
    )
}

export default App
