import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import '../utils/range'

import { GrRotateLeft } from 'react-icons/gr';
import { BiPlus } from 'react-icons/bi';
import ModalActions from './ModalActions';

const Modal = ({ isOpen, setIsOpen, formData, setFormData }) => {

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto mt-[10.5rem]">
                        <div className="w-[21.7%] min-w-[270px] p-2 ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="dialogPanel rounded-sm transform overflow-hidden bg-white text-left transition-all">
                                    {/* Heading */}
                                    <Dialog.Title
                                        as="h3"
                                        className="spaceBetween text-lg font-bold leading-6 text-gray-900 pb-3 p-2 shadow-md mb-5"
                                    >
                                        Typography
                                        <div className='flex'>
                                            <GrRotateLeft className='sizedIcon shadow-md me-1' />
                                            <BiPlus className='sizedIcon shadow-md' />
                                        </div>
                                    </Dialog.Title>
                                    {/* Body */}
                                    <div className="p-2">
                                        <ModalActions formData={formData} setFormData={setFormData} />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Modal;