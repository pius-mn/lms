import { useState, useEffect } from 'react';
const Footer = ()=> {
    const [isAuth, setIsAuth] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true);
        }
         // Initially check if the device is mobile or not
    checkIsMobile();
    // Event listener to check if the device is resized
    window.addEventListener('resize', checkIsMobile);
    // Cleanup the event listener when component is unmounted
    return () => window.removeEventListener('resize', checkIsMobile);
    }, [isAuth]);

    return (
        <>
            {isMobile && (
               <nav className="flex justify-around fixed bottom-0 inset-x-0 max-w-4xl mx-auto bg-white py-4 border-t border-gray-200 z-10">
  <a href="/" className="text-gray-500 hover:text-blue-500">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} className="h-6 w-6" viewBox="0 0 50 50">
      <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z">
      </path>
    </svg>
    <span className="block text-xs">Home</span>
  </a>
  <a href="/guide" className="text-gray-500 hover:text-blue-500">
    <svg className="w-6 h-6" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <path fill="#000000" fillRule="evenodd" d="M1.25 2C.56 2 0 2.56 0 3.25v8.5C0 12.44.56 13 1.25 13H5c.896 0 1.475.205 1.809.448.317.23.441.51.441.802a.75.75 0 001.5 0c0-.292.124-.572.441-.802.334-.243.913-.448 1.809-.448h3.75c.69 0 1.25-.56 1.25-1.25v-8.5C16 2.56 15.44 2 14.75 2H11c-1.154 0-2.106.354-2.772 1-.081.08-.157.161-.228.246A3.131 3.131 0 007.772 3C7.106 2.354 6.154 2 5 2H1.25zm7.5 9.967c.61-.309 1.372-.467 2.25-.467h3.5v-8H11c-.846 0-1.394.253-1.728.577-.335.325-.522.787-.522 1.34v6.55zm-1.5 0v-6.55c0-.553-.187-1.015-.522-1.34C6.394 3.753 5.846 3.5 5 3.5H1.5v8H5c.878 0 1.64.158 2.25.467z" clipRule="evenodd" />
      </g>
    </svg>
    <span className="block text-xs">Courses</span>
  </a>
  <a href="/course" className="text-gray-500 hover:text-blue-500">
 <svg fill="#000000" className="w-6 h-6"  viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M26,52A26,26,0,0,1,22.88.19,25.78,25.78,0,0,1,34.73,1.5a2,2,0,1,1-1.35,3.77,22,22,0,0,0-21,38,22,22,0,0,0,35.41-20,2,2,0,1,1,4-.48A26,26,0,0,1,26,52Z" /><path d="M26,43.86a2,2,0,0,1-2-2V22.66a2,2,0,1,1,4,0v19.2A2,2,0,0,1,26,43.86Z" /><circle cx={26} cy="15.71" r="2.57" /></g></svg>

    <span className="block text-xs">about</span>
  </a>
  { isAuth &&(<a href="/profile" className="text-gray-500 hover:text-blue-500">
    <svg className="w-6 h-6" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000">
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <style type="text/css" dangerouslySetInnerHTML={{__html: "\n                                .st0 {\n                                    fill: #000000;\n                                }\n                            " }} />
        <g>
          <path className="st0" d="M458.159,404.216c-18.93-33.65-49.934-71.764-100.409-93.431c-28.868,20.196-63.938,32.087-101.745,32.087 c-37.828,0-72.898-11.89-101.767-32.087c-50.474,21.667-81.479,59.782-100.398,93.431C28.731,448.848,48.417,512,91.842,512 c43.426,0,164.164,0,164.164,0s120.726,0,164.153,0C463.583,512,483.269,448.848,458.159,404.216z">
          </path>
          <path className="st0" d="M256.005,300.641c74.144,0,134.231-60.108,134.231-134.242v-32.158C390.236,60.108,330.149,0,256.005,0 c-74.155,0-134.252,60.108-134.252,134.242V166.4C121.753,240.533,181.851,300.641,256.005,300.641z">
          </path>
        </g>
      </g>
    </svg>
    <span className="block text-xs">Profile</span>
  </a>)}
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full absolute bottom-16 right-0 mt-4 mr-4">
    +
  </button>
</nav>

                
            ) }
        </>
    );
}
export default Footer;