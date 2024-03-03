import React, { useEffect } from 'react'
import styled from 'styled-components'
import userList from './userList.json'
import Messages from './Messages';

const ChatScreen = () => {

    const users = userList.users;

    return (
        <Wrapper>
            <Usersection>
                {users.map((item) => (
                    <UserTile key={item.id}>
                        <RowWrapper>
                            <span>{item.name}</span>
                            {item.isOnline && <span style={{ color: 'rgba(0, 255, 0, 1)' }}>●</span>}
                        </RowWrapper>

                        <LastActive>
                            {item.lastActive ? `Last Active ${item.lastActive.substring(11, 16)}` : 'Online'}
                        </LastActive>
                    </UserTile>
                ))}
            </Usersection>

            <ChatSection>
                <Messages />
            </ChatSection>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 70vw;
    height: 80vh;
    background: linear-gradient(to right top, #2e46ff, #495eff);
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 1px 1px 25px 4px rgba(255, 255, 255, 0.05);
`;

const Usersection = styled.div`
    width: 280px;
    padding: 10px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    gap: 20px;
`;

const ChatSection = styled.div`
    flex: 1;
    display: flex;
    padding: 10px;
`;

const UserTile = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: #f5f5f5;
    border-radius: 10px;
    color: rgba(0, 0, 0, 0.8);
`;

const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    font-size: 20px;
`;

const LastActive = styled.div`
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
`;

export default ChatScreen