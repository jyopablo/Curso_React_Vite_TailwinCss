import {CalendarIcon, ShoppingCartIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
    const {totalPrice, totalProducts} = props

    return(
        <div className='flex justify-between items-center mb-3 border border-black w-80 rounded'>
            <p className='flex w-full  p-3 justify-between items-center'>
              <span className='flex flex-col justify-center items-center'><CalendarIcon className='w-6 h-6 text-black cursor-pointer'/> 01.02.23</span>
              <span className='flex flex-col justify-center items-center'><ShoppingCartIcon className='w-6 h-6 text-black cursor-pointer'/>{totalProducts}</span>
              <span className='font-medium text-2xl'>${totalPrice}</span>
              <span><ChevronRightIcon className='w-6 h-6 text-black cursor-pointer'/></span>  
            </p>
        </div>
    )
}

export default OrdersCard