import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
const Porfolio = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-white dark:bg-slate-800 min-h-screen  snap-mandatory snap-y scroll-smooth snap-center pl-60 pr-60 ">
        <h1 className="text-slate-900 dark:text-white text-4xl  pt-4">
          --Portfolio
        </h1>
        <h2 className=" text-slate-900 dark:text-white racking-wider  text-3xl border-2 border-white my-20 py-4 px-4 rounded-lg">
          UX Design with case Study , UI Designs
        </h2>

        <div>
          <div className="bg-zinc-100 dark:bg-gray-950 card lg:card-side  shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-slate-500 dark:text-white ">
                New album is released!
              </h2>
              <p className="text-slate-500 dark:text-white">
                Click the button to listen on Spotiwhy app.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Case Study</button>
              </div>
            </div>
          </div>
          <h2 className=" text-slate-900 dark:text-white tracking-wider  text-3xl border-2 border-white my-20 py-4 px-4 rounded-lg">
            Designed with figma and developed with react and tailwind CSS
          </h2>

          <div className="flex justify-evenly">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className=" bg-zinc-100 dark:bg-gray-950 card-body ">
                <h2 className=" text-slate-900 dark:text-white card-title">
                  Shoes!
                </h2>
                <p className="text-slate-500 dark:text-white">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions justify-end">
                  <button className=" text-slate-900 dark:text-white btn btn-primary">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className=" bg-zinc-100 dark:bg-gray-950 card-body">
                <h2 className=" text-slate-900 dark:text-white card-title">
                  Shoes!
                </h2>
                <p className="text-slate-500 dark:text-white">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions justify-end">
                  <button className=" text-slate-900 dark:text-white btn btn-primary">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Porfolio;
