import './App.css';
import Authors from "./authors.json";

function App() {
  return (
    <div>
      <h1>Authors</h1>
      {
        Authors.map( author => {
          return(
            <div>
              {author.name}
              </div>
          )
        })
      }
    </div>
  );
}

export default App;
