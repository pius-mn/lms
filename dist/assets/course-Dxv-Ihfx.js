import{r as n,j as e}from"./index-DsreSAu8.js";function c(){return n.useEffect(()=>{const t=document.getElementById("sidebar"),a=document.getElementById("open-sidebar"),l=s=>{s.stopPropagation(),t.classList.toggle("-translate-x-full")},r=s=>{const i=s.target.className;typeof i=="string"&&i.indexOf("sidebar")===-1&&t.classList.add("-translate-x-full")};return a.addEventListener("click",l),document.addEventListener("click",r),()=>{a.removeEventListener("click",l),document.removeEventListener("click",r)}},[]),e.jsx("div",{className:"bg-gray-100",children:e.jsxs("div",{className:"h-screen flex overflow-hidden bg-gray-200",children:[e.jsx("div",{className:"absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300",id:"sidebar",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h1",{className:"text-2xl font-semibold",children:"Sidebar"}),e.jsxs("ul",{className:"mt-4",children:[e.jsx("li",{className:"mb-2",children:e.jsx("a",{href:"#",className:"block hover:text-indigo-400",children:"Home"})}),e.jsx("li",{className:"mb-2",children:e.jsx("a",{href:"#",className:"block hover:text-indigo-400",children:"About"})}),e.jsx("li",{className:"mb-2",children:e.jsx("a",{href:"#",className:"block hover:text-indigo-400",children:"Services"})}),e.jsx("li",{className:"mb-2",children:e.jsx("a",{href:"#",className:"block hover:text-indigo-400",children:"Contact"})})]})]})}),e.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[e.jsx("div",{className:"bg-white shadow",children:e.jsx("div",{className:"container mx-auto",children:e.jsxs("div",{className:"flex justify-between items-center py-4 px-2",children:[e.jsx("h1",{className:"text-xl font-semibold",children:"Animated Drawer"}),e.jsx("button",{className:"text-gray-500 hover:text-gray-600",id:"open-sidebar",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})]})})}),e.jsxs("div",{className:"flex-1 overflow-auto p-4",children:[e.jsx("h1",{className:"text-2xl font-semibold",children:"Welcome to our website"}),e.jsx("p",{children:"... Content goes here ..."})]})]})]})})}export{c as default};
