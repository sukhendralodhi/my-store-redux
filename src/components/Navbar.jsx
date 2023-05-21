import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const items = useSelector((state) => state.cart);

    return (
        <div className='bg-green-400 py-4'>
        <nav className='flex justify-between container mx-auto'>
            <section className='flex justify-between w-3/12'>
                <span>My Store</span>
                <ul className='flex space-x-4'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </section>
            <span>Cart Items: {items.length}</span>
        </nav>
        </div>
    )
}

export default Navbar