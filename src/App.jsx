import { useState } from 'react'
import { packages, addons, careTiers } from './data/pricing.js'
import PackagePicker from './components/PackagePicker.jsx'
import AddonList from './components/AddonList.jsx'

function App() {
  const [selectedPackage, setSelectedPackage] = useState('standard')
  const [selectedAddons, setSelectedAddons] = useState([])
  const [selectedTier, setSelectedTier] = useState('hosting')

  function toggleAddons(id) {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((addonId) => addonId !== id))
    } else {
      setSelectedAddons([...selectedAddons, id])
    }
  }

  const chosenPackage = packages.find((pkg) => pkg.id === selectedPackage)
  const packagePrice = chosenPackage.price
  const chosenAddons = addons.filter((addon) => selectedAddons.includes(addon.id))
  const addonsPrice = chosenAddons.reduce((total, addon) => total + addon.price, 0)
  const chosenTier = careTiers.find((tier) => tier.id === selectedTier)
  const tierPrice = chosenTier.price
  const projectTotal = packagePrice + addonsPrice

  return (
    <div>
      <h1>Keystone quote builder</h1>

      <PackagePicker
        packages={packages}
        selected={selectedPackage}
        onSelect={setSelectedPackage}
      />

      <h2>Add-ons</h2>

      <AddonList
        addons={addons}
        selected={selectedAddons}
        onToggle={toggleAddons}
      />

      <h2>Care plans</h2>
      <ul>
        {careTiers.map((tier) => (
          <li key={tier.id}>
            <button
              onClick={() => setSelectedTier(tier.id)}
              style={{
                fontWeight: tier.id === selectedTier ? 'bold' : 'normal',
              }}
            >
              {tier.name} - £{tier.price}/mo
            </button>
          </li>
        ))}
      </ul>

      <h2>Your quote</h2>
      <p>Project total: £{projectTotal}</p>
      <p>Then £{tierPrice} per month</p>
    </div>
  )
}

export default App

