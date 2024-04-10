import { ReducerActionType, ReducerInitialType } from "@/utils/types";
import { CHANGE_INPUT } from "@/utils/data";

export const INITIAL_STATE: ReducerInitialType = {
  name: "",
  email: "",
  message: "",
};

export const  reducer = (
  state: ReducerInitialType,
  action: ReducerActionType
): ReducerInitialType => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
};
