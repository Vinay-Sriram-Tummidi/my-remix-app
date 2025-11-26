import { useContext } from "react";
import { GlobalContext } from "~/common/GlobalContext";

export function Card(props: any) {
  
  const {state,dispatch}=useContext(GlobalContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        background: "#000",
        padding: "16px",
        borderRadius: "8px",
      }}
    >
      <h2>{state.user}</h2>
      <button onClick={()=>dispatch({type:"LOGOUT"})}>Logout</button>
      {props.children}
    </div>
  );
}
