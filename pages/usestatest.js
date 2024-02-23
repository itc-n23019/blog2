import { useState } from 'react'

const Chat = () => {
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState([])

  const handleSubmit = () => {
    if (!inputValue.trim()) return
    setMessages(prevMessages => [inputValue, ...prevMessages])
    setInputValue('')
  }

  return (
    <>
      <input
        type='text'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
      />
      <button onClick={handleSubmit}>click</button>
      <ul>
        {messages.map((message, i) => (
          <li key={i}>{message}</li>
        ))}
      </ul>
    </>
  )
}

export default Chat

