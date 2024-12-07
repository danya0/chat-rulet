import React, { useState } from 'react';

interface Message {
  id: number;
  text: string;
  isMe: boolean;
  timestamp: string;
}

interface ChatProps {
  isDark: boolean;
}

const Chat: React.FC<ChatProps> = ({ isDark }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputText,
        isMe: true,
        timestamp: getCurrentTime(),
      };
      
      setMessages([...messages, newMessage]);
      setInputText('');

      setTimeout(() => {
        const response: Message = {
          id: Date.now() + 1,
          text: 'Это автоматический ответ на ваше сообщение',
          isMe: false,
          timestamp: getCurrentTime(),
        };
        setMessages(prev => [...prev, response]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors">
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg p-3 max-w-[70%] shadow-sm ${
                message.isMe 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
              }`}>
                <p>
                  {message.text}
                </p>
                <span className={`text-xs ${
                  message.isMe 
                    ? 'text-blue-100' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Введите сообщение..."
            className="flex-1 p-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 
                     bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
          <button 
            onClick={handleSendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
