import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import WatchListRow from "./WatchListRow";

const WatchList = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/order?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);
  // console.log(order);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete?");
    if (proceed) {
      fetch(`http://localhost:4000/order/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = order.filter((odr) => odr._id !== id);
            setOrder(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:4000/order/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = order.filter((odr) => odr._id !== id);
          const approving = order.find((odr) => odr._id === id);
          approving.status = "Approved";
          const newOrders = [approving, ...remaining];
          setOrder(newOrders);
        }
      });
  };
  return (
    <div data-theme="luxury" className="px-8">
      <h1 className="text-3xl p-8 ">Your WatchList</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Movie</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => (
              <WatchListRow
                key={item._id}
                handleDelete={handleDelete}
                item={item}
                handleUpdate={handleUpdate}
              ></WatchListRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchList;
