import {BsSearch} from "react-icons/bs"

export default function MobileNavbar(props: React.HtmlHTMLAttributes<HTMLElement>) {
  const className = props.className || '';
  return (
    <div id={props.id} className={`${className} absolute md:hidden top-16 left-0 py-4 px-4 bg-[#ef5d58] h-screen w-screen items-center`}>
        <ul className="flex flex-col justify-evenly gap-4 text-white">
            <li className="">
              <div className="relative h-1/2 mt-3 text-black">
                  <input type="text" className="block w-full h-full rounded-md border-gray-300 p-2" placeholder="Search" />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <BsSearch size={20}/>
                  </div>
                  
              </div>
            </li>
            <li className="hover:text-gray-300">
                <a href="">Link 1</a>
                <hr />
            </li>
            <li className="hover:text-gray-300">
                <a href="">Link 2</a>
            </li>
        </ul>
        

        {/* Auth */}
        {/* <div className="">
            <BsPersonCircle size={30} color="#ffffff"/>
        </div> */}
    </div>
  )
}
