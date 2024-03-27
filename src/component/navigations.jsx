// eslint-disable-next-line no-unused-vars
import React ,{ useState, useEffect } from 'react';
const Navigation = () =>{
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
    }, [isAuth]);

    return (
        <header className=" bg-white shadow-lg">
        {/* Top navigation bar */}
        <div className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Hamburger icon for small devices */}
              
              {/* Logo */}
              <h1 className="text-lg font-semibold ml-4">learn with us</h1>
            </div>
            <div className="hidden md:block">
              {/* Navigation links for larger devices */}
              <div className="ml-auto flex items-baseline space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Link 1</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Link 2</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Link 3</a>
                {/* Add more links as needed */}
              </div>
              
            </div>
            <div className="ml-10 flex items-baseline">
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Link 1</a>
               
                {/* Add more links as needed */}
              </div>
          </div>
        </div>
      </div>

      {/* Spacer for the top navigation bar */}
      <div className="h-16"></div>
</header>

    );
}
export default Navigation;