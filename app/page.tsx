import Navbar from '@/components/nav/navbar'
import BookCard from '@/components/partials/bookCard'
import Footer from '@/components/partials/footer'
import {BsSearch} from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <Navbar/>
      
      <section className='mt-10'>
        <div className='text-center text-4xl font-bold my-8'>
          <h1>Our Best Books</h1>
        </div>
        <div className='flex flex-wrap gap-4 justify-evenly my-5'>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
        </div>
      </section>

      <section className='flex justify-center my-20'>
        <div className='bg-slate-100 p-32 w-[80%] border rounded-3xl'>
          <div className='text-center text-4xl font-bold my-8'>
            <h1>Find Your Book</h1>
          </div>
          <div className='flex justify-center'>
            <div className="hidden md:block relative w-1/2 mt-3">
                <input type="text" className="block w-full h-full text-xl rounded-md border-gray-300 p-5" placeholder="Search" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <BsSearch size={20}/>
                </div>
            </div>
          </div>
        </div>
        
      </section>


      <Footer/>
    
    </>
  )
}
