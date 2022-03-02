import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return <h3>{id}</h3>;
};

export default Details;
