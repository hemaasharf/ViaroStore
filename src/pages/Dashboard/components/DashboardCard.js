import { Link } from "react-router-dom"

export const DashboardCard = ({ data }) => {
    return (
        <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
            <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
                <span>Order Id: {data.id}</span>
                <span>Total: ${data.amount_paid}</span>
            </div>
            <div className="flex flex-wrap gap-4 justify-between max-w-4xl m-auto p-2 my-5 ">
                {data.cartList.map((item) => {
                    return (
                        <div key={item.id} className="flex gap-1">
                            <Link to={`/products/${item.id}`}>
                                <img className="w-32 rounded" src={item.poster} alt={item.name} />
                            </Link>
                            <div className="">
                                <Link to={`/products/${item.id}`}>
                                    <p className="text-lg ml-2 dark:text-slate-200">{item.name}</p>
                                </Link>
                                <div className="text-lg m-2 dark:text-slate-200">
                                    <span>${item.price}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
