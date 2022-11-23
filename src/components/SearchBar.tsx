import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function SearchBar() {
  const [theme, setTheme] = useState<string>('');
  const [keyword, setKeyword] = useState<string>('');
  const [isSearching, setIsSearching] = useState(false);
  const [keyItems, setKeyItems] = useState<ProductData[]>([]);
  const autoRef = useRef<HTMLUListElement>(null);
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const fetchData = () => {
    return fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => data.slice(0, 100));
  };
  interface Items {
    includes(data: string): boolean;
    title?: any;
  }
  const updateData = async () => {
    const res = await fetchData();
    let b = res
      .filter((list: Items) => list.title.includes(keyword) === true)
      .slice(0, 10);
    setKeyItems(b);
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) updateData();
    }, 200);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]); //키워드가 변경되면 api를 호출
  return (
    <>
      <div>
        <input
          value={keyword}
          onChange={onChangeData}
          placeholder="검색"
          className="input input-bordered"
          data-theme={theme}
        />
        {keyItems.length > 0 && keyword && (
          <div>
            <div className="absolute top-16 border bg-base-100 ">
              {keyItems.map((search, idx) => (
                <span
                  className="text-left block mt-2  sm:w-64 mb-2 max-h-80 overflow-y-auto "
                  key={search.title}
                  onClick={() => {
                    setKeyword('');
                  }}
                >
                  <Link to={`/product/${search.id}`}>{search.title}</Link>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default SearchBar;
