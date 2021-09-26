import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../redux/store/action-creators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreator, dispatch);
};
