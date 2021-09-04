import { NextPage } from 'next';
import { Header } from '../../components/slickfits/Header';
import { products } from '../../components/slickfits/products';

const SlickFits: NextPage = () => {
  return (
    <div>
      <Header />
      <main className="max-w-[62.5rem] p-6 mx-auto">
        {/* Pagination */}
        <div className="flex justify-center">
          <div className="inline-flex justify-center mt-4 text-sm border divide-x rounded-lg">
            <a
              aria-disabled={true}
              className="py-4 text-gray-500 pointer-events-none px-7"
              href="#"
            >
              &larr; Prev
            </a>
            <p className="hidden py-4 px-7 sm:block">Page 1 of 3</p>
            <p className="hidden py-4 px-7 sm:block">11 Items Total</p>
            <a className="py-4 px-7" href="#">
              Next &rarr;
            </a>
          </div>
        </div>

        {/* Products List */}
        <ul className="grid gap-16 mt-5 lg:grid-cols-2">
          {products.map((product) => {
            return (
              <li
                className="relative flex flex-col max-w-lg mx-auto border border-gray-200 rounded-lg shadow-xl"
                key={product.name}
              >
                <p className="absolute text-3xl font-semibold text-white -top-1 -right-1 bg-sick-red p-1.5 transform rotate-3 leading-none">
                  {formatMoney(product.price)}
                </p>
                <img
                  className="object-cover h-[25rem] w-full"
                  src={product.photo._meta.url}
                  alt={product.name}
                />
                <h2 className="-mt-8 text-center transform skew-x-[-5deg] -rotate-1">
                  <a
                    className="px-3 text-5xl leading-tight text-white hover:underline bg-sick-red text-shadow decoration-clone"
                    href=""
                  >
                    {product.name}
                  </a>
                </h2>
                <p className="flex-1 px-8 py-4 leading-8">
                  {product.description}
                </p>
                <div className="grid grid-cols-3 border-t border-gray-300 divide-x divide-gray-300">
                  <button className="p-3 hover:bg-gray-100">Edit ✏️</button>
                  <button className="p-3 hover:bg-gray-100">
                    {' '}
                    Add to cart 🛒
                  </button>
                  <button className="p-3 hover:bg-gray-100">Delete 🙅‍♂️</button>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default SlickFits;

//From slickfits frontend/lib/formatMoney.js
export function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };

  // check if its a clean dollar amount
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('en-US', options);

  return formatter.format(amount / 100);
}
