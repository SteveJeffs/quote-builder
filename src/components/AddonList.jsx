import './AddonList.css'

function AddonList(props) {
    return (
        <ul className='picker'>
            {props.addons.map((addon) => (
                <li key={addon.id}>
                    <label className="picker-option">
                        <input
                            type="checkbox"
                            checked={props.selected.includes(addon.id)}
                            onChange={() => props.onToggle(addon.id)}
                        />
                        <span className="addon-name">{addon.name}</span>
                        <span className="picker-price">
                            {addon.id === 'gbp' && props.gbpIncluded
                                ? 'Included'
                                : `£${addon.price}`}
                                {addon.priceNote && ' + ' + addon.priceNote}
                        </span>
                    </label>
                </li>
            ))}
        </ul>
    )
}

export default AddonList