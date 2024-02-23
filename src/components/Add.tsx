import React, { useRef } from "react";
import { useAppDispatch } from "../store/store";
import { addPerson } from "../store/features/personSlice";

export const Add = () => {
  const nameInput = useRef<string>("");
  const dispatch = useAppDispatch();

  return (
    <form className=" bg-white p-2 border shadow m-2 ">
      <label className="border shadow-md rounded-md p-2 m-2">
        Person name:
      </label>
      <input
        className="border rounded-md p-2 mx-2"
        onChange={(e) => {
          nameInput.current = e.target.value;
        }}
      />
      <button
        onClick={() => {
          dispatch(addPerson({ name: nameInput.current }));
        }}
        className="bg-violet-500 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Add
      </button>
    </form>
  );
};
