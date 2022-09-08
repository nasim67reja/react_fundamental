import React from "react";
import { Link, useSearchParams } from "react-router-dom";

function BrandLink({ brand, ...props }) {
  let [params] = useSearchParams();
  let isActive = params.getAll("brand").includes(brand);
  if (!isActive) {
    params.append("brand", brand);
  } else {
    params = new URLSearchParams(
      Array.from(params).filter(
        ([key, value]) => key !== "brand" || value !== brand
      )
    );
  }
  return (
    <Link
      style={{ color: isActive ? "red" : "" }}
      to={`/shoes?${params.toString()}`}
      {...props}
    />
  );
}
const ExampleSerach = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const ascHandler = () => {
    setSearchParams({ sort: "asc" });
  };
  const dscHandler = () => {
    setSearchParams({ sort: "dsc" });
  };

  return (
    <>
      <button onClick={ascHandler}>asc</button>
      <button onClick={dscHandler}>dsc</button>
      <BrandLink to="/shoes?brand=nike">Nike</BrandLink>
      <BrandLink to="/shoes?brand=vans">Vans</BrandLink>
    </>
  );
};

export default ExampleSerach;
