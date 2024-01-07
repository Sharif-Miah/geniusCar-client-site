import React from 'react';

const Contact = () => {

    const bookingHanndle = (e) => {
        e.preventDefault();
    }


    return (
        <div className="mt-10">
      <div className=" relative w-full ">
        <div className="img-gradient">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAjEAS2zJ_0rhf7IZP0TAUwpPSZjfU_bXK1w&usqp=CAU" className="w-full h-80 rounded-2xl" alt="" />
        </div>
        <div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4 ">
            <h1 className=" text-lg lg:text-4xl mt-48 ml-20 text-white font-bold">
              Contact
            </h1>
          </div>
          <div className=" absolute flex justify-end  transform -translate-y-1/2 left-1/2 bottom-0">
            <p className="text-white bg-red-600 px-8 py-1 mt-[-34px] text-sm clip-path">
              Home/Contact
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={bookingHanndle} className="my-10 border-4 border-zinc-200 px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered input-md w-full mx-6"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered input-md w-full mx-6"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered input-md w-full mx-6"
            
          />
          <input
            type="number"
            name="phone"
            placeholder="Your phone"
            className="input input-bordered input-md w-full mx-6"
          />

          <input
            type="date"
            name="date"
            placeholder="Your phone"
            className="input input-bordered input-md w-full mx-6"
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            defaultValue={"$"}
            className="input input-bordered input-md w-full mx-6"
          />
        </div>
        <div className="flex mt-6"></div>
        <textarea
          name="massage"
          className="textarea textarea-bordered h-48 w-full ml-3 mt-6 "
          placeholder="Your Massage"
        ></textarea>

        <input
          type="submit"
          value="Contact Us"
          className="btn bg-red-500 w-full text-white border  border-red-500 hover:border-red-500 hover:bg-red-500 mt-3"
        />
      </form>
    </div>
    );
};

export default Contact;