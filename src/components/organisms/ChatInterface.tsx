import React from 'react';
import ChatbotBalloon from '../molecules/ChatbotBalloon';
import UserBalloon from '../molecules/UserBalloon';

interface Message {
  id: number;
  sender: 'bot' | 'user';
  content: string;
}

interface ChatInterfaceProps {
  messages: Message[];
}
const ChatInterface = ({ messages }: ChatInterfaceProps) => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      {messages.map((message) => (
        <div key={message.id}>
          {message.sender === 'bot' ? (
            <ChatbotBalloon
              message={message.content}
              avatarSrc="/placeholder.svg?height=40&width=40"
              className="bg-[var(--chatbot-primary-color)] text-[var(--chatbot-secondary-color)]"
            />
          ) : (
            <UserBalloon
              message={message.content}
              className="bg-[#ededed] text-[#333]"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatInterface;
