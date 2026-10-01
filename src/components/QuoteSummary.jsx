import './QuoteSummary.css'

function QuoteSummary(props) {
    return (
        <div className="summary">
            <h2 className="summary-heading">Your quote</h2>

            <div className="summary-lines">
                <div className="summary-line">
                    <span>{props.chosenPackage.name} website</span>
                    <span className="summary-figure">
                        £{props.chosenPackage.price.toLocaleString('en-GB')}
                    </span>
                </div>

                {props.chosenAddons.map((addon) => (
                    <div className="summary-line" key={addon.id}>
                        <span>{addon.name}</span>
                        <span className="summary-figure">
                            {addon.priceNote && addon.priceNote + ' + '}
                            {addon.price === 0
                                ? 'Included'
                                : `£${addon.price.toLocaleString('en-GB')}`}
                        </span>
                    </div>
                ))}
                {props.extraPages > 0 && (
                    <div className="summary-line">
                        <span>Extra Pages x {props.extraPages}</span>
                        <span className="summary-figure">
                            £{props.extraPagesPrice.toLocaleString('en-GB')}
                        </span>

                    </div>
                )}

                {props.copyPages > 0 && (
                    <div className="summary-line">
                        <span>Copywriting x {props.copyPages}</span>
                        <span className="summary-figure">
                            £{props.copyPagesPrice.toLocaleString('en-GB')}
                        </span>
                    </div>
                )}

            </div >

            <div className="summary-total">
                <span className="summary-amount">
                    £{props.projectTotal.toLocaleString('en-GB')}
                </span>
                <span className="summary-label">to build</span>
            </div>

            <div className="summary-monthly">
                {props.monthly > 0 ? (
                    <>
                        then <strong>£{props.monthly}</strong> per month on{' '}
                        {props.chosenTier.name}
                    </>
                ) : (
                    <>No monthly charge, you host it yourself</>
                )}
            </div>
        </div >
    )
}

export default QuoteSummary