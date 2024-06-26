import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./loader";

const Profile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Check if access token is present
    if (!localStorage.getItem('access_token')) {
      window.location.href = '/login';
    }
    // Run once on component 
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${apiUrl}profile/`,
          {},
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
              "Content-Type": "application/json"
            },
            withCredentials: true,
          }
        );
        setData(response.data);
        // console.log(response.data);
        setError(null);
      } catch (error) {
        // console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (loading) {
    return (
     <Loader />
    );
  }

  if (error) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-4 mt-4 max-w-4xl pb-20">
      <div className="p-5 border rounded-lg text-white bg-green-400 relative">
        <div className="flex items-center">
          <svg viewBox="0 0 48 48" className="w-16 h-16 rounded-full mr-3" id="svg5" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <defs id="defs2" /> <g id="layer1" transform="translate(-170.00002,-449)"> <path d="m 184.70392,473.00002 c 0,-5.17422 4.19455,-9.36878 9.36878,-9.36878 5.17426,0 9.3688,4.19456 9.3688,9.36878 0,5.17424 -4.19454,9.3688 -9.3688,9.3688 -5.17423,0 -9.36878,-4.19456 -9.36878,-9.3688 z" id="path15077" style={{ fill: '#f2a50c', fillOpacity: 1, fillRule: 'evenodd', stroke: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '4.1', strokeOpacity: 1 }} /> <path d="m 194.07227,463.63086 c -5.17423,0 -9.36915,4.19493 -9.36915,9.36914 0,3.69473 2.14108,6.88889 5.24805,8.41406 5.40423,-1.26772 9.42969,-6.11538 9.42969,-11.90625 0,-1.71194 -0.35324,-3.34094 -0.98828,-4.82031 -1.29289,-0.67323 -2.76182,-1.05664 -4.32031,-1.05664 z" id="path73068" style={{ fill: '#fcca3d', fillOpacity: 1, fillRule: 'evenodd', stroke: 'none', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '4.1', strokeOpacity: 1 }} /> <path d="m 194.07227,465.74414 a 1.0055467,0.99447228 0 0 0 -1.00586,0.99415 v 1.15819 c -1.28997,0.4082 -2.25,1.57629 -2.25,2.97071 0,1.73866 1.49228,3.12696 3.25586,3.12696 0.72231,0 1.24414,0.52196 1.24414,1.13866 0,0.61669 -0.52183,1.13672 -1.24414,1.13672 -0.72232,0 -1.24414,-0.52003 -1.24414,-1.13672 a 1.0055467,0.99447228 0 0 0 -1.00586,-0.99414 1.0055467,0.99447228 0 0 0 -1.00586,0.99414 c 0,1.39442 0.96003,2.5625 2.25,2.9707 v 1.15821 a 1.0055467,0.99447228 0 0 0 1.00586,0.99414 1.0055467,0.99447228 0 0 0 1.00586,-0.99414 v -1.15821 c 1.28997,-0.4082 2.25,-1.57628 2.25,-2.9707 0,-1.73867 -1.49228,-3.12695 -3.25586,-3.12695 -0.72231,0 -1.24414,-0.522 -1.24414,-1.13867 0,-0.61669 0.52184,-1.13672 1.24414,-1.13672 0.7223,0 1.24414,0.52003 1.24414,1.13672 a 1.0055467,0.99447228 0 0 0 1.00586,0.99414 1.0055467,0.99447228 0 0 0 1.00586,-0.99414 c -10e-6,-1.39442 -0.96003,-2.56251 -2.25,-2.97071 v -1.15819 a 1.0055467,0.99447228 0 0 0 -1.00586,-0.99415 z" id="path15079" style={{ color: '#000000', fill: '#808b9b', fillOpacity: 1, fillRule: 'evenodd', stroke: 'none', strokeWidth: '0.999994', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '4.1', InkscapeStroke: 'none' }} /> <path d="m 180.33008,482.27148 a 1,1 0 0 0 -0.47852,0.19532 1,1 0 0 0 -0.19336,1.40039 c 1.40759,1.85811 3.20221,3.47191 5.34375,4.70898 6.88822,3.979 15.33147,2.88481 20.97266,-2.14062 a 1,1 0 0 0 0.0801,-1.41211 1,1 0 0 0 -1.41016,-0.0801 c -5.0098,4.46296 -12.50234,5.44814 -18.64062,1.90234 -1.9084,-1.10238 -3.50161,-2.53501 -4.75196,-4.18554 a 1,1 0 0 0 -0.92187,-0.38868 z" id="path72837" style={{ color: '#000000', fill: '#808b9b', fillOpacity: 1, fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '4.1' }} /> <path d="m 210.39453,466.64648 a 1,1 0 0 0 -0.51758,0.0312 1,1 0 0 0 -0.63281,1.26563 c 1.33613,4.00415 1.09033,8.50574 -1.00781,12.50391 l -0.60938,-4 a 1,1 0 0 0 -1.13867,-0.83789 1,1 0 0 0 -0.83789,1.13867 l 1.02344,6.72851 a 1.0001,1.0001 0 0 0 1.35351,0.78125 l 6.33594,-2.47656 a 1,1 0 0 0 0.56836,-1.29492 1,1 0 0 0 -1.29492,-0.56836 l -3.60156,1.4082 c 2.33001,-4.47582 2.60361,-9.53177 1.10742,-14.01562 a 1,1 0 0 0 -0.74805,-0.66407 z" id="path72835" style={{ color: '#000000', fill: '#808b9b', fillOpacity: 1, fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '4.1' }} /> <path d="m 180.33594,461.67578 a 1.0001,1.0001 0 0 0 -0.29102,0.0664 l -6.33594,2.47656 a 1,1 0 0 0 -0.56836,1.29492 1,1 0 0 0 1.29688,0.56836 l 3.60156,-1.4082 c -2.54236,4.88358 -2.63652,10.45653 -0.65625,15.22656 a 1,1 0 0 0 1.3086,0.54102 1,1 0 0 0 0.53906,-1.3086 c -1.76744,-4.25735 -1.6831,-9.21894 0.60547,-13.58008 l 0.60937,4 a 1,1 0 0 0 1.13867,0.83789 1,1 0 0 0 0.8379,-1.13867 l -1.02344,-6.72851 a 1.0001,1.0001 0 0 0 -1.0625,-0.84766 z" id="path72833" style={{ color: '#000000', fill: '#808b9b', fillOpacity: 1, fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '4.1' }} /> <path d="m 194.19727,455.00977 c -0.69674,-0.004 -1.39071,0.0316 -2.08008,0.10742 -3.67668,0.40444 -7.19895,1.93455 -10.01953,4.44726 a 1,1 0 0 0 -0.0801,1.41211 1,1 0 0 0 1.41211,0.0801 c 5.0098,-4.46296 12.50233,-5.44814 18.64062,-1.90234 2.19845,1.26993 3.97723,2.97852 5.29688,4.95312 a 1,1 0 0 0 1.38672,0.27539 1,1 0 0 0 0.27539,-1.38672 c -1.48521,-2.22232 -3.49196,-4.14718 -5.95899,-5.57226 -2.79833,-1.61647 -5.85386,-2.39553 -8.87304,-2.41406 z" id="path15875" style={{ color: '#000000', fill: '#808b9b', fillOpacity: 1, fillRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '4.1' }} /> </g> </g></svg>

          <div className="text-sm">
            <a href="#" className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">
              Username: {data.profile.username}
            </a>
            <p>Phone: {data.profile.phone}</p>
          </div>
        </div>
        <p className="mt-4 text-md text-blue-900">
          ksh {data.profile.current_amount}
        </p>
        <div className="flex"><span>Available Balance </span></div>
        <div className="flex"><span>{data.referral} Referrals </span></div>

      </div>

      <div className="overflow-x-auto">
        <div className="shadow-lg rounded-lg mb-4 mt-8">
          <div className="font-bold text-xl mb-2 text-center text-blue-500">My Products</div>
          <div className="w-full">
            <table className="text-base w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="sm:w-auto py-2 px-4 sm:px-6 text-left text-gray-600 font-medium uppercase">Date</th>
                  <th className="sm:w-auto py-2 px-4 sm:px-6 text-left text-gray-600 font-medium uppercase">Product id</th>
                  <th className="sm:w-auto py-2 px-4 sm:px-6 text-left text-gray-600 font-medium uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.investment.map((investment, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 sm:px-6 border-b border-gray-200 ">{investment.investment_date}</td>
                    <td className="py-2 px-4 sm:px-6 border-b border-gray-200 ">{investment.product_name}</td>
                    <td className="py-2 px-4 sm:px-6 border-b border-gray-200 ">
                      <span className={`py-1 px-2 rounded-full text-xs ${investment.status === 'done' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}>
                        {investment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="shadow-lg rounded-lg mb-4 mt-8">
          <div className="font-bold text-xl mb-2 text-center text-blue-500">Cash In</div>
          <div className="w-full">
            <table className="text-base w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="sm:w-auto py-2 px-4 sm:px-6 text-left text-gray-600 font-medium uppercase">Amount</th>
                  <th className="sm:w-auto py-2 px-4 sm:px-6 text-left text-gray-600 font-medium uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.deposite.map((deposit, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 sm:px-6 border-b border-gray-200 ">{deposit.amount}</td>

                    <td className="py-2 px-4 sm:px-6 border-b border-gray-200 ">
                      <span className={`py-1 px-2 rounded-full text-xs ${deposit.status === 'complete' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}>
                        {deposit.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="shadow-lg rounded-lg mb-4 mt-8">
          <div className="font-bold text-xl mb-2 text-center text-blue-500">Cash Out</div>
          <div className="w-full">
            <table className="text-base w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="sm:w-auto py-2 px-4 sm:px-6 text-left text-gray-600 font-medium uppercase">Amount</th>
                  <th className="sm:w-auto py-2 px-4 sm:px-6 text-left text-gray-600 font-medium uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.withdrawals.map((withdrawal, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 sm:px-6 border-b border-gray-200 ">{withdrawal.amount}</td>

                    <td className="py-2 px-4 sm:px-6 border-b border-gray-200 ">
                      <span className={`py-1 px-2 rounded-full text-xs ${withdrawal.status === 'complete' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}>
                        {withdrawal.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;
