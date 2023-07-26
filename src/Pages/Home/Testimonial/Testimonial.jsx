import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import quoteImg1 from "../../../assets/images/quoteImg/Ellipse 2 (1).jpg";
import quoteImg2 from "../../../assets/images/quoteImg/Ellipse 2.jpg";

const Testimonial = () => {
  return (
    <div className="mt-24">
      <div>
        <div>
          <h4 className="text-center text-red-500 text-md font-bold">
            Testimonial
          </h4>
          <h1 className="text-center text-5xl font-bold mb-5">
            What Customer Says
          </h1>
          <p className=" text-zinc-500 text-center">
            the majority have suffered alteration in some form, by injected
            humour, or randomised
          </p>
          <p className=" text-zinc-500 text-center">
            words which don't look even slightly believable.
          </p>
        </div>
      </div>

      {/* testimonial 1  */}

      <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src={quoteImg1}
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Leroy Jenkins</h4>
                <span className="text-xs dark:text-gray-400">Businessman</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-500">
              <FaQuoteRight className="text-red-200 text-5xl" />
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm text-gray-400">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <p className="mt-3">
              by injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <div className="flex justify-start ">
              <AiTwotoneStar className="text-amber-500" />
              <AiTwotoneStar className="text-amber-500" />
              <AiTwotoneStar className="text-amber-500" />
              <AiTwotoneStar className="text-amber-500" />
              <AiTwotoneStar className="text-amber-500" />
            </div>
          </div>
        </div>

        {/* testimonial 2 */}

        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src={quoteImg2}
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Leroy Jenkins</h4>
                <span className="text-xs dark:text-gray-400">Businessman</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-500">
              <FaQuoteRight className="text-red-200 text-5xl" />
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm text-gray-400">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <p className="mt-3">
              by injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <div className="flex justify-start ">
              <AiTwotoneStar className="text-amber-500" />
              <AiTwotoneStar className="text-amber-500" />
              <AiTwotoneStar className="text-amber-500" />
              <AiTwotoneStar className="text-amber-500" />
              <AiTwotoneStar className="text-amber-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
