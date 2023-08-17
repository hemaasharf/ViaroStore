import axios from "axios";

function getSession() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbId"));
  return { token, cbid };
}

export async function getUser() {
  const browserData = getSession();
  //same request for user auth but with filter ?user.id
  const response = await axios.get(`${process.env.REACT_APP_HOST}/660/orders?user.${browserData.cbid}`, {
    headers: {
      Authorization: `Bearer ${browserData.token}`
    },
  })
  return response
}

//implement token-based authorization with JSON Server using Axios
export async function getUserOrders() {
  const browserData = getSession();
  //same request for user auth but with filter ?user.id
  const response = await axios.get(`${process.env.REACT_APP_HOST}/600/users/${browserData.cbid}`, {
    headers: {
      Authorization: `Bearer ${browserData.token}`
    },
  })
  return response
}

export async function createOrder(cartList, total, user) {
  const browserData = getSession();
  
  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id
    }
  }
  const response = await axios.post(`${process.env.REACT_APP_HOST}/660/orders`,(order), {
    headers: {
        Authorization: `Bearer ${browserData.token}`,
    },
})
  return response;

}