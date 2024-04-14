import { BASE_URL } from "@/utils/data";
import { ReducerInitialType } from "@/utils/types";

export const sendContact = async (state: ReducerInitialType) => {
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  try {
    const res = await fetch(`${BASE_URL}contact/api/`, {
      method: "POST",
      body: JSON.stringify(state),
      headers: header,
    });

    if (!res.ok) throw res;

    const data = await res.json();

    return data;
  } catch (error: any) {
    if (error.status === 404) throw new Error("NOT FOUND");
    else if (error.status === 405) throw new Error("check internet connectivity") 
    else {
    const err = await error.json();
    console.log("request error ===> ", err)
    throw err
  }
}};
