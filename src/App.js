import "./App.css";
import QuoteCard from "./components/QuoteCard";
import { useState } from "react";
import axios from "axios";

// sampleQuote is used to test code before asking request to an API ;) (in case you got limited access)
const sampleQuote = {
  quote: "By chilling my loins I increase the chances of impregnating my wife.",
  character: "Apu Nahasapeemapetilon",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  characterDirection: "Left",
};

function App() {
  const [quote, setQuote] = useState(sampleQuote);
  const getQuote = () => {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        // log the type of "data" wich is here an array of object with 1 element/object
        console.log(data);
        setQuote(data[0]);
      });
  };
  return (
    <div className="App">
      <QuoteCard quote={quote} />
      <button type="button" onClick={getQuote}>
        Get a new Simpsons Quote
      </button>
    </div>
  );
}

export default App;
