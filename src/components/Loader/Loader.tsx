import { FC } from 'react'

interface ILoaderProps {
    isLoading: boolean
}

const Loader: FC<ILoaderProps> = ({ isLoading }) => {
    return <>{isLoading && <div>Loading ...</div>}</>
}

export default Loader
