import './QuoteSummary.css'

function QuoteSummary(props) {
    return (
        <div className="summary">
            <h2 className="summary-heading">Your quote</h2>

            <div className="summary-total">
                <span className="summary-amount">
                    £{props.projectTotal.toLocaleString('en-GB')}
                </span>
                <span className="summary-label">to build</span>
            </div>

            <div className="summary-monthly">
                then <strong>£{props.monthly}</strong> per month to look after it
            </div>
        </div>
    )
}

export default QuoteSummary