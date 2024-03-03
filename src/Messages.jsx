import React, { useEffect, useReducer, useRef, useState } from 'react'
import styled from 'styled-components';
import messageList from './message.list.json'

const Messages = () => {

    const [messages, setMessages] = useState(messageList.messages);
    const [data, setData] = useState('');
    const messageRef = useRef();

    useEffect(()=> {
        messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }, [messages]);

    useEffect(()=> {
        setTimeout(() => {
            const payload = {
                id: messages.length + 1,
                sender: 'other',
                reciver: 'me',
                message: "Robot Message"
            }
            setMessages([payload, ...messages]);
        }, 1000);
    }, [data, setData])

    const handleSend = () => {
        console.log(data);
        const payload = {
            id: messages.length + 1,
            sender: 'me',
            reciver: 'other',
            message: data
        }
        setMessages([payload, ...messages]);
        setData('');
    }
    
    return (
        <Wrapper>
            <MessageList ref={messageRef}>
                {messages.map((message)=> (
                    <div key={message.id} className={message.sender === 'me' ? 'my-message' : 'other-message'}>
                        {message.message}
                    </div>
                ))}
            </MessageList>

            <Input>
                <input type="text" onChange={(e)=> setData(e.target.value)} value={data} style={{flex: 1, padding: '5px'}} />
                <button onClick={handleSend}>Send</button>
            </Input>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const MessageList = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 10px;
    gap: 10px;
    display: flex;
    flex-direction: column-reverse;
`;

const Input = styled.div`
    display: flex;
    padding: 10px;
`;

export default Messages