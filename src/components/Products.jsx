import { useState, useEffect } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products/1');
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, []);
    console.log(products);
    return (
        <>
            <div className='grid grid-cols-4 gap-7  '>
                {/*
                products.map((product) => {
                    const {id, image, price, title} = product;
                    return (
                        <div key={id}>
                            <img className='w-20' src={image} alt={title} />
                            <h4>{title}</h4>
                            <h4>{price}</h4>
                        </div>
                    );
                })
            */}
                <Product products={products} />
                
            </div>
        </>
    );
}

export default Products