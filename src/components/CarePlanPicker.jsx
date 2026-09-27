function CarePlanPicker(props) {
    return (
        <ul className="picker">
            {props.careTiers.map((tier) => (
                <li key={tier.id}>
                    <button
                        className={
                            tier.id === props.selected
                                ? 'picker-option is-selected'
                                : 'picker-option'
                        }
                        onClick={() => props.onSelect(tier.id)}
                    >
                        {tier.name}
                        <span className="picker-price">£{tier.price}/mo</span>
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default CarePlanPicker