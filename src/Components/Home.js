import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    
  const handleGoToABoutPage = () => {
   
    navigate("/about");
  };

  const handleGoToFriendspage = () => {
   
    navigate("/friends");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => handleGoToABoutPage()}>
        Go to About page
      </button>
      <button onClick={() => handleGoToFriendspage()}>
        Go to Friends page
      </button>
    </div>
  );
};

export default Home;
