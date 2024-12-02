import axios from "axios";
import bott from "../assets/robotic.png"; // Ensure this path is correct
import { useState, useEffect, useRef } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null); // Create a ref for scrolling

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const typeBotResponse = (responseText) => {
    let botMessage = { text: "", type: "bot" }; // Initialize an empty message
    setMessages((prev) => [...prev, botMessage]);

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < responseText.length) {
        botMessage = { text: botMessage.text + responseText[i], type: "bot" };
        setMessages((prev) => {
          const updatedMessages = [...prev];
          updatedMessages[updatedMessages.length - 1] = botMessage; // Update the last message (the bot's message)
          return updatedMessages;
        });
        i++;
      } else {
        clearInterval(typingEffect); // Stop the interval when typing is done
        setTyping(false); // Stop typing indicator
      }
    }, 10); // Delay between each character
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      type: "user",
    };

    // Update messages to include the user's message
    setMessages((prev) => [...prev, userMessage]);
    setInput(""); // Clear input field

    // Predefined responses for specific cases (without hitting API)
    const greetings = ["hello", "hi", "hey", "howdy", "greetings", "hii", "what's up", "sup", "good morning", "heyy", "good afternoon", "good evening", "hi there", "hey there", "yo", "hiya", "morning", "afternoon", "evening"];
    
    const goodbyes = ["bye", "goodbye", "see you", "see ya", "take care", "later", "catch you later", "talk to you later", "farewell", "adios", "ciao", "so long", "peace", "good night", "night", "see you soon", "see you later", "see you tomorrow", "bye for now", "cheers", "until next time"];
    
    const invalidInputs = [".", "/", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "{", "}", "[", "]", "|", ":", ";", "'", '"', "<", ">", ",", "~", "`", " ", "\t", "\n", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "null", "undefined", "NaN", "false", "true", " "];

    const lowerCaseInput = input.toLowerCase().trim();

    if (greetings.includes(lowerCaseInput)) {
      setTyping(true);
      typeBotResponse("Hello! How can I assist you today?");
      return;
    }

    if (goodbyes.includes(lowerCaseInput)) {
      setTyping(true);
      typeBotResponse("Goodbye! Have a great day!");
      return;
    }

    if (invalidInputs.includes(lowerCaseInput)) {
      setTyping(true);
      typeBotResponse("Please enter a valid question or message.");
      return;
    }

    // Send the message to the API for any other input
    setTyping(true);
    try {
      const response = await axios.post("http://localhost:9090/api/audit/formaudit", {
        question: input,
      });

      console.log("API Response:", response.data); // Log the response for debugging

      // Check if success is true (it should be a boolean)
      const botResponseText = response.data.success ? response.data.cohereResponse : "Sorry, something went wrong!";
      typeBotResponse(botResponseText); // Use the typing effect for the bot's response
    } catch (error) {
      const errorMessage = "API Error: " + (error.response?.data?.message || error.message);
      typeBotResponse(errorMessage); // Show error message with typing effect
    }
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-4 right-4">
      {/* Chatbox with stretched layout and better "Auditor Support" header */}
      <div
        className={`border rounded-lg shadow-lg bg-white w-96 h-96 fixed right-6 bottom-20 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* "Auditor Support" Header */}
        <div className="bg-purple-500 text-white text-center py-2 rounded-t-lg">
          <h1 className="text-lg font-semibold">Auditor Support</h1>
        </div>

        <div className="p-4 h-72 overflow-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.type === "user" ? "text-right" : "text-left"}`}>
              <div
                className={`inline-block p-2 rounded-lg ${
                  msg.type === "user" ? "bg-purple-500 text-white" : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {typing && <div className="text-gray-700">Typing...</div>}
          <div ref={messagesEndRef} /> {/* Scroll target */}
        </div>

        <form onSubmit={handleSend} className="flex p-2 border-t">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow p-2 border rounded-l-lg"
          />
          <button type="submit" className="bg-purple-500 text-white p-2 rounded-r-lg">
            Send
          </button>
        </form>
      </div>

      {/* Chatbot Icon Button with Smooth Hover Animation */}
      <button 
        onClick={handleToggle} 
        className="fixed bottom-4 right-6 z-10 transition-transform duration-500 ease-out transform hover:scale-105 hover:translate-y-[-5px] hover:shadow-2xl"
      >
        <img 
          src={bott} 
          alt="Chatbot Icon" 
          className="w-15 h-15" 
        />
      </button>
    </div>
  );
};

export default Chatbot;
