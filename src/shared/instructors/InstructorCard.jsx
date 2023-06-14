import React, { useRef } from 'react';
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const InstructorCard = ({ instructor }) => {
  const { name, email, role } = instructor;
  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between w-full h-full border border-zinc-300 shadow-lg hover:shadow-md translate-z-60 overflow-hidden rounded">
        <figure>
          <img src="/instructor-i.jpg" alt="class-image" className="w-full" />
        </figure>
        <div className="pb-20 py-4">
          <div className="px-3">
            <h2 className="card-title">{name}</h2>
            <p>
              How to park your car at your garage? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Temporibus modi accusamus amet
              aspernatur.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between px-1 bg-zinc-200 py-2 items-center">
          <Link>
            <button
              onClick={openModal}
              className="btn btn-sm bg-black hover:bg-zinc-400 text-white p-1 px-3 text-xs rounded"
            >
              View details
            </button>
          </Link>
          <div className="flex gap-1">
            <FaGooglePlusSquare size={22} />
            <FaFacebookSquare size={22} />
            <FaTwitterSquare size={22} />
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h2 className="font-bold text-xl">{name}</h2>
          <span className="badge badge-sm bg-green-200">{role}</span>
          <p>Email: {email}</p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={closeModal} className="btn">
              Close
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default InstructorCard;
