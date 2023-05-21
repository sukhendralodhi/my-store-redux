/* eslint-disable react/prop-types */

const Product = ({ id, image, price, title }) => {

    const handleAdd = (product) => {

    }
  return (
    <article
      key={id}
      className="text-center shadow-sm bg-white rounded mx-auto flex flex-col justify-center items-center py-4 px-4 w-64"
    >
      <div className="text-center ">
        <img className="h-20" src={image} alt={title} />
      </div>
      <h4>{title}</h4>
      <h4>${price}</h4>
      <button
        onClick={() => handleAdd(product)}
        className="bg-green-400 px-2 rounded text-white mt-2 hover:bg-green-500 transition-all duration-100 delay-100 ease-linear"
      >
        Add To Cart
      </button>
    </article>
  );
};

export default Product;
