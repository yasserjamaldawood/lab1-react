import React from 'react';
import myImg from "../../assets/profile.jpg";
import "./home.css"

export const Home = () => {
  
  const style = {
    borderRadius:'50%'
}


  return (
    <div className="container ">
        <div className="row justify-content-between align-items-center my-5">

      <div className="col-12 col-md-6">
      <img style={style} className="w-75" src={myImg} alt="profile" />
      </div>

      <h4 className="desc text-start col-12 col-md-6">
        Hello Am Yasser Dawood I’m a front-end engineer, and I create fun,
        innovative, accessible, and fast websites. I try to leave every bit of
        code I touch more readable, modular, performant and accessible than I
        found it.
      </h4>
        </div>
    </div>
  )
}
export default Home;
