import React, { useState } from "react";

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentError, setPaymentError] = useState("");

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!cardNumber || !expiryDate || !cvv) {
      setPaymentError("Please fill in all card details.");
      return;
    }

    // Call to your backend or payment gateway (like Stripe)
    // Here we simulate a success
    alert("Payment Successful!");
    setPaymentError(""); // Clear the error message if successful
  };

  return (
    <div className="payment-page container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Payment Page</h1>

      {/* Payment Form */}
      <form onSubmit={handlePaymentSubmit} className="max-w-lg mx-auto bg-white p-6 rounded shadow-lg">
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-semibold mb-2">
            Payment Method
          </label>
          <div>
            <label className="mr-4">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={() => setPaymentMethod("creditCard")}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              PayPal
            </label>
          </div>
        </div>

        {paymentMethod === "creditCard" && (
          <div>
            <div className="mb-6">
              <label className="block text-gray-700 text-lg font-semibold mb-2">
                Card Number
              </label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="1234 5678 9876 5432"
                maxLength="16"
              />
            </div>

            <div className="flex space-x-4 mb-6">
              <div className="flex-1">
                <label className="block text-gray-700 text-lg font-semibold mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="MM/YY"
                />
              </div>

              <div className="flex-1">
                <label className="block text-gray-700 text-lg font-semibold mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="123"
                  maxLength="3"
                />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === "paypal" && (
          <div className="mb-6">
            <p className="text-lg text-gray-700">Pay with your PayPal account.</p>
            {/* For simplicity, we're not integrating PayPal here, but you could add a PayPal button here. */}
            <button
              type="button"
              className="w-full py-3 bg-blue-600 text-white rounded"
              onClick={() => alert("Redirecting to PayPal...")}
            >
              Pay with PayPal
            </button>
          </div>
        )}

        {/* Error Message */}
        {paymentError && (
          <div className="bg-red-500 text-white p-2 mb-4 rounded">
            {paymentError}
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white rounded"
        >
          Complete Payment
        </button>
      </form>
    </div>
  );
}

export default PaymentPage;
