function PackagePicker(props) {
    return (
        <ul>
            {props.packages.map((pkg) => (
                < li key={pkg.id}>
                    <button
                        onClick={() => props.onSelect(pkg.id)}
                        style={{
                            fontWeight: pkg.id === props.selected ? 'bold' : 'normal',
                        }}
                    >
                        {pkg.name} - £{pkg.price}
                    </button>
                </li>
            ))}
        </ul >
    )
}

export default PackagePicker