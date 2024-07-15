import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'


const Navbar = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-lg font-light">
            <ul className="flex items-center gap-3">
                <li>
                    <NavLink to='/' onClick={()=> context.setSearchByCategory('')}
                     className='font-semibold text-xl' >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' onClick={()=> context.setSearchByCategory('')}
                        className={({ isActive, isPending }) =>
                            isPending ? "text-gray-500" : isActive ? "underline underline-offset-4" : ""
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' onClick={()=> context.setSearchByCategory('clothes')}
                        className={({ isActive, isPending }) =>
                            isPending ? "text-gray-500" : isActive ? "underline underline-offset-4" : ""
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' onClick={()=> context.setSearchByCategory('electronics')}
                        className={({ isActive, isPending }) =>
                            isPending ? "text-gray-500" : isActive ? "underline underline-offset-4" : ""
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures' onClick={()=> context.setSearchByCategory('furnitures')}
                        className={({ isActive, isPending }) =>
                            isPending ? "text-gray-500" : isActive ? "underline underline-offset-4" : ""
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys' onClick={()=> context.setSearchByCategory('toys')}
                        className={({ isActive, isPending }) =>
                            isPending ? "text-gray-500" : isActive ? "underline underline-offset-4" : ""
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others' onClick={()=> context.setSearchByCategory('others')}
                        className={({ isActive, isPending }) =>
                            isPending ? "text-gray-500" : isActive ? "underline underline-offset-4" : ""
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    juan@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'
                        className={({ isActive, isPending }) =>
                            isPending ? "text-gray-500" : isActive ? "underline underline-offset-4" : ""
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                        className={({ isActive, isPending }) =>
                            isPending ? "text-gray-500" : isActive ? "underline underline-offset-4" : ""
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'
                        className={({ isActive, isPending }) =>
                            isPending ? "text-gray-500" : isActive ? "underline underline-offset-4" : ""
                        }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingCartIcon className='h-5 w-5 text-black' />
                    <div>
                        {context.cartProducts.length}
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar