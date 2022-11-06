import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Checkout = () => {
  const individualData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { ticketPrice, _id, filmName } = individualData;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      title: filmName,
      book: _id,
      customer: name,
      email,
      phone,
      message,
      price: ticketPrice,
    };

    fetch("http://localhost:4000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          form.reset();
          alert("data inserted successfully");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="m-4">
        <h1 className="text-3xl mb-8">
          <span className="text-sm">Your selected movie is:</span> {filmName}
        </h1>
        <form className="" onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <input
              name="firstName"
              type="text"
              placeholder="firstName"
              className="input input-bordered input-info w-full"
              required
            />
            <input
              name="lastName"
              type="text"
              placeholder="lastName"
              className="input input-bordered input-info w-full"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="email"
              defaultValue={user?.uid && user.email}
              className="input input-bordered input-info w-full"
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="phone"
              className="input input-bordered input-info w-full"
              required
            />
            <textarea
              className="textarea textarea-secondary w-full lg:col-span-2"
              placeholder="message"
              name="message"
            ></textarea>
          </div>
          <button className="mt-4 btn btn-secondary">Complete order?</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
