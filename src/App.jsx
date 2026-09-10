import { useState } from 'react'

function App() {
  const [number, setNumber] = useState('')
  const [sequence, setSequence] = useState([])

  function calculateCollatz() {
    let n = Number(number)
    const result = []

    if (!Number.isInteger(n) || n <= 0) {
      setSequence([])
      return
    }

    while (n !== 1) {
      result.push(n)

      if (n % 2 === 0) {
        n = n / 2
      } else {
        n = 3 * n + 1
      }
    }

    result.push(1)
    setSequence(result)
  }

  return (
    <div className="app">
      <h1>Collatz Calculator</h1>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Introdu un număr"
      />

      <button onClick={calculateCollatz}>
        Calculează
      </button>

      {sequence.length > 0 && (
        <div className="result">
          <h2>Secvența:</h2>
          <p>{sequence.join(' → ')}</p>
          <p>
            Număr de pași: <strong>{sequence.length - 1}</strong>
          </p>
        </div>
      )}
    </div>
  )
}

export default App
