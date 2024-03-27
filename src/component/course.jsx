// CourseContent.js
import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
const CourseContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


const markdownText = `
# Markdown Example Content

This is a simple Markdown example that demonstrates various formatting features.

## Code Blocks

You can include code blocks in Markdown using backticks (\`). Here's an example of a code block in JavaScript:

~~~javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("World");
~~~

## Links

You can include links in Markdown using the following syntax:

[OpenAI](https://www.openai.com) - Visit OpenAI's website.

## Inline Code

You can also include inline code using single backticks (\`).

For example, to highlight a variable *x*, you can write:

\`\`\`
The value of \`x\` is 10.
\`\`\`

## Lists

Markdown supports both ordered and unordered lists. Here's an example of each:

1. First item
2. Second item
3. Third item

- Apple
- Banana
- Orange

## Blockquotes

You can create blockquotes by starting a line with a greater than symbol (>).

> This is a blockquote. It can span multiple lines and is often used to highlight important information.

## Images

You can include images in Markdown using the following syntax:

![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/208px-Markdown-mark.svg.png)

## Horizontal Rule

You can create a horizontal rule using three or more dashes (---).

---

This concludes the Markdown example content. Enjoy writing in Markdown!
`;



  // Function to check if the device screen width is less than 768px
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Initially check if the device is mobile or not
    checkIsMobile();
    // Event listener to check if the device is resized
    window.addEventListener('resize', checkIsMobile);
    // Cleanup the event listener when component is unmounted
    
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div className="relative min-h-screen bg-gray-100 pb-20">


      {/* Sidebar component */}
      <div className={`fixed top-16 left-0 h-full w-60 bg-gray-900 shadow-lg z-50 transform transition-transform ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}`}>
        <div className="p-4 text-white">
          {/* Your sidebar content goes here */}
          <h1 className="text-lg font-semibold">Sidebar</h1>
          <ul className="mt-4">
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            {/* Add more links as needed */}
          </ul>
        </div>
        {/* Close button */}
        {isMobile && (
          <button onClick={toggleSidebar} className=" test absolute top-0 right-0 m-4 text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      {/* Main content */}
      <div className={`md:ml-64 ${isMobile ? 'ml-0':'ml-64'}`}>
        {/* Your main content goes here */}
        <div className='flex items-center bg-white p-4'>
        <button
                onClick={toggleSidebar}
                className={`text-gray-600 hover:text-gray-900 px-4 py-2 text-xl font-semibold ${isMobile ? 'block md:hidden' : 'hidden'}`}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
        <h1 className='mx-auto' >Main Content for aspiring programmers</h1>
        </div>
        <div className='mx-auto p-4' >
        <Markdown>{markdownText}</Markdown>
        </div>
      </div>
     
     
    </div>
  );
};

export default CourseContent;