interface IMakeRequestProps {
    url: string
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    params?: {}
    body?: {}
    headers?: {}
}

const makeRequest = async <T>({
    url,
    method = 'GET',
    params,
    body,
}: IMakeRequestProps): Promise<T> => {
    try {
        const response = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: body ? JSON.stringify(body) : undefined,
        })
        const jsonResponse = await response.json()
        return jsonResponse
    } catch (err) {
        console.error(err)
        throw err
    }
}

export default makeRequest
