import './CountInput.css'

function CountInput(props) {
    return (
        <div className="count-input">
            <label htmlFor={props.id}>
                {props.label}
                <span className="count-input-note">{props.note}</span>
            </label>
            <input
                id={props.id}
                type="number"
                min="0"
                max="10"
                value={props.count === ? '' : props.count}
                placeholeder='0'
                onChange={(event) =>
                    props.onChange(Math.max(0, Number(event.target.value)))
                }
            />
        </div>
    )
}

export default CountInput