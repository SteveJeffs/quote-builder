import './ExtraPages.css'

function ExtraPages(props) {
    return (
        <div className="extra-pages">
            <label htmlFor="props.id">
                {props.label}
                <span className="extra-pages-note">{props.note}</span>
            </label>
            <input
                id={props.id}
                type="number"
                min="0"
                max="10"
                value={props.count}
                onChange={(event) =>
                    props.onChange(Math.max(0, Number(event.target.value)))
                }
            />
        </div>
    )
}

export default ExtraPages