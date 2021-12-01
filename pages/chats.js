import React, {useState, useEffect, useContext} from "react";

import { Context } from '../context'
import { useRouter } from "next/router";

import dynamic from 'next/dynamic';


const ChatEngine = dynamic (() =>
  import('react-chat-engine').then((module) => module.ChatEngine)
)

const MessageFormSocial = dynamic (() =>
  import ('react-chat-engine').then((module) => module.MessageFormSocial)
)


export default function Chats() {
  const {username, secret} = useContext(Context);
  const [showChat, setShowChat] = useState(false)
  const router = useRouter()

  useEffect( () => {
    if(typeof document !== null) {
      setShowChat(true)
    }
  });

  useEffect( () => {
    if(username.length === 0 || secret.length === 0) router.push('/')
  })

  if(!showChat) return <div />

  return(
    <div className="background">
      <div className="shadow">
        <ChatEngine 
          height='cale(100vh - 200px)'
          projectID="b6fc814c-5ba3-4804-b255-c13516e652dc"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  ) 
}
