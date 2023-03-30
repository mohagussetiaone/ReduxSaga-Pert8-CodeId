import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DelCustomerRequest, GetCustomerRequest } from "../CustomerSaga/Action/CustomerAction";
import FormikCustomerCreate from "./FormikCustomerCreate";
import FormikCustomerEdit from "./FormikCustomerEdit";
import "../App.css";

export default function CustomerSaga() {
  const dispatch = useDispatch();
  const { customers } = useSelector((state) => state.customerState);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();

  useEffect(
    (event) => {
      dispatch(GetCustomerRequest());
      // event.preventDefault();
    },
    [refresh]
  );

  const onClick = (id) => {
    setDisplayEdit(true);
    setId(id);
  };

  const onDelete = async (id) => {
    dispatch(DelCustomerRequest(id));
    window.alert("Delete Successfully");
    setDisplay(false);
    setRefresh(!refresh);
  };

  return (
    <div>
      {displayEdit ? (
        <FormikCustomerEdit setRefresh={setRefresh} setDisplay={setDisplayEdit} id={id} />
      ) : display ? (
        <FormikCustomerCreate setRefresh={setRefresh} setDisplay={setDisplay} id={id} />
      ) : (
        <>
          <h2 className="mx-2 my-2">List Customer</h2>
          <button onClick={() => setDisplay(true)} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-2">
            Add Customer
          </button>
          <div className="flex items-center justify-center">
            <div className="container">
              <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                <thead class="text-white">
                  <tr class="bg-blue-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                    <th class="p-3 text-left">ID</th>
                    <th class="p-3 text-left">First Name</th>
                    <th class="p-3 text-left">Last Name</th>
                    <th class="p-3 text-left">User</th>
                    <th class="p-3 text-left">Created At</th>
                    <th class="p-3 text-left">Updated At</th>
                    <th class="p-3 text-left" width="110px">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="flex-1 sm:flex-none">
                  {customers &&
                    customers.map((cust) => {
                      return (
                        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 pr-4" key={cust.id}>
                          <td class="border-grey-light border hover:bg-gray-100 p-3">{cust.id}</td>
                          <td class="border-grey-light border hover:bg-gray-100 p-3">{cust.firstname}</td>
                          <td class="border-grey-light border hover:bg-gray-100 p-3">{cust.lastname}</td>
                          <td class="border-grey-light border hover:bg-gray-100 p-3">{cust.user ? cust.user.id : "null"}</td>
                          <td class="border-grey-light border hover:bg-gray-100 p-3">{cust.createdat}</td>
                          <td class="border-grey-light border hover:bg-gray-100 p-3">{cust.updatedat}</td>
                          <td class="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 cursor-pointer">
                            <div class="flex items-center justify-center">
                              <button onClick={() => onClick(cust.id)} class="group h-10 w-[80px] border border-green-500 rounded-md hover:bg-green-600 px-4 py-2 m-2 bg-green-500 text-white relative overflow-hidden">
                                Edit
                              </button>
                              <button onClick={() => onDelete(cust.id)} class="border border-red-500 bg-red-500 text-white rounded-md h-10 w-[80px] px-4 py-2 m-2  hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
