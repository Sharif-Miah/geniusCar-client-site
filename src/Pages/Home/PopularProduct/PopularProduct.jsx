import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import img1 from "../../../assets/images/products/1.png";
import img2 from "../../../assets/images/products/2.png";
import img3 from "../../../assets/images/products/3.png";
import img4 from "../../../assets/images/products/4.png";
import img5 from "../../../assets/images/products/5.png";
import img6 from "../../../assets/images/products/6.png";

const PopularProduct = () => {
  return (
    <div>
      <div>
        <div>
          <h4 className="text-center text-red-500 text-md font-bold my-3">
            Popular Products
          </h4>
          <h1 className="text-center text-5xl font-bold mb-5">
            Browse Our Products
          </h1>
          <p className=" text-zinc-500 text-center">
            the majority have suffered alteration in some form, by injected
            humour, or randomised
          </p>
          <p className=" text-zinc-500 text-center mb-16">
            words which don't look even slightly believable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="card card-compact w-96 bg-base-100  align-middle">
            <div className="mx-auto">
              <img src={img6} className="w-20" alt="Shoes" />
            </div>
            <div className="card-body text-center">
              <div className="flex justify-center">
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
              </div>
              <h2 className="font-bold text-xl text-center">Car Engine Plug</h2>
              <p className="text-lg text-red-500 font-semibold">
                Price: $20.00
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card card-compact w-96 bg-base-100  align-middle">
            <div className="mx-auto">
              <img src={img3} className="w-20" alt="Shoes" />
            </div>
            <div className="card-body text-center">
              <div className="flex justify-center">
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
              </div>
              <h2 className="font-bold text-xl text-center">Car Engine Plug</h2>
              <p className="text-lg text-red-500 font-semibold">
                Price: $20.00
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card card-compact w-96 bg-base-100  align-middle">
            <div className="mx-auto">
              <img src={img1} className="w-20" alt="Shoes" />
            </div>
            <div className="card-body text-center">
              <div className="flex justify-center">
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
              </div>
              <h2 className="font-bold text-xl text-center">Car Engine Plug</h2>
              <p className="text-lg text-red-500 font-semibold">
                Price: $20.00
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card card-compact w-96 bg-base-100  align-middle">
            <div className="mx-auto">
              <img src={img2} className="w-20" alt="Shoes" />
            </div>
            <div className="card-body text-center">
              <div className="flex justify-center">
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
              </div>
              <h2 className="font-bold text-xl text-center">Car Engine Plug</h2>
              <p className="text-lg text-red-500 font-semibold">
                Price: $20.00
              </p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="card card-compact w-96 bg-base-100  align-middle">
            <div className="mx-auto">
              <img src={img5} className="w-20" alt="Shoes" />
            </div>
            <div className="card-body text-center">
              <div className="flex justify-center">
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
              </div>
              <h2 className="font-bold text-xl text-center">Car Engine Plug</h2>
              <p className="text-lg text-red-500 font-semibold">
                Price: $20.00
              </p>
            </div>
          </div>
          {/* Card 6 */}
          <div className="card card-compact w-96 bg-base-100  align-middle mb-16">
            <div className="mx-auto">
              <img src={img4} className="w-20" alt="Shoes" />
            </div>
            <div className="card-body text-center">
              <div className="flex justify-center">
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
                <AiTwotoneStar className="text-amber-500" />
              </div>
              <h2 className="font-bold text-xl text-center">Car Engine Plug</h2>
              <p className="text-lg text-red-500 font-semibold">
                Price: $20.00
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-24">
        <button className="btn btn-outline hover:bg-red-500 hover:text-white text-red-500 hover:border-red-500 border-red-500">
          More Products
        </button>
      </div>
      </div>
    </div>
  );
};

export default PopularProduct;
