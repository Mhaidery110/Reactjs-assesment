import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

function Show() {
  const [data, setData] = useState([]);

  const getdata = () => {
    axios.get("http://localhost:5000/read").then((res) => setData(res.data));
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleClick = (id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/delete/${id}`).then((res) => {
      console.log(res);
    });

    window.location.reload();
  };

  return (
    <div className="card">
      <div className="card-header">Details</div>
      <div className="card-body">
        <Table bordered hover>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age/Sex</th>
              <th scope="col">Mobile</th>
              <th scope="col">Address</th>
              <th scope="col">Gov. Id</th>
              <th scope="col">Guard. Details</th>
              <th scope="col">Nationality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((info, index) => (
              <tr key={index}>
                <th scope="row">{info.id}</th>
                <td>{info.name}</td>
                <td>
                  {info.dob}/{info.sex}
                </td>
                <td>{info.mobile}</td>
                <td>
                  {info.address}, {info.city}
                </td>
                <td>
                  {info.govId}:{info.idNumber}
                </td>
                <td>
                  {info.glabel}.{info.gaurdian}
                </td>
                <td>{info.nation}</td>
                <td>
                  <Button type="submit" onClick={() => handleClick(info.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Show;
