import React from 'react'
import Staly from './Home.module.css'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
const Home = () => {

  const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

  return (
    <>
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url('/imge/plane (1).webp')",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-sky-400">Discover Your Next Journey</h1>
      <p className="mb-5 font-light text-sky-400 ">
        Book domestic and international flights with the best prices,
        premium comfort, and trusted airlines.
      </p>
      <button className="btn bg-sky-400 hover:bg-sky-500 hover:scale-105 transition-all duration-300 text-white border-none px-8 w-64 rounded-full">Get Started</button>
    </div>
  </div>
</div>

{/* <!-- Card Group --> */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-24 py-20 bg-base-300">
  {/* <!-- Card --> */}
  <div className="flex flex-col flex-1 bg-base-100 shadow-md rounded-xl">
    <div className="flex justify-center pt-6">
      <i className="fa-solid fa-wand-magic-sparkles text-4xl text-sky-400 pt-8"></i>
    </div>
    <div className="p-4 flex-1 md:p-5 text-center">
      <h3 className="font-bold text-foreground p-5 text-4xl text-black">
        Tell Us Your Idea
      </h3>
      <p className="mt-3 text-muted-foreground-1 text-gray-500 pt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam esse quia sequi pariatur reiciendis quasi expedita architecto labore! Veniam totam facilis deserunt similique error itaque culpa doloribus maiores placeat!      </p>
    </div>
    <div className="p-4 border-t border-card-footer">
      <p className="text-xs text-muted-foreground-1">
        Last updated 5 mins ago
      </p>
    </div>
  </div>
  {/* <!-- End Group --> */}

  {/* <!-- Card --> */}
  <div className="flex flex-col flex-1 bg-base-100 shadow-md rounded-xl">
    <div className="flex justify-center pt-6">
      <i className="fa-solid fa-pen-ruler text-4xl text-sky-400 pt-8"></i>
    </div>
    <div className="p-4 flex-1 md:p-5 text-center">
      <h3 className="font-bold text-foreground p-5 text-4xl text-black">
        Design Your Project
      </h3>
      <p className="mt-3 text-muted-foreground-1 text-gray-500 pt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam esse quia sequi pariatur reiciendis quasi expedita architecto labore! Veniam totam facilis deserunt similique error itaque culpa doloribus maiores placeat!      </p>
    </div>
    <div className="p-4 border-t border-card-footer">
      <p className="text-xs text-muted-foreground-1">
        Last updated 5 mins ago
      </p>
    </div>
  </div>
  {/* <!-- End Group --> */}

  {/* <!-- Card --> */}
  <div className="flex flex-col flex-1 bg-base-100 shadow-md rounded-xl">
    <div className="flex justify-center pt-6">
      <i className="fa-solid fa-rocket text-4xl text-sky-400 pt-8"></i>
    </div>
    <div className="p-4 flex-1 md:p-5 text-center">
      <h3 className="font-bold text-foreground p-5 text-4xl text-black">
        Launch Your Project
      </h3>
      <p className="mt-3 text-muted-foreground-1 text-gray-500 pt-5">
        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
      </p>
    </div>
    <div className="p-4 border-t border-card-footer">
      <p className="text-xs text-muted-foreground-1">
        Last updated 5 mins ago
      </p>
    </div>
  </div>
  {/* <!-- End Group --> */}
</div>
{/* <!-- End Card Group --> */}

{/* Section Flights */}

  <div className="text-center pt-16">
      <h1 className="text-6xl font-extrabold flex justify-center pt-16 text-gray-300">FLIGHTS</h1>
      <p className="text-lg text-muted-foreground-1 text-center text-sky-400 -mt-6">
        Don't be busy, be productive.
      </p>
  </div>
    <section className="grid lg:grid-cols-2 gap-16 px-6 lg:px-24 py-20 items-center">
      {/* الجزء الشمال */}
      <div className="grid sm:grid-cols-2 gap-10">
        {/* card 1 */}
        <div className="flex gap-4">
          <i className="fa-solid fa-palette text-sky-400 text-3xl mt-2"></i>
          <div>
            <h3 className="font-bold text-2xl mb-2">Graphic Design</h3>
            <p className="text-gray-500 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatibus aperiam quisquam possimus temporibus doloremque exercitationem non expedita tempora iure. Cumque quidem itaque minus delectus odit suscipit vel, neque esse.
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="flex gap-4">
          <i className="fa-solid fa-object-group text-sky-400 text-3xl mt-2"></i>
          <div>
            <h3 className="font-bold text-2xl mb-2">Brand Identity</h3>
            <p className="text-gray-500 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatibus aperiam quisquam possimus temporibus doloremque exercitationem non expedita tempora iure. Cumque quidem itaque minus delectus odit suscipit vel, neque esse.
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="flex gap-4">
          <i className="fa-solid fa-gem text-sky-400 text-3xl mt-2"></i>
          <div>
            <h3 className="font-bold text-2xl mb-2">UI/UX Design</h3>
            <p className="text-gray-500 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatibus aperiam quisquam possimus temporibus doloremque exercitationem non expedita tempora iure. Cumque quidem itaque minus delectus odit suscipit vel, neque esse.
            </p>
          </div>
        </div>
        {/* card 4 */}
        <div className="flex gap-4">
          <i className="fa-solid fa-code text-sky-400 text-3xl mt-2"></i>
          <div>
            <h3 className="font-bold text-2xl mb-2">Web Development</h3>
            <p className="text-gray-500 leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptatibus aperiam quisquam possimus temporibus doloremque exercitationem non expedita tempora iure. Cumque quidem itaque minus delectus odit suscipit vel, neque esse.
            </p>
          </div>
        </div>
        <Link
          to="/flights"
          className="btn bg-sky-400 hover:bg-sky-500 hover:scale-105 transition-all duration-300 text-white border-none px-8 w-64 rounded-full"
        >
          Explore Flights
          <i className="fa-solid fa-arrow-right ml-2"></i>
        </Link>
      </div>
      {/* الجزء اليمين */}
      <div className="relative flex justify-center hidden lg:flex">
        {/* الخلفية  */}
        <div className="absolute right-0 top-[-50px] w-32 h-[600px] bg-slate-700 rounded-md"></div>
        {/* الصوره */}
        <img src="../../../imge/srv.webp" alt="srv.webp" className="relative left-24 w-80 h-[500px] object-cover rounded-md shadow-xl" />
      </div>

    </section>
    {/* End Section Flights */}

    {/* Start Section About */}
      <div className="text-center pt-16 bg-base-300">
      <h1 className="text-6xl font-extrabold flex justify-center pt-16 text-gray-300 bg-base-300">ABOUT</h1>
      <p className="text-lg text-muted-foreground-1 text-center text-sky-400 -mt-6">
        Less is more work.
      </p>

    <section className="grid gap-16 px-6 lg:px-24 py-20 items-center">
    <div className="bg-white-sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-sky-400">Deploy faster</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-sky-400">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
      <div className='flex justify-center mt-8'>
        <Link
          to="/about"
          className="btn bg-sky-400 hover:bg-sky-500 hover:scale-105 transition-all duration-300 text-white border-none px-8 w-64 rounded-full"
        >
          Explore About
          <i className="fa-solid fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </section>
      </div>
    {/* End Section About */}
    {/* Start Section */}
      <div className="text-center pt-16 ">
      <h1 className="text-6xl font-extrabold flex justify-center pt-16 text-gray-300 ">Why Fly With Us</h1>
      <p className="text-lg text-muted-foreground-1 text-center text-sky-400 -mt-3">
        Less is more work.
      </p>
      <div className="carousel w-full mt-10 ">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
    {/* End Section */}
    </>
  )
}

export default Home