import { useState } from 'react'
import HaldaneSimulator from './components/HaldaneSimulator'

function App() {
  const [showSimulator, setShowSimulator] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Haldane Edge State Simulator
        </h1>

        {!showSimulator ? (
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              This simulator demonstrates the edge states in the Haldane model,
              a fundamental example of a topological insulator.
            </p>
            <button
              onClick={() => setShowSimulator(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Launch Simulator
            </button>
          </div>
        ) : (
          <HaldaneSimulator />
        )}
      </div>
    </div>
  )
}

export default App
