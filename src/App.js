import './App.css';

function App() {
  const url = 'https://www.google.com/search?q=cats'


  const shortenUrl = async () => {
    const response = fetch("https://gotiny.cc/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: url }),
    })
    console.log(response)
  }



  return (
    <div className="App">
      <form method='post'>
        <input id="inputUrl" />
        <button type="submit" onClick={shortenUrl}>SHORTEN</button>
      </form>

    </div>
  );
}

export default App;
