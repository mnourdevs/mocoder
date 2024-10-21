import { ReducerActionType, ReducerInitialType } from "@/utils/types";
import { ACTION_TRIGGERS } from "@/utils/constants/data";

export const INITIAL_STATE: ReducerInitialType = {
  name: "",
  email: "",
  message: "",
  error: "",
};

export const reducer = (
  state: ReducerInitialType,
  action: ReducerActionType
): ReducerInitialType => {
  switch (action.type) {
    case ACTION_TRIGGERS["CHANGE_INPUT"]:
      const { name, value } = action.payload as { name: string; value: string };
      return {
        ...state,
        [name]: value,
      };

    case ACTION_TRIGGERS["CHANGE_ERROR"]:
      return {
        ...state,
        error: action.payload.toString(),
      };

    default:
      return state;
  }
};
