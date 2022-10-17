import React, { useEffect, useState } from "react";

const Userexample = () => {
  const [change, setChange] = useState("");

  const update = () => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => setChange(data.results[0]));
  };

  useEffect(() => {
    update();
  }, []);

  console.log(change);

  const { name, email, dob, picture } = change;

  return (
    <div>
      <h1>
        {name?.title} {name?.first}
      </h1>
      <img className="rounded-circle mt-3" src={picture?.large} alt="img" />
      <p className="mt-3 ">{email}</p>
      <h5>{dob?.age}</h5>
      <button className="btn btn-danger" onClick={update}>
        Get User
      </button>
    </div>
  );
};

export default Userexample;