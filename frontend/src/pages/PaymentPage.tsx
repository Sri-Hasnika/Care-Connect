import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PaymentPageProps {
  consultationFee: number;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ consultationFee }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("creditCard");

  const handlePayment = () => {
    setIsLoading(true);


    setTimeout(() => {
      setIsLoading(false);
      toast.success("Payment Successful", {
        position: "top-center",
        autoClose: 1500,
      });

      setTimeout(() => {
        navigate("/meet");
      }, 2000);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Payment Page</h2>
        <p className="text-lg font-medium text-gray-700 mb-4">
          Total Amount: ₹{consultationFee}
        </p>

        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block text-gray-700 font-medium">
            Select Payment Method:
          </label>
          <select
            id="paymentMethod"
            className="mt-2 w-full border border-gray-300 rounded-lg p-2"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="creditCard">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="netBanking">Net Banking</option>
          </select>
        </div>


        {paymentMethod === "creditCard" && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Expiration Date"
              className="w-full border border-gray-300 rounded-lg p-2 mb-2"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        )}

        {paymentMethod === "upi" && (
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter UPI ID"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
        )}

        {paymentMethod === "netBanking" && (
          <div className="mb-4">
            <select className="w-full border border-gray-300 rounded-lg p-2">
              <option value="bank1">Bank 1</option>
              <option value="bank2">Bank 2</option>
              <option value="bank3">Bank 3</option>
            </select>
          </div>
        )}

        <button
          onClick={handlePayment}
          className={`mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="spinner-border spinner-border-sm"></span>
          ) : (
            "Proceed to Pay"
          )}
        </button>
      </div>


      <ToastContainer />
    </div>
  );
};

export default PaymentPage;
