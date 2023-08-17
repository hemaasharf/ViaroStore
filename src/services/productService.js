import axios from 'axios'


export async function getProducts(searchParam) {
  const response = await axios.get(`${process.env.REACT_APP_HOST}/products?name_like=${searchParam ? searchParam : ''}`)
  return response
}
export async function getProductDetail(id) {
  const response = await axios.get(`${process.env.REACT_APP_HOST}/products/${id}`)
  return response
}
export async function getFeaturedProducts() {
  const response = await axios.get(`${process.env.REACT_APP_HOST}/featured_products`)
  return response
}

