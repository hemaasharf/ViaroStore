// import { useFilter } from '../../context';
import { useCart } from '../../context'
import { CartEmpty } from './components/cartEmpty'
import { CartList } from './components/cartList'
export const CartPage = () => {
  const {cartList} = useCart()
  return (
    <main>
      {cartList.length === 0 ? <CartEmpty />: <CartList/>  }
     
      
    </main>
  )
}
