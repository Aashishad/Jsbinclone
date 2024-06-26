
import { Button } from "@material-tailwind/react";

const Header = () => {

  // const logo = '\Images\jsbin_logo.png'

  return (


<div >
      
     

<nav class="bg-white dark:bg-gray-300 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo"/>
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Jsbin-Clone</span>
  </a>
  <div class="flex gap-4 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">

            <Button color="yellow" >Login or Register</Button>
            <Button>Blog</Button>
            <Button>Help</Button>
    
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-300 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">HTML</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">CSS</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">JavaScript</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Output</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

      
    </div>
  )
}

export default Header;
