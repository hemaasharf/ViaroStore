import { DashboardEmpty,DashboardCard } from './'
import { getUser } from '../../services'
import { useCallback, useEffect, useState } from 'react'
import { UpdateTitle } from '../../components'
import { useSession } from '../../context/sessionContext'
export const DashbaordPage = () => {
  const [orders, setOrders] = useState([])
  const {showErrorLogin} = useSession()
  const getOrders = useCallback(async () => {
    try {
      const response = await getUser()
      setOrders(response.data)
    }
    catch (err) {
      err.response ? showErrorLogin(err.response.data) : showErrorLogin("Failed To Commit Your Order")
    }
  }, [showErrorLogin])
  useEffect(() => {
    getOrders()
  }, [getOrders])

  return (
    <main>
      <UpdateTitle title="Dashboard"/>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>
      <section>
        {!!orders.length && orders.map((order, index) => {
          return <DashboardCard key={order.id} data={order} />
        })}
      </section>
      <section>
        {!orders.length && <DashboardEmpty />}
      </section>
    </main>
  )
}
