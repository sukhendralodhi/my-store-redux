import { useState, useEffect } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, []);
    console.log(products);
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  space-x-2 space-y-2 '>
                {
                products.map((product) => {
                    const {id, image, price, title} = product;
                    return (
                        <Product key={id} id={id} image={image} price={price} title={title} />
                    );
                })
            }    
            </div>
        </>
    );
}

export default Products