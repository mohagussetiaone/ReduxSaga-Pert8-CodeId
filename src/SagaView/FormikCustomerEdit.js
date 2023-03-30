import React, { useEffect } from "react";
import { useFormik } from "formik";
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
      user: customer.user ? customer.user.id : null,
      updatedat: customer.updatedat,
    },
    onSubmit: async (values) => {
      dispatch(EditCustomerRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Updated");
      props.setRefresh(true);
    },
  });

  return (
    <>
      <div class="flex items-center justify-center p-10">
        <form onSubmit={formik.handleSubmit} class="mx-auto w-full max-w-[600px]">
          <div class="mb-5">
            <label for="id" class="mb-1 block text-base font-medium text-[#07074D]">
              ID
            </label>
            <input
              type="text"
              name="id"
              id="id"
              placeholder="Id"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.id}
              onChange={formik.handleChange}
              disabled
            />
          </div>
          <div class="mb-5">
            <label for="firstname" class="mb-1 block text-base font-medium text-[#07074D]">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.firstname}
              onChange={formik.handleChange}
            />
          </div>
          <div class="mb-5">
            <label for="lastname" class="mb-1 block text-base font-medium text-[#07074D]">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.lastname}
              onChange={formik.handleChange}
            />
          </div>
          <div class="mb-5">
            <label for="user" class="mb-1 block text-base font-medium text-[#07074D]">
              User Id
            </label>
            <input
              type="text"
              name="user"
              id="user"
              placeholder="User Id"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.user}
              onChange={formik.handleChange}
            />
          </div>
          {/* <div class="mb-5">
            <label for="createdat" class="mb-1 block text-base font-medium text-[#07074D]">
              Created At
            </label>
            <input
              type="text"
              name="createdat"
              id="createdat"
              placeholder="Created At"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.createdat}
              onChange={formik.handleChange}
              disabled
            />
          </div> */}
          <div class="mb-5">
            <label for="updatedat" class="mb-1 block text-base font-medium text-[#07074D]">
              Updated At
            </label>
            <input
              type="text"
              name="updatedat"
              id="updatedat"
              placeholder="Updated At"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              defaultValue={formik.values.updatedat}
              onChange={formik.handleChange}
              disabled
            />
          </div>
          <div>
            <button class="hover:shadow-form rounded-md bg-blue-500 hover:bg-blue-600 py-3 px-8 text-base font-semibold text-white outline-none mx-1" type="submit">
              Simpan
            </button>
            <button class="hover:shadow-form rounded-md bg-red-400 hover:bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none" onClick={() => props.setDisplay(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
