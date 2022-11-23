import './App.css';
import AppRouter from './router/AppRouter';
import Footer from './components/Footer';
import { useAppDispatch } from './store';
import { fetchProducts } from './store/product';
import { createContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggleBtn from './components/DarkModeToggleBtn';
import SearchBar from './components/SearchBar';
import { useSelector } from 'react-redux';

interface Theme {
  theme: string;
  setTheme: (theme: string) => void;
}

export const themeContext = createContext<Theme>({
  theme: '',
  setTheme: (theme) => {},
});

function App() {
  // prduct data를 store로 보내기
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const cartItemsCount = useSelector(
    (state: any) => state.cartStore.totalCount
  );

  const [theme, setTheme] = useState<string>('dark');

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div>
        <div className="drawer ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle " />
          <div className="drawer-content flex flex-col ">
            {/* <!-- Navbar --> */}
            <div className="sticky navbar top-0 z-10 w-full shadow-xl text-center bg-base-300 ">
              <div className="navbar xl:container mx-auto">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>

                <div className="flex-1 px-2 mx-2">
                  <Link to="/" className="btn btn-ghost normal-case text-xl">
                    React Shop
                  </Link>
                  <ul className="menu flex- hidden lg:block">
                    {/* <!-- Navbar menu content here --> */}
                    <li className="inline-block">
                      <Link to="/fashion">패션</Link>
                    </li>
                    <li className="inline-block">
                      <Link to="/accessory">액세서리</Link>
                    </li>
                    <li className="inline-block">
                      <Link to="/digital">디지털</Link>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <DarkModeToggleBtn />
                  <SearchBar />
                  <div className="dropdown  dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <Link to="/cart" className="indicator">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          ></path>
                        </svg>
                        <span className="badge badge-sm indicator-item">
                          {cartItemsCount}
                        </span>
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* Main , Footer */}
            <AppRouter />
            <Footer />
          </div>
          {/* 모바일 */}
          <div className="drawer-side ">
            <label htmlFor="my-drawer" className="drawer-overlay "></label>
            <ul className="menu p-4 w-80 bg-base-100 ">
              {/* <!-- Sidebar content here --> */}
              <li>
                <Link to="/fashion">패션</Link>
              </li>
              <li>
                <Link to="/accessory">액세서리</Link>
              </li>
              <li>
                <Link to="/digital">디지털</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;
