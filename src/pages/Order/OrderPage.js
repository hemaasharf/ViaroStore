import { OrderSuccess, OrderFail } from "./";
import { useLocation } from "react-router-dom";
import { UpdateTitle } from "../../components";

export const OrderPage = () => {
  const { state } = useLocation()

  return (
    <div>
      <UpdateTitle title="OrderSummary" />
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </div>
  );
};
