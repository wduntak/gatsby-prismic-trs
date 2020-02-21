import React from "react"
const buttonStyles = {
  fontFamily: "Gelasio",
  fontSize: "16px",
  textAlign: "center",
  color: "#fff",
  padding: "12px 30px",
  backgroundColor: "rgb(0, 0, 0)",
  cursor: "pointer",
}
const Checkout = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_yEgiy0awqCO4Udm4kkrvT5oP")
  }
  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_GVN1CThT3LfCM6", quantity: 1 }],
      successUrl: `http://localhost:8000/success/`,
      cancelUrl: `http://localhost:8000/`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }
  render() {
    return (
      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
      >
        Buy now
      </button>
    )
  }
}
export default Checkout