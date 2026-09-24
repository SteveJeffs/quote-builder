import { useState } from 'react'
import { packages, addons, careTiers } from './data/pricing.js'

function App() {
  const [selectedPackage, setSelectedPackage] = useState('standard')
  
  return (
    <div>
      <h1>Keystone quote builder</h1>
      <p>Selected: {selectedPackage}</p>
      <ul>
        {packages.map((pkg) => (
          <li key={pkg.id}>
            <button onClick={() => setSelectedPackage(pkg.id)}>
              {pkg.name} - £{pkg.price}
            </button>
          </li>
        ))}
      </ul>

      <h2>Add-ons</h2>
      <ul>
        {addons.map((addon) => (
          <li key={addon.id}>
            {addon.name} - £{addon.price}
          </li>
        ))}
      </ul>

      <h2>Care plans</h2>
      <ul>
        {careTiers.map((tier) => (
          <li key={tier.id}>
            {tier.name} - £{tier.price}/mo
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

