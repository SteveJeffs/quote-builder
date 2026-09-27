import './AddonList.css'

function AddonList(props) {
    return (
        <ul className='picker'>
            {props.addons.map((addon) => (
                <li key={addon.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={props.selected.includes(addon.id)}
                            onChange={() => props.onToggle(addon.id)}
                        />
                        {addon.name} - £{addon.price}
                    </label>
                </li>
            ))}
        </ul>
    )
}

export default AddonList