import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops!!!!</h1>
      <h2>Something goes to death</h2>
      <h3>{error?.message || "Page Not Found"}</h3>
    </div>
  );
};
export default Error;
