import TextArea from './components/textarea/textarea.component'
import ChatLog from './components/chat-log/chat-log.component'
import { useState } from 'react'
import './App.css'
import { chatHistoryMock } from './mocks/chat-history-mocks'
import Button from './components/button/button.component'
import createApiService from './service/api.service'

function App() {
  const [ prompt, setPrompt ] = useState('')
  const textAreaCallBack = (value: string) => {
    setPrompt(value)
  }
  const apiService = createApiService()
  const submit = async () => {
    if(!prompt || typeof prompt !== "string") return
    const payload = { input: prompt, stream: false }
    try {
      const res = await apiService.post("/api/v1/llm/chat", payload, {
        headers: {
          "Content-Type": "application/json",
          
        },
        responseType: payload.stream ? "stream" : "json"
      })
      if(!res || !res.data) return
      console.log({ data: res.data, status: res.status })
      
    } catch (error) {
      console.error(error)
    }
    
  }
  return (
    <>
      <div className='card'>
        <ChatLog history={chatHistoryMock}/>
        <TextArea onChangeCB={textAreaCallBack} />
        <Button  type="button" text='Send' onClick={submit} />
      </div>
    </>
  )
}

export default App
