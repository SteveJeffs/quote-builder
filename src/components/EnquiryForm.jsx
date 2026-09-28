import './EnquiryForm.css'

function EnquiryForm(props) {
    return (
        <div className="enquiry">
            <h2>Send me this quote</h2>
            <p className="enquiry-intro">
                I'll get back to you within one working day
            </p>

            <div className="enquiry-field">
                <label htmlFor="name">Your name</label>
                <input
                    id="name"
                    type="text"
                    value={props.name}
                    onChange={(event) => props.onNameChange(event.target.value)}
                />
            </div>

            <div className="enquiry-field">
                <label htmlFor="business">Business name</label>
                <input
                    id="business"
                    type="text"
                    value={props.business}
                    onChange={(event) => props.onBusinessChange(event.target.value)}
                />
            </div>

            <div className="enquiry-field">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={props.email}
                    onChange={(event) => props.onEmailChange(event.target.value)}
                />
            </div>

            <div className="enquiry-field">
                <label htmlFor="message">Anything else I should know?</label>
                <textarea
                    id="message"
                    rows="4"
                    value={props.message}
                    onChange={(event) => props.onMessageChange(event.target.value)}
                />
            </div>

            <button type="button" 
            className="enquiry-submit"
            disabled={!props.canSend}
            >
                Send my quote
            </button>

        {!props.canSend && (
            <p className="enquiry-hint">Add your name and email to send.</p>
        )}

        </div>
    )
}

export default EnquiryForm