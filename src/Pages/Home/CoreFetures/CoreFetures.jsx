import React from "react";
import img1 from '../../../assets/icons/group.svg'
import img2 from '../../../assets/icons/person.svg'
import img3 from '../../../assets/icons/Wrench.svg'

const CoreFetures = () => {
  return (
      <div className="my-12">
          <div className="mb-12">
            <h4 className="text-center text-red-500 text-md font-bold">Core Features</h4>
            <h1 className="text-center text-5xl font-bold mb-5">
              Why chose us
            </h1>
            <p className=" text-zinc-500 text-center">
              the majority have suffered alteration in some form, by injected
              humour, or randomised
            </p>
            <p className=" text-zinc-500 text-center">
              words which don't look even slightly believable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <div className="mx-auto">
                <img src={img1} alt="" className="w-16"/>
                <h4 className="font-bold text-sm">Expert Team</h4>
            </div>
            <div className="mx-auto">
                <img src={img2} alt="" className="w-10"/>
                <h4 className="font-bold text-sm">Expert Team</h4>
            </div>
            <div className="mx-auto">
                <img src={img3} alt="" className="w-12"/>
                <h4 className="font-bold text-sm">Expert Team</h4>
            </div>
            <div className="mx-auto">
                <img src={img1} alt="" className="w-16"/>
                <h4 className="font-bold text-sm">Expert Team</h4>
            </div>
            <div className="mx-auto">
                <img src={img2} alt="" className="w-10"/>
                <h4 className="font-bold text-sm">Expert Team</h4>
            </div>
            <div className="mx-auto">
                <img src={img3} alt="" className="w-12"/>
                <h4 className="font-bold text-sm">Expert Team</h4>
            </div>
          </div>


        
      </div>
    
  );
};

export default CoreFetures;
