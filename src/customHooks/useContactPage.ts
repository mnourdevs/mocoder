"use client";
import { useRouter } from "next/navigation";
import { useReducer, FormEvent, ChangeEvent } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { INITIAL_STATE, reducer } from "@/utils/reducers";
import { ACTION_TRIGGERS } from "@/utils/data";
import { sendContact } from "@/app/actions/postData";
import { Toaster } from "@/utils/toaster";
import { UseContactFormReturnInterface } from "@/utils/types";

export const useContactFormHandler = (): UseContactFormReturnInterface => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const router: AppRouterInstance = useRouter();
  const { CHANGE_INPUT, CHANGE_ERROR } = ACTION_TRIGGERS;

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
    sendContact(state)
      .then((_) => {
        setTimeout(() => Toaster("success", "message sent"), 1000);
        router.push("/");
      })
      .catch((err) => {
        dispatch({ type: CHANGE_ERROR, payload: err.message });
        state.error && Toaster("error", state.error);
      });
  };
  return { state, router, handleChange, handleSubmit };
};
