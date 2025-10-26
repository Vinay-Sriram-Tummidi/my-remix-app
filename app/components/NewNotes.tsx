import { Form, useActionData, useFetcher } from "@remix-run/react";

export default function AddNotes() {
  const data = useActionData();
  return (
    <div className="items-center flex flex-col pt-[40px] ">
      {/* <h1>Insert a New Expense</h1> */}
      {data?.message && <p>{data.message}</p>}
      <div className="flex flex-col items-center bg-[#4B5945] p-4 border rounded-xl">
        <Form method="post" className="flex flex-col gap-4 ">
          <input
            name="title"
            placeholder="Expense Type"
            className="border rounded-xl"
          ></input>
          <input
            name="content"
            type="number"
            placeholder="₹ Amount"
            className="border rounded-xl"
          ></input>
          <button
            type="submit"
            name="action"
            value="add"
            className="bg-[#534559] p-2 rounded-xl text-white"
          >
            Add Expense
          </button>
        </Form>
      </div>
    </div>
  );
}
