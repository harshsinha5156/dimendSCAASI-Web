import React from "react";

const DsCarePlan = () => {
  return (
    <>
      {/* Desktop Version */}
      <section
        className="hidden lg:block relative w-full h-[850px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/dscareplan1.webp')" }}
      >
        {/* Overlay box center me */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white shadow-lg p-8 max-w-md text-center ">
            <h2 className="text-3xl font-['Arapey'] mb-4">DS CARE PLAN</h2>
            <p className="text-lg mb-2">STARTING AT</p>
            <p className="text-4xl  mb-2">
              $5<span className="text-lg font-normal">/MONTH</span>
            </p>

            {/* Coffee Line with italic + yellow underline */}
            <p className="mb-2">THAT'S LESS THAN A CUP OF COFFEE!</p>
            <div className="w-60 h-[3px] bg-yellow-400 mx-auto mb-4"></div>

            {/* Description */}
            <p className="text-xs text-gray-600 mb-6">
              Dimend SCAASI jewelry includes a lifetime warranty. Add <br /> an
              extended plan for extra protection.
            </p>

            {/* Bigger Button */}
            <button
              className="text-white w-[240px] py-2 transition text-sm"
              style={{ backgroundColor: "#4d152d" }}
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section
        className="block lg:hidden relative w-full h-[900px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/dscaremobile.webp')" }}
      >
       <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
  {/* White Box */}
  <div className="bg-white shadow-lg p-8 w-full max-w-xs text-center  mb-4">
    <h2 className="text-2xl font-['Arapey'] mb-3">DS CARE PLAN</h2>
    <p className="text-base mb-1">STARTING AT</p>
    <p className="text-2xl mb-2">
      $5<span className="text-sm font-normal">/MONTH</span>
    </p>

    {/* Coffee Line with yellow underline */}
    <p className="mb-1  text-xs font-medium">
      THAT'S LESS THAN A CUP OF COFFEE!
    </p>
    <div className="w-45 h-[3px] bg-yellow-400 mx-auto mb-3"></div>

    {/* Description */}
    <p className="text-xs text-gray-600 mb-2 leading-relaxed">
      Dimend SCAASI jewelry includes a lifetime warranty. 
      Add an extended plan for extra protection.
    </p>
  </div>

  {/* Button outside box */}
  <button
    className="text-white w-[320px] py-2 transition text-sm"
    style={{ backgroundColor: "#4d152d" }}
  >
    LEARN MORE
  </button>
</div>

      </section>
    </>
  );
};

export default DsCarePlan;
