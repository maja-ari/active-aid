
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m your personal wellbeing assistant. How can I help you today? You can ask me about anything from health, fitness, nutrition, to mental wellbeing or any other topic you\'re interested in.',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: generateUniqueId(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate a response from the assistant
    setTimeout(() => {
      const response = generateResponse(input);
      const assistantMessage: Message = {
        id: generateUniqueId(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const generateResponse = (query: string): string => {
    // Simple response generation logic
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
      return 'Hello! How can I assist you today?';
    } else if (lowerQuery.includes('weight loss') || lowerQuery.includes('diet') || lowerQuery.includes('fitness')) {
      return 'To support your wellbeing journey, I recommend a balanced approach that includes nutritious food, regular physical activity, and adequate rest. Would you like specific recommendations?';
    } else if (lowerQuery.includes('exercise') || lowerQuery.includes('workout')) {
      return 'Regular exercise is great for your physical and mental health. Consider mixing cardio, strength training, and flexibility exercises for a balanced routine. What type of exercise interests you?';
    } else if (lowerQuery.includes('food') || lowerQuery.includes('nutrition') || lowerQuery.includes('eat')) {
      return 'A balanced diet rich in fruits, vegetables, lean proteins, and whole grains provides the nutrients your body needs. Would you like some healthy meal ideas?';
    } else if (lowerQuery.includes('sleep') || lowerQuery.includes('rest')) {
      return 'Quality sleep is essential for recovery and overall health. Aim for 7-9 hours per night, and establish a consistent sleep schedule. Would you like some tips for better sleep?';
    } else if (lowerQuery.includes('stress') || lowerQuery.includes('anxiety') || lowerQuery.includes('mental health')) {
      return 'Managing stress is important for your wellbeing. Consider practices like mindfulness, deep breathing, regular physical activity, and connecting with others. Would you like to learn some relaxation techniques?';
    } else {
      return 'I\'m here to help with any topic you\'re interested in! Feel free to ask about health, fitness, nutrition, mental wellbeing, or anything else you\'d like to discuss.';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-activeaid-primary">AI Assistant</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Ask me anything about wellbeing or any other topic
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-activeaid-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
            >
              <div className="flex items-center mb-1">
                {message.role === 'assistant' ? (
                  <Bot size={16} className="mr-2" />
                ) : (
                  <User size={16} className="mr-2" />
                )}
                <span className="text-xs opacity-70">
                  {message.role === 'assistant' ? 'Assistant' : 'You'}
                </span>
              </div>
              <p className="whitespace-pre-wrap">{message.content}</p>
              <div className="text-xs opacity-50 text-right mt-1">
                {message.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            </div>
          </div>
        ))}
        <div ref={endOfMessagesRef} />
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <textarea
            className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-activeaid-primary dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="Type your message..."
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="bg-activeaid-primary text-white p-2 rounded-r-lg hover:bg-activeaid-midaqua disabled:opacity-50"
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
