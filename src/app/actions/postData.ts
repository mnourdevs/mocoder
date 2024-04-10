import { BASE_URL } from "@/utils/data";
import { ReducerInitialType } from "@/utils/types";

export const sendContact = async (state: ReducerInitialType) => {
  try {
    const res = await fetch(`${BASE_URL}/contact/api/`, {
      method: "POST",
      body: JSON.stringify(state),
    });

    if (!res.ok) throw res;

    const data = await res.json();

    return data;
  } catch (error: any) {
    if (error.status === 404) console.error({ message: "NOT FOUND" });
    else {
      const err = await error.json();
      console.log("something went wrong", err);
    }
  }
};
