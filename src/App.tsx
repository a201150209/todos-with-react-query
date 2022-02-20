import React, { FC } from 'react'
import './App.css'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import TodoDesk from './components/TodoDesk'
const queryClient = new QueryClient()

const App: FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <TodoDesk />
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default App
