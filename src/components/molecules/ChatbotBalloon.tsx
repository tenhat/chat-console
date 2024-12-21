import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Balloon from '../atoms/Balloon'

interface ChatbotBalloonProps {
    message: string
    avatarSrc?: string
    className?: string
}

const ChatbotBalloon = ({message, avatarSrc, className}: ChatbotBalloonProps) => {
  return (
    <div className='flex items-center space-x-2'>
        <Avatar>
            <AvatarImage src={avatarSrc} alt='Chatbot avatar'/>
            <AvatarFallback>CB</AvatarFallback>
        </Avatar>
        <Balloon className={className} ariaLabel='チャットボットのメッセージ'>
            {message}
        </Balloon>
    </div>
  )
}

export default ChatbotBalloon