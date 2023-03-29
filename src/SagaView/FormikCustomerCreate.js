import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddCustomerRequest } from "../CustomerSaga/Action/CustomerAction";

export default function FormikCustomerCreate(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: undefined,
      lastname: undefined,
      user: undefined,
    },
    onSubmit: async (values) => {
      let payload = new FormData();
      payload.append("firstName", values.firstname);
      payload.append("lastName", values.lastname);
      payload.append("user", values.user);

      dispatch(AddCustomerRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  return (
    <>
      <section class="bg-white py-20 lg:py-[120px]">
        <div class="container">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4">
              <div class="max-w-full overflow-x-auto">
                <table class="table-auto w-full">
                  <tr class="bg-primary text-center">
                    <th class="w-1/6 min-w-[160px] text-lg font-semibold text-whitepy-4 lg:py-7 px-3 lg:px-4 border-l border-transparent">ID</th>
                    <th class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4">First Name</th>
                    <th class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4">Last Name</th>
                    <th class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4">User ID</th>
                  </tr>
                  <tbody>
                    {formik &&
                      formik.map((e) => {
                        return (
                          <tr key={e.id}>
                            <td class="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">{e.id}</td>
                            <td class="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">{e.firstname}</td>
                            <td class="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">{e.lastname}</td>
                            <td class="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">{e.user}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
