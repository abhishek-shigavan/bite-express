import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAddressDetails } from "../utils/store/userSlice";
import AddressModal from "./AddressModal";

const AddressContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [enableUpdate, setEnableUpdate] = useState({addressId: 0, visibility: false});
  const [existingAddress, setExistingAddress] = useState({});
  const userAddress = useSelector((store) => store.user.addressDetails);
  const dispatch = useDispatch();

  const handleEditAddress = (index, item) => {
    setEnableUpdate({addressId: index, visibility: true});
    setExistingAddress(item);
    setOpenModal(true);
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
      <AddressModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        existingAddress={existingAddress}
        setExistingAddress={setExistingAddress}
        enableUpdate={enableUpdate}
        setEnableUpdate={setEnableUpdate}
      />
    </div>
  );
};

export default AddressContainer;
