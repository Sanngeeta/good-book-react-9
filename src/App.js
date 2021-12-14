import React from "react";
import "./styles.css";
import { useState } from "react";
const goodBook = {
  javaScript: [
    {
      name: "Eloquent JavaScript",
      rating: "4/5",
      description:
        "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon."
    },
    {
      name: "You Don't know JS",
      rating: "3.5/5",
      description:
        "This is a series of books diving deep into the core mechanisms of the JavaScript language"
    },
    {
      name: "Vanilla js",
      rating: "5/6",
      description:
        "Using VanillaJS means using plain JavaScript without any additional libraries like jQuery. People use it as a joke to remind other developers that many things can be done nowadays without the need for additional JavaScript libraries."
    }
  ],
  function: [
    {
      name: "Shiva Trilogy",
      rating: "5/5",
      description:
        "Shiva, the Tibetan immigrant who is the prophesied destroyer of evil, will not rest till he finds his demonic adversary. "
    },
    {
      name: "Harry potter and the sorcerer's Stone",
      description:
        "Shiva, the Tibetan immigrant who is the prophesied destroyer of evil, will not rest till he finds his demonic adversary."
    },
    {
      name: "Jane Eyre",
      rating: "4.1/5",
      description:
        "Jane Eyre is a novel by English writer Charlotte Brontë, published under the pen name 'Currer Bell', on 16 October 1847, by Smith, Elder & Co."
    }
  ],
  business: [
    {
      name: "Never split the diffrence",
      rating: "3.5/5",
      description:
        "A former international hostage negotiator for the FBI offers a new, field-tested approach to high-stakes negotiations—whether in the boardroom or at home."
    },
    {
      name: "Loonshots",
      rating: "5/5",
      description:
        "Instant WSJ bestseller * Translated into 18 languages* #1 Most Recommended Book of the year "
    },
    {
      name: "Forbes",
      rating: "5/5",
      description:
        "Forbes is a leading source for reliable news and updated analysis on Business. Read the breaking Business coverage and top headlines on Forbes.com."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");

  function ClickHandler(name) {
    setGenre(name);
  }
  return (
    <div className="App">
      <h1> 📚 goodbooks</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(goodBook).map((name) => (
          <button onClick={() => ClickHandler(name)}>{name}</button>
        ))}
      </div>

      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {goodBook[selectedGenre].map((book) => (
            <li key={book.name}>
              {" "}
              <div style={{ fontSize: "larger" }}>{book.name} </div>
              <div style={{ fontSize: "smaller" }}>{book.rating}</div>
              <div style={{ fontSize: "smaller" }}>{book.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
