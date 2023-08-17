import { useState } from "react";

export const Accordion = ({ faqs }) => {

    const [expandedItem, setExpandedItem] = useState(0)
    const renderItem = faqs.map((item) => {

        const isExpanded = item.id === expandedItem

        const handleClick = (id) => {
            isExpanded ? setExpandedItem(0) : setExpandedItem(id)
        }
        return (
            <div key={item.id}>
                <h2 id="accordion-flush-heading-1">
                    <button onClick={() => handleClick(item.id)} type="button" className="text-lg flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                        <span className="text-xl text-slate-900 dark:text-white">{item.question}</span>
                    </button>
                </h2>
                {(isExpanded &&
                    < div id="accordion-flush-body-1" className="" aria-labelledby="accordion-flush-heading-1">
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                            <p className="text-lg mb-2 text-gray-500 dark:text-gray-400">{item.answer}</p>
                        </div>
                    </div>
                )
                }
            </div >
        )

    })
    return (
        <div>
            {renderItem}
        </div>
    )
}
