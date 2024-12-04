import React, { useEffect, useState } from "react";
import axios from "axios";

function Joke() {
  const [joke, setJoke] = useState([]);
  const callJokesApi = async () => {
    try {
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
      const fetchedJoke = response.data.setup + "  ---> " + response.data.punchline;
      setJoke(fetchedJoke);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch a joke.");
    }
  };

  useEffect(() => {
    callJokesApi();
  }, []);

  return (
    <div style={{display:"fex",margin:"auto",
      marginTop:"50px",
    padding:"10px", 
    justifyContent:"center",
    textAlign:"center",
    width:"500px",height:"250px", 
    backgroundColor:"gray",
    color:"white",
    borderRadius:"10px",
    boxShadow:"2px 2px 5px black"}}>
      <h1>Welcome to Jokes Generator</h1>
      <p>{joke}</p>
      <button onClick={callJokesApi} 
      style={{padding:"10px",
        marginBottom:"20px",
        backgroundColor:"blue",
        border:"none",
        borderRadius:"10px",
        color:"white"
      }}>Change Joke</button>
    </div>
  );
}

export default Joke;
