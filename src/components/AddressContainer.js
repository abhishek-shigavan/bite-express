import { useState } from "react";

const AddressContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [addressDetails, setAddressDetails] = useState({});

  return (
    <div className="flex flex-col w-6/12 bg-white mx-auto mt-10 p-6">
      <div className="flex justify-between items-center">
        <span>Address</span>
        <button
          className="border border-[#686B78] rounded-lg px-3 py-1"
          onClick={() => setOpenModal(true)}
        >
          Add
        </button>
      </div>
      <div
        className={
          openModal
            ? "flex justify-center items-center fixed z-[1] w-full h-full overflow-auto bg-[rgba(66,66,66,0.5)] top-0 left-0"
            : "hidden"
        }
        onClick={() => setOpenModal(false)}
      >
        <div
          className="flex flex-col bg-white opacity-100 rounded-lg w-6/12 p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="self-end">
            <button
              className="border border-[#686B78] px-3 py-1"
              onClick={() => setOpenModal(false)}
            >
              Close
            </button>
          </div>
          <div className="py-3">
            <input
              value={addressDetails.apartment}
              placeholder="Flat No / Apartment Name"
              onChange={(e) => {
                setAddressDetails({
                  ...addressDetails,
                  apartment: e.target.value,
                });
              }}
              className="border-b w-6/12 mr-5"
            />
            <input
              value={addressDetails.landmark}
              placeholder="Landmark"
              className="border-b w-4/12"
              onChange={(e) => {
                setAddressDetails({
                  ...addressDetails,
                  landmark: e.target.value,
                });
              }}
            />
          </div>
          <div className="py-3">
            <input
              value={addressDetails.area}
              placeholder="Street / Area Name"
              className="border-b"
              onChange={(e) => {
                console.log(e)
                setAddressDetails({
                  ...addressDetails,
                  area: e.target.value,
                });
              }}
            />
          </div>          
          <div className="flex justify-between">
            <button
              onClick={() => setAddressDetails({ ...addressDetails, type: "home" })}
            >
              Home
            </button>
            <button
              onClick={() => setAddressDetails({ ...addressDetails, type: "work" })}
            >
              Work
            </button>
            <button
              onClick={() => setAddressDetails({ ...addressDetails, type: "other" })}
            >
              Other
            </button>
          </div>
          <button className=""
          type="submit" 
          onClick={() => {
            console.log(addressDetails)
            setOpenModal(false)
            setAddressDetails({apartment: "", landmark: "", area: "", type: ""})
            }}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddressContainer;
