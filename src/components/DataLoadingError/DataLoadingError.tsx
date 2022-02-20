import { FC } from 'react'

interface IDataLoadingErrorProps {
    isError: boolean
}
const DataLoadingError: FC<IDataLoadingErrorProps> = ({ isError }) => {
    return (
        <>
            {isError && (
                <div>
                    Unfortunately, an error occurred during the data loading.
                    <br />
                    Please refresh the page
                </div>
            )}
        </>
    )
}

export default DataLoadingError
