import React, { useEffect, useState } from "react";

const WatchListRow = ({ item, handleDelete, handleUpdate }) => {
  const { title, customer, price, book, _id, status } = item;

  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${book}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [book]);
  const { picture } = order;
  return (
    <tr>
      <th>
        <label>
          <button onClick={() => handleDelete(_id)}>X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {customer}
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>{price}</td>
      <th>
        <button
          onClick={() => handleUpdate(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "pending"}
        </button>
      </th>
    </tr>
  );
};

export default WatchListRow;
