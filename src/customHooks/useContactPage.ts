import { INITIAL_STATE, reducer } from "@/utils/reducers";
import { useRouter } from "next/navigation";
import { useReducer, FormEvent, ChangeEvent } from "react";
import { CHANGE_INPUT } from "@/utils/data";
import { sendContact } from "@/app/actions/postData";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const useContactFormHandler = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const router: AppRouterInstance = useRouter();
  
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: CHANGE_INPUT,
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContact(state).then(_ => setTimeout(()=>(
      router.push("/")
    ), 200));
  };
  return { state, router, handleChange, handleSubmit };
};
