import './App.css';

function App() {
  const url = 'https://www.google.com/search?q=cats'


  const shortenUrl = async () => {
    try {
      const response = await fetch("https://gotiny.cc/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: url }),
      })
      console.log(response)
    } catch (e) {console.error(e)}
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
