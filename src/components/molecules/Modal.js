import React, { useState } from 'react'

const Modal = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
            <button
        className="bg-blue-500 text-white active:bg-blue-500 
      font-bold p-2 rounded-sm shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
        onClick={() => setShowModal(true)}
      >
      {textButton}
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm">
                        <div className="relative w-auto mx-auto w-6xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-xl font=semibold">
                                        {title}
                                    </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                                        <span className="text-black">x</span>
                                    </button>
                                </div>
                <div className="relative p-6 flex-auto">
                 {children}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
        </>
  )
};

export default Modal