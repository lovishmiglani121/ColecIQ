import React, { useState, useEffect } from "react";
import { ChatBotWidget } from "chatbot-widget-ui";
import axios from 'axios';
import botIcon from '../assets/robotic.png'; // Ensure this path is correct

const App = () => {
  // State to store the message conversations
  const [messages, setMessages] = useState([]);

  // Log messages for debugging
  useEffect(() => {
    console.log("Messages updated: ", messages);
  }, [messages]);

  // Function to handle new messages from the chatbot
  const handleNewMessage = async (newMessage) => {
    const trimmedMessage = String(newMessage)?.trim();

    // Check if the message is not empty
    if (!trimmedMessage) {
      console.error("Question cannot be empty");
      return; // Exit if the message is empty
    }

    // Add the user's message to the conversation
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: trimmedMessage },
    ]);

    try {
      // Make a POST request to your API with the user's message
      const response = await axios.post("http://localhost:9090/api/audit/formaudit", {
        question: trimmedMessage,
      });

      // Check if response has 'success' and 'cohereResponse' fields
      if (response.data && response.data.success && response.data.cohereResponse) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: response.data.cohereResponse },
        ]);
      } else {
        // Handle unexpected response structure
        console.error("Unexpected response structure: ", response);
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Sorry, I couldn't understand that." },
        ]);
      }
    } catch (error) {
      // Log any errors that occur during the API call
      console.error("Error in chatbot response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Sorry, something went wrong. Please try again." },
      ]);
    }
  };

  // ChatWidget component with hover effect and bot icon
  const ChatWidget = ({ onClick }) => {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        className={`fixed bottom-8 right-4 w-16 h-16 flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out
          ${hovered ? 'scale-110 -translate-y-2' : ''}`}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={botIcon}
          alt="Bot Indicator"
          className="w-16 h-16"
        />
      </div>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Display the chatbot widget */}
      <ChatBotWidget
        chatIcon={<ChatWidget />} // Use the bot icon with hover effect
        chatbotName="Auditor Support"
        isTypingMessage="Typing..."
        IncommingErrMsg="Oops! Something went wrong!"
        primaryColor="#A020d0"
        inputMsgPlaceholder="Send a Message"
        conversation={messages} // Pass the messages to the widget
        handleNewMessage={handleNewMessage} // Handle new messages from the user
      />
    </div>
  );
};

export default App;
