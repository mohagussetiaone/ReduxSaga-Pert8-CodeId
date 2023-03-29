import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import CustomerApi from "../api/CustomerApi";
import { useDispatch, useSelector } from "react-redux";
import { EditCustomerRequest, FindCustomerRequest } from "../CustomerSaga/Action/CustomerAction";

export default function FormikCustomerEdit(props) {
  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state.customerState);

  useEffect(() => {
    dispatch(FindCustomerRequest(props.id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      firstname: customer.firstname,
      lastname: customer.lastname,
      user: customer.user,
    },
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("id", values.id);
      payload.append("firstname", values.firstname);
      payload.append("lastname", values.lastname);
      payload.append("user", values.user);

      dispatch(EditCustomerRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  return (
    <div>
      <div>
        <label>Region Name</label>
        <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange}></input>
      </div>
      <div>
        <div className="col-span-full">
          <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
            Photo
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <div className="mt-4 flex text-sm leading-6 text-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button type="submit" onClick={formik.handleSubmit}>
          Simpan
        </button>
        <button type="submit" onClick={() => props.setDisplay(false)}>
          cancel
        </button>
      </div>
    </div>
  );
}
