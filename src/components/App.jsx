import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteTerm) => (
        <Note
          key={noteTerm.key}
          title={noteTerm.title}
          content={noteTerm.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
