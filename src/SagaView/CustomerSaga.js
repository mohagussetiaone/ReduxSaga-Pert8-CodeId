import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCustomerRequest } from "../CustomerSaga/Action/CustomerAction";
import FormikCustomerCreate from "./FormikCustomerCreate";
import FormikCustomerEdit from "./FormikCustomerEdit";

export default function CustomerSaga() {
  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state.customerState);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(GetCustomerRequest());
  }, [refresh]);

  console.log(customer);
  const onClick = (id) => {
    setDisplayEdit(true);
    setId(id);
  };

  return (
    <div>
      {displayEdit ? (
        <FormikCustomerEdit setRefresh={setRefresh} setDisplay={setDisplayEdit} id={id} />
      ) : display ? (
        <FormikCustomerCreate setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Customer</h2>
          <button onClick={() => setDisplay(true)}>Add Customer</button>
          <table>
            <th>ID</th>
            <th>firstName</th>
            <th>lastname</th>
            {(customer || []).map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.firstname}</td>
                  <td>{cust.lastname}</td>
                  <td>{cust.user}</td>
                  <td>
                    <button onClick={() => onClick(cust.id)}>Edit</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </>
      )}
    </div>
  );
}
