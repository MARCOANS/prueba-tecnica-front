import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  LIST_DEPARTMENT_FILTERS_REQUESTED_ACTION,
  LIST_DEPARTMENT_REQUESTED_ACTION,
  LIST_UPDATE_PARAMS_ACTION,
} from "store/actions/department";
import { RootState } from "store/reducers";
import { DepartmentState } from "store/reducers/department";

export const useList = () => {
  const dispatch = useDispatch();

  const {
    list: { inProgress, data, params, pagination },
    filters,
  }: any= useSelector((state: RootState) => state.department);

  const onChangeParams = (obj: object) => {
    dispatch(LIST_UPDATE_PARAMS_ACTION(obj));
  };

  useEffect(() => {
    dispatch(LIST_DEPARTMENT_REQUESTED_ACTION(params));
  }, [params]);

  useEffect(() => {
    dispatch(LIST_DEPARTMENT_FILTERS_REQUESTED_ACTION(params));
  }, [params.term]);

  return { data, inProgress, pagination, onChangeParams,filters };
};
