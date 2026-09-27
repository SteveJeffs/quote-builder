import { useState } from 'react'
import { packages, addons, careTiers } from './data/pricing.js'
import PackagePicker from './components/PackagePicker.jsx'
import AddonList from './components/AddonList.jsx'
import CarePlanPicker from './components/CarePlanPicker.jsx'
import QuoteSummary from './components/QuoteSummary.jsx'
import Logo from './components/Logo.jsx'

function App() {
  const [selectedPackage, setSelectedPackage] = useState('standard')
  const [selectedAddons, setSelectedAddons] = useState([])
  const [selectedTier, setSelectedTier] = useState('hosting')
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


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
    <div className="page">
      <header className="page-header">
        <Logo />
        <div>
          <p className="page-brand">Keystone Digital</p>
          <h1>Quote Builder</h1>
        </div>
      </header>

      <PackagePicker
        packages={packages}
        selected={selectedPackage}
        onSelect={setSelectedPackage}
      />

      <div className="addon-section">
        <h2>Add-ons</h2>

        <AddonList
          addons={addons}
          selected={selectedAddons}
          onToggle={toggleAddons}
        />
      </div>

      <h2>Care plans</h2>

      <CarePlanPicker
        careTiers={careTiers}
        selected={selectedTier}
        onSelect={setSelectedTier}
      />

      <QuoteSummary
        chosenPackage={chosenPackage}
        chosenAddons={chosenAddons}
        chosenTier={chosenTier}
        projectTotal={projectTotal}
        monthly={tierPrice}
      />

    </div>
  )
}

export default App

