import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface ProductData {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

function Items({ category = '', theme = '' }) {
  const [categoryName, setCategoryName] = useState('');
  const [dataTheme, setDataTheme] = useState('');
  const [items, setItems] = useState<ProductData[]>([]);
  interface State {
    productStore: {
      [key: string]: ProductData[];
    };
  }
  const productData = useSelector(
    (state: State) => state.productStore[category]
  );
  useEffect(() => {
    if (category === 'fashion') {
      setCategoryName('패션');
    } else if (category === 'accessory') {
      setCategoryName('액세서리');
    } else if (category === 'digital') {
      setCategoryName('디지털');
    } else {
      <Navigate to="*" replace={true} />;
    }
  });
  useEffect(() => {
    setItems(productData);
  }, [categoryName]);

  return (
    <section className="main" data-theme={dataTheme}>
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto ">
        <div className="text-sm breadcrumbs ">
          <ul>
            <li>홈</li>
            <li>{categoryName}</li>
          </ul>
        </div>
        <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">
            {categoryName}
          </h2>
          <div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list "
            data-scroll="false"
          >
            {items.map((item: any) => {
              return (
                <div key={item.id}>
                  <Link to={`/product/${item.id}`}>
                    <div className="card shadow-xl m-2">
                      <figure className="h-72 bg-white">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="max-h-[70%] sm:w-1/2 hover:scale-110 ease-linear duration-200"
                        />
                      </figure>
                      <div className="card-body h-52">
                        <h2 className="card-title text-base">{item.title}</h2>
                        <p>${item.price}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </section>
  );
}

export default Items;
