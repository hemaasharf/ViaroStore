import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../../context"
import { getUserOrders, createOrder } from "../../../services/"
import { useSession } from "../../../context/sessionContext"

export const Checkout = ({ onChange }) => {
    //import cartDetails
    const { cartList, total, clearCart } = useCart()
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const{showErrorLogin} = useSession()
    async function fetchUserOrders() {
        try {
            const response = await getUserOrders()
            setUser(response.data)
        }
        catch (err) {
            err.response ? showErrorLogin(err.response.data) : showErrorLogin("Failed To Commit Your Order")

        }
    }
    useEffect(() => {
        //to stop scrolling while Modal 
        document.body.classList.add("overflow-hidden")
        fetchUserOrders();

        return () => {
            document.body.classList.remove("overflow-hidden")
        }
    }, [])//eslint-disable-line


    async function submitOrder(e) {
        e.preventDefault()

        try {
            const response = await createOrder(cartList, total, user)
            console.log("ksjfld", response)
            // when success
            navigate('/order-summary', { state: { data: response.data, status: true } })
            clearCart()
        }
        catch (err) {
            err.response ? showErrorLogin(err.response.data) : showErrorLogin("Failed To Commit Your Order")
            navigate('/order-summary', { state: { status: false } })

        }

    }

    return (
        <section >
            <div className="fixed inset-0 h-full bg-black bg-opacity-50"></div>
            <div id="authentication-modal" tabIndex="-1" className="justify-center items-center flex mt-5 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full " aria-modal="true" role="dialog" >
                <div className="relative p-4 w-full max-w-md h-full md:h-auto overflow-y-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={() => onChange(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal" >
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <div className=" flex items-center gap-2 mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                        <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                    </svg>
                                </div>
                                <h1>CARD PAYMENT </h1>

                            </div>
                            <form onSubmit={(e) => submitOrder(e)} className="space-y-6"  >
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name:</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value={user.name || ''} disabled required="" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email:</label>
                                    <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value={user.email || ''} disabled required="" />
                                </div>
                                <div>
                                    <label htmlFor="card" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Card Number:</label>
                                    <input type="number" name="card" id="card" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value="4215625462597845" disabled required="" />
                                </div>
                                <div className="">
                                    <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Expiry Date:</label>
                                    <input type="number" name="month" id="month" className="inline-block w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value="03" disabled required="" />
                                    <input type="number" name="year" id="year" className="inline-block w-20 ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value="27" disabled required="" />
                                </div>
                                <div>
                                    <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Security Code:</label>
                                    <input type="number" name="code" id="code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:value-gray-400 dark:text-white" value="523" disabled required="" />
                                </div>
                                <p className="mb-4 text-2xl font-semibold text-lime-500 text-center">
                                    ${total}
                                </p>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700" >
                                    <i className="mr-2 bi bi-lock-fill"></i>PAY NOW
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
