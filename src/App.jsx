import { useState } from 'react'
import { packages, addons, careTiers } from './data/pricing.js'
import PackagePicker from './components/PackagePicker.jsx'
import AddonList from './components/AddonList.jsx'
import CarePlanPicker from './components/CarePlanPicker.jsx'
import QuoteSummary from './components/QuoteSummary.jsx'
import Logo from './components/Logo.jsx'
import EnquiryForm from './components/EnquiryForm.jsx'

const MY_EMAIL = 'keystonedigital.surrey@gmail.com'

function App() {
  const [selectedPackage, setSelectedPackage] = useState('standard')
  const [selectedAddons, setSelectedAddons] = useState([])
  const [selectedTier, setSelectedTier] = useState('hosting')
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)


  function toggleAddons(id) {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((addonId) => addonId !== id))
    } else {
      setSelectedAddons([...selectedAddons, id])
    }
  }

  const chosenPackage = packages.find((pkg) => pkg.id === selectedPackage)
  const packagePrice = chosenPackage.price
  const gbpIncluded = selectedPackage !== 'starter'
  const chosenAddons = addons
  .filter((addon) => selectedAddons.includes(addon.id))
  .map((addon) =>
  addon.id === 'gbp' && gbpIncluded ? {...addon, price: 0 } : addon
) 
  const addonsPrice = chosenAddons.reduce((total, addon) => total + addon.price, 0)
  const chosenTier = careTiers.find((tier) => tier.id === selectedTier)
  const tierPrice = chosenTier.price
  const projectTotal = packagePrice + addonsPrice
  const canSend = name.trim() !== '' && email.includes('@')

  function sendQuote() {
    const addonLines =
      chosenAddons.length > 0
        ? chosenAddons
        .map((addon) =>
          `- ${addon.name}: ${addon.price === 0 ? 'Included' : '£' + addon.price}`
      )
      .join('\n')
        : '- None'

    const body = `Name: ${name}
  Business: ${business || 'Not given'}
  Email: ${email}

  Package: ${chosenPackage.name} (£${packagePrice})
  Add-ons:
  ${addonLines}
  Care plan: ${chosenTier.name} (£${tierPrice}/month)

  Project total: £${projectTotal}

  Message: 
  ${message || 'None'}`

  const subject = 'Quote request: ${chosenPackage.name} website'

  window.location.href =
    `mailto:${MY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

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

      <EnquiryForm
        name={name}
        business={business}
        email={email}
        message={message}
        onNameChange={setName}
        onBusinessChange={setBusiness}
        onEmailChange={setEmail}
        onMessageChange={setMessage}
        canSend={canSend}
        onSend={sendQuote}
        sent={sent}
      />


    </div>
  )
}

export default App

