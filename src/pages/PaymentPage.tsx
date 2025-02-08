import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface PaymentPageProps {
  consultationFee: number;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ consultationFee }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Show toast notification
    toast.success("Successful Payment", {
      position: "top-center",
      autoClose: 1500, // Toast disappears after 1.5 seconds
    });

    // Redirect after 2 seconds
    setTimeout(() => {
      navigate("/meet");
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Payment Page</h2>
        <p className="text-lg font-medium text-gray-700">Total Amount: ₹{consultationFee}</p>
        <button
          onClick={handlePayment}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Proceed to Pay
        </button>
      </div>

      {/* Toast Notification */}
      <ToastContainer />
    </div>
  );
};

export default PaymentPage;
