import React, { useState, useEffect } from "react";
import { db } from "../Firebase_config";
import { collection, getDocs } from "firebase/firestore";
import DataTable from "datatables.net";
import { Link } from "react-router-dom";

export const Fetchdata = () => {
  new DataTable("#myTable", {
    // config options...
  });
  const usersCollectionRef = collection(db, "users");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, [usersCollectionRef]);
  return (
    <div>
      <Link to={"/"} className="btn btn-primary">
        Register User
      </Link>
      <br />
      <br />
      <table
        id="example"
        className="table table-striped table-bordered"
        data-order='[[ 1, "asc" ]]'
        data-page-length="25"
      >
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Age/Sex</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Govt ID</th>
            <th>Guardian Details</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {users.map((user) => {
            return (
              <tr>
                <td>{user.fullName}</td>
                <td>
                  {user.age}/{user.sex}
                </td>
                <td>{user.mobile}</td>
                <td>{user.Address}</td>
                <td>{user.govtID}</td>
                <td>
                  {user.Guardiantype}
                  {user.Guardianname}
                </td>
                <td>{user.Nationality}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
