import './ExtraPages.css'

function ExtraPages(props) {
    return (
        <div className="extra-pages">
            <label htmlFor="extra-pages">
                Extra pages
                <span className="extra-pages-note">£75 each</span>
            </label>
            <input
                id="extra-pages"
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