import { useParams } from "react-router-dom";
import DocDetails from "./DocDetails";
import {doctors} from "../data/mockData"; 

const DocDetailsWrapper = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) {
    return <p className="text-center text-red-500">Doctor not found.</p>;
  }

  return <DocDetails doctor={doctor} />;
};

export default DocDetailsWrapper;
