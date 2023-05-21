import { useSelector } from "react-redux";

const Cart = () => {

    const products = useSelector(state => state.cart);

    // console.log(products);

    return (
        <div className="text-center">
            <h3 className="my-4">Cart</h3>
            <div className="text-center space-y-2 grid grid-cols-4">
            {
                products.map((product) => {
                    return (
                        <div key={product.id} className="flex flex-col shadow-sm bg-white space-y-3 justify-center items-center w-64 py-4 rounded">
                            <img className="h-20" src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>${product.price}</p>
                            <button className="bg-red-400 px-4 rounded">remove</button>
                        </div>
                    );
                })
            }
            </div>

        </div>
    );
}

export default Cart;