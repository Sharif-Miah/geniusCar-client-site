import React from "react";
import logo from "../../../../assets/logo.svg";
import { Link, useLoaderData } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { MdContactPage } from "react-icons/md";
import { AiOutlinePlayCircle } from "react-icons/ai";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { _id, title, img, price } = useLoaderData();
  return (
    <div>
      <div className="my-10">
        <div className=" relative w-full ">
          <div className="img-gradient">
            <img src={img} className="w-full h-80 rounded-2xl" alt="" />
          </div>
          <div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4 ">
              <h1 className=" text-lg lg:text-4xl mt-48 ml-20 text-white font-bold">
                Service Details
              </h1>
            </div>
            <div className=" absolute flex justify-end  transform -translate-y-1/2 left-1/2 bottom-0">
              <p className="text-white bg-red-600 px-8 py-1 mt-[-34px] text-sm clip-path">
                Home/Service Details
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 ">
          <div className="card lg:card-side bg-base-100 ">
            <figure className="w-full lg:w-3/4 flex sm:mx-auto lg:flex-collumn">
              <img src={img} alt="Album" className="h-96" />
            </figure>
            <div className="card-body w-full lg:w-1/4 sm:mx-auto">
              <h2 className="text-2xl font-bold">Services</h2>
              <div>
                <div className="flex justify-between bg-red-600 py-3 px-2 rounded">
                  <p className="font-semibold text-white text-md">
                    Full Car Repair.
                  </p>
                  <button className="text-white text-2xl">
                    <FiArrowRight />
                  </button>
                </div>
                <div className="flex justify-between  py-3 px-2 rounded my-2">
                  <p className="font-semibold  text-md">Engine Repair</p>
                  <button className="text-red-500 text-2xl">
                    <FiArrowRight />
                  </button>
                </div>
                <div className="flex justify-between  py-3 px-2 rounded my-2">
                  <p className="font-semibold  text-md">Automatic Services</p>
                  <button className="text-red-500 text-2xl">
                    <FiArrowRight />
                  </button>
                </div>
                <div className="flex justify-between  py-3 px-2 rounded my-2">
                  <p className="font-semibold  text-md">Engine Oil Change</p>
                  <button className="text-red-500 text-2xl">
                    <FiArrowRight />
                  </button>
                </div>
                <div className="flex justify-between  py-3 px-2 rounded my-2">
                  <p className="font-semibold  text-md">Battery Charge</p>
                  <button className="text-red-500 text-2xl">
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className=" text-center lg:text-left text-4xl my-10 font-bold">Unique Car Engine Service</h1>
        <div className="card lg:card-side">
          <div className="w-full lg:w-3/4 sm:mx-auto">
            <p className="text-zinc-500 tracking-wider mx-6 leading-8 ">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered <br /> alteration in some form, by
              injected humour, or randomised words which don't look even <br />
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there <br /> isn't anything
              embarrassing hidden in the middle of text.
            </p>
            <p className="text-zinc-500 tracking-wider mx-6 leading-8 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered <br /> alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you
            </p>
          </div>
          <div className="card-body mt-10 lg:mt-0 w-full  lg:w-1/4 bg-black text-white rounded-lg">
            <h2 className="text-2xl font-bold">Download</h2>

            <div className="flex justify-between">
              <div className="flex">
                <MdContactPage className="text-2xl mt-2 mr-2" />
                <div>
                  <p className="font-semibold text-md">Our Brochure</p>
                  <p className="text-zinc-500 text-sm">Download</p>
                </div>
              </div>
              <button className="bg-red-500 text-xl px-2 rounded py-0 ml-18">
                <FiArrowRight />
              </button>
            </div>

            <div className="flex justify-between mt-3">
              <div className="flex">
                <MdContactPage className="text-2xl mt-2 mr-2" />
                <div>
                  <p className="font-semibold text-md">Company Details</p>
                  <p className="text-zinc-500 text-sm">Download</p>
                </div>
              </div>
              <button className="bg-red-500 text-xl px-2 rounded py-0 ml-18">
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 ">
          <div className="card lg:card-side bg-base-100">
            <div className="w-full lg:w-3/4 flex mx-auto lg:flex-collumn">
              <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
                  <div className="card w-96 border-t-2 border-red-500 bg-base-100 my-10 mr-28">
                    <div className="card-body">
                      <h2 className="card-title px-5">Instant Car Services</h2>
                      <p className="text-zinc-400 px-5 text-md">
                        It uses a dictionary of over 200 Latin words, combined
                        with a model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="card w-96 border-t-2 border-red-500 bg-base-100 my-10 mr-28">
                    <div className="card-body">
                      <h2 className="card-title px-5">Instant Car Services</h2>
                      <p className="text-zinc-400 px-5 text-md">
                        It uses a dictionary of over 200 Latin words, combined
                        with a model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="card w-96 border-t-2 border-red-500 bg-base-100 my-10 mr-28">
                    <div className="card-body">
                      <h2 className="card-title px-5">Instant Car Services</h2>
                      <p className="text-zinc-400 px-5 text-md">
                        It uses a dictionary of over 200 Latin words, combined
                        with a model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="card w-96 border-t-2 border-red-500 bg-base-100 my-10 mr-28">
                    <div className="card-body">
                      <h2 className="card-title px-5">Instant Car Services</h2>
                      <p className="text-zinc-400 px-5 text-md">
                        It uses a dictionary of over 200 Latin words, combined
                        with a model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-zinc-500 tracking-wider mx-6 leading-8">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <p className="text-zinc-500 tracking-wider mx-6 leading-8 mt-5">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered <br /> alteration
                    in some form, by injected humour, or randomised words which
                    don't look even slightly believable. If you
                  </p>
                </div>

                <div>
                  <h1 className="text-4xl text-center lg:text-left my-10 font-bold">
                    3 Simple Steps to Process
                  </h1>
                  <p className="text-zinc-500 tracking-wider mx-6 leading-8">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. There
                    are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered
                  </p>

                  <div className="my-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                      <div className="card w-96 bg-base-100">
                        <div className="mx-auto">
                          <span className="bg-red-500 text-white p-4 rounded-full font-bold">
                            01
                          </span>
                        </div>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title font-bold">Step One!</h2>
                          <p>
                            It uses a dictionary <br /> of over 200.
                          </p>
                        </div>
                      </div>
                      <div className="card w-96 bg-base-100">
                        <div className="mx-auto">
                          <span className="bg-red-500 text-white p-4 rounded-full font-bold">
                            02
                          </span>
                        </div>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title font-bold">Step Two!</h2>
                          <p>
                            It uses a dictionary <br /> of over 200.
                          </p>
                        </div>
                      </div>
                      <div className="card w-96 bg-base-100">
                        <div className="mx-auto">
                          <span className="bg-red-500 text-white p-4 rounded-full font-bold">
                            03
                          </span>
                        </div>
                        <div className="card-body items-center text-center">
                          <h2 className="card-title font-bold">Step Three!</h2>
                          <p>
                            It uses a dictionary <br /> of over 200.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-10 lg:mb-0 relative ">
                    <div className="">
                      <img
                        src={img}
                        className="w-full h-96 rounded-2xl"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="absolute flex justify-end transform -translate-y-1/2 left-1/3 top-1/3 ">
                        <h1 className=" text-lg lg:text-4xl mt-48 ml-20 text-white font-bold">
                          <AiOutlinePlayCircle className="text-red-500 text-6xl cursor-pointer" />
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body w-full  lg:w-1/4 sm:mx-auto bg-black text-white h-[500px] rounded-lg">
              <div className=" mx-auto">
                <img src={logo} width={75} alt="" className="text-white" />
              </div>
              <h4 className="text-center font-bold text-xl my-3">
                Need Help? We Are Here To Help You
              </h4>
              <div className="mx-auto bg-white px-7 pt-6 pb-12 rounded-lg ">
                <h4 className="font-bold text-xl text-black"><span className="text-red-500">Car Doctor</span> Special</h4>
                <p className="text-zinc-500 font-bold mt-1 ml-5">Save up to <span className="text-red-500">60% off</span></p>
              </div>
              <div className="mx-auto mt-[-35px]">
              <button className="btn bg-red-500 text-white border border-red-500 hover:border-red-500 hover:bg-red-500">Get A Quote</button>
              </div>
              <h1 className="font-bold mt-5 text-3xl">Price: ${price}</h1>
              <div>
              <Link to={`/chackout/${_id}`}>
              <button className="btn bg-red-500 w-full text-white border border-red-500 hover:border-red-500 hover:bg-red-500 mt-3">Proceed Checkout</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
