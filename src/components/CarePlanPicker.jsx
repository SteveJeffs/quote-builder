function CarePlanPicker(props) {
    return (
        <ul>
            {props.careTiers.map((tier) => (
                <li key={tier.id}>
                    <button
                        onClick={() => props.onSelect(tier.id)}
                        style={{
                            fontWeight: tier.id === props.selected ? 'bold' : 'normal',
                        }}
                    >
                        {tier.name} - £{tier.price}/mo
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default CarePlanPicker