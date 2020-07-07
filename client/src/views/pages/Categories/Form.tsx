import React, {useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { AppDispatchType } from "../../../store/store";
import { getCategoryById } from "../../../store/categoryStore/actions";

type RootStateType = {
  categoryStore: any;
};

type ParamsType = {
  id: string;
};

const Form: React.FC = () =>{ 
  let history = useHistory();
  let params = useParams<ParamsType>();

  const dispatch: AppDispatchType = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
  const isLoading = useTypedSelector(state => state.categoryStore.isLoading);
  const category = useTypedSelector(state => state.categoryStore.category);

  console.log(params);
  
  useEffect(()=>{
    if(params.id !== "create"){
      dispatch(getCategoryById(params.id))
    }
  },[])

  const handleSave = () => {

  }

  return (
    <>
      <h1>Category</h1>
      <form onSubmit={handleSave}>
        
      </form>
    </>
  )};

export default Form;
