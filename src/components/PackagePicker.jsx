function PackagePicker(props) {
    return (
        <ul className='picker'>
            {props.packages.map((pkg) => (
                < li key={pkg.id}>
                    <button
                    className={
                        pkg.id === props.selected
                        ? 'picker-option is-selected'
                        : 'picker-option'
                    }
                        onClick={() => props.onSelect(pkg.id)}
                    >
                     {pkg.name}
                     <span className="picker-price">£{pkg.price}</span>
                    </button>
                </li>
            ))}
        </ul >
    )
}

export default PackagePicker