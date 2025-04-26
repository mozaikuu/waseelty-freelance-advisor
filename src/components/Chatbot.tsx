
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <Card className="w-80 sm:w-96 h-96 mb-4 p-4 shadow-lg flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Wasalety Assistant</h3>
            <Button variant="ghost" size="icon" onClick={toggleChatbot} className="h-8 w-8">
              <X size={16} />
            </Button>
          </div>
          
          <div className="flex-grow overflow-y-auto mb-4 p-2 bg-gray-50 rounded">
            <div className="bg-wasalety-light-purple p-2 rounded-lg mb-3 max-w-[80%]">
              <p className="text-sm">
                Hello! How can Wasalety help you today? I can assist with pricing, finding jobs, or managing deadlines.
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow rounded-md border p-2 text-sm"
            />
            <Button size="sm" className="bg-wasalety-purple hover:bg-wasalety-dark-purple">
              Send
            </Button>
          </div>
        </Card>
      )}
      
      <Button
        onClick={toggleChatbot}
        className={`rounded-full w-14 h-14 shadow-lg ${
          isOpen ? "bg-gray-200 text-wasalety-purple" : "bg-wasalety-purple hover:bg-wasalety-dark-purple"
        }`}
      >
        <MessageCircle size={24} />
      </Button>
    </div>
  );
};

export default Chatbot;
