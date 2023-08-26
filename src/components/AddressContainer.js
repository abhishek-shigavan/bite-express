import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddressDetails, removeAddressDetails, updateAddressDetails } from "../utils/store/userSlice";

const AddressContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [enableUpdate, setEnableUpdate] = useState({addressId: 0, visibility: false});
  const [addressDetails, setAddressDetails] = useState({});
  const userAddress = useSelector((store) => store.user.addressDetails);
  const dispatch = useDispatch();

  const handleEditAddress = (index, item) => {
    setEnableUpdate({addressId: index, visibility: true});
    setAddressDetails(item);
    setOpenModal(true);
  };

  const handleAddressDetails = (action = "none") => {
    if (action === "save") {
      dispatch(addAddressDetails(addressDetails));
    } else if (action === "update") {
      dispatch(updateAddressDetails({index: enableUpdate.addressId, item: addressDetails}))
    }
    if (enableUpdate.visibility) setEnableUpdate({addressId: 0, visibility: false})
    setOpenModal(false);
    setAddressDetails({ apartment: "", landmark: "", area: "", type: "" });
  };

  return (
    <div className="flex flex-col w-6/12 bg-white mx-auto my-10 p-6">
      <div className="flex justify-between items-center">
        <span>Address</span>
        <button
          className="border border-[#686B78] rounded-lg px-3 py-1"
          onClick={() => setOpenModal(true)}
        >
          Add
        </button>
      </div>

      {userAddress.map((item, index) => (
        <div key={index} className="flex border rounded-lg p-4 my-4">
          <div className="flex flex-col w-8/12">
            <span>{item.type}</span>
            <span>{item.apartment}</span>
            <span>{item.landmark}</span>
            <span>{item.area}</span>
          </div>
          <div className="flex justify-center w-4/12">
            <div>
              <button
                onClick={() => handleEditAddress(index, item)}
                className="border rounded-lg px-3 py-1 mr-4"
              >
                Edit
              </button>
            </div>
            <div>
              <button
                onClick={() => dispatch(removeAddressDetails(index))}
                className="border rounded-lg px-3 py-1"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      <div
        className={
          openModal
            ? "flex justify-center items-center fixed z-[1] w-full h-full overflow-auto bg-[rgba(66,66,66,0.5)] top-0 left-0"
            : "hidden"
        }
        onClick={() => handleAddressDetails()}
      >
        <div
          className="flex flex-col bg-white opacity-100 rounded-lg w-6/12 p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="self-end">
            <button
              className="border border-[#686B78] px-3 py-1 rounded-lg"
              onClick={() => handleAddressDetails()}
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
                setAddressDetails({
                  ...addressDetails,
                  area: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex justify-between py-3">
            <button
              className="border border-[#686B78] rounded-lg px-3 py-2"
              onClick={() =>
                setAddressDetails({ ...addressDetails, type: "Home" })
              }
            >
              Home
            </button>
            <button
              className="border border-[#686B78] rounded-lg px-3 py-2"
              onClick={() =>
                setAddressDetails({ ...addressDetails, type: "Work" })
              }
            >
              Work
            </button>
            <button
              className="border border-[#686B78] rounded-lg px-3 py-2"
              onClick={() =>
                setAddressDetails({ ...addressDetails, type: "Other" })
              }
            >
              Other
            </button>
          </div>
          <div>
            {enableUpdate.visibility ? (
              <button className="border rounded-lg px-3 py-2" onClick={() => handleAddressDetails("update")}>Update</button>
            ) : (
              <button
                className="border border-[#686B78] rounded-lg px-3 py-2"
                onClick={() => handleAddressDetails("save")}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressContainer;
