function QuoteSummary(props) {
    return (
        <div>
            <h2>Your quote</h2>
            <p>Project total: £{props.projectTotal}</p>
            <p>Then £{props.monthly} per month</p>
        </div>
    )
}

export default QuoteSummary