import { useParams } from "react-router-dom";
import {doctors} from "../data/mockData"; 
import PaymentPage from "./PaymentPage";

const PaymentWrapper = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) {
    return <p className="text-center text-red-500">Doctor not found.</p>;
  }

  return <PaymentPage consultationFee={doctor.consultationFee} />;
};

export default PaymentWrapper;
