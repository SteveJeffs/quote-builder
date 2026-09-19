import { packages } from './data/pricing.js'

function App() {
  return (
    <div>
      <h1>Keystone quote builder</h1>
      <ul>
        {packages.map((pkg) => (
          <li key={pkg.id}>
            {pkg.name} - £{pkg.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App