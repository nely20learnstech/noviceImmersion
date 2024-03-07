import { useEffect, useState } from 'react'
import { getConversation } from '../services/chat'


export const Chat = () => {
    
    const [message, setMessage] = useState(null)

    useEffect(() => {
        getConversation()
        .then(responseData => setMessage(responseData))
        .catch(error => console.error(error))
    }, [])

    return (
        <div>{message && <div>{JSON.stringify(message)}</div>}</div>
    )
}
