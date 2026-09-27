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
                {props.monthly > 0 ? (
                    <>
                        then <strong>£{props.monthly}</strong> per month to look after it
                    </>
                ) : (
                    <>No monthly charge, you host it yourself</>
                )}
            </div>
        </div>
    )
}

export default QuoteSummary