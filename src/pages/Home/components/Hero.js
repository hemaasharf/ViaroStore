import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className='py-7'>
      <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-5xl font-bold dark:text-gray-100' >The Ultimate eBook Store</h1>
            <p className='text-2xl p-2 dark:text-gray-100'>CodeBook is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
            <Link to="/products" className='text-sm font-bold rounded bg-blue-700 text-white p-2 max-w-fit hover:bg-blue-800 '>Explore our Store</Link>
          </div>
          <div className='visual my-5 lg:max-w-xl'>
            <img className=' max-h-full rounded-lg' src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60" alt="CodeBook Hero Section" />
          </div>
      </div>
    </section>
  );
}

