
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chatbot from "../Chatbot";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default MainLayout;
