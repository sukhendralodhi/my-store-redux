/* eslint-disable react/prop-types */

const Product = ({ products }) => {
    return (
        <article key={products.id} className="text-center border-2 border-red-700 bg-white rounded mx-auto">

            <div className="text-center ">
                <img className='h-20' src={products.image} alt={products.title} />
            </div>
            <h4>{products.title}</h4>
            <h4>{products.price}</h4>

        </article>
    )
}

export default Product