import { AiOutlineMenu, AiOutlineCaretDown, AiOutlineQuestionCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';
import { GrEdit } from 'react-icons/gr';
import { BsCircleHalf } from 'react-icons/bs';
import { FcSettings } from 'react-icons/fc';
import { TbWorld } from 'react-icons/tb';
import { BiSolidEditAlt } from 'react-icons/bi';
import { useState } from 'react';
import Modal from './Modal';
const LeftSidebar = ({ formData, setFormData }) => {
    // Modal State
    let [isOpen, setIsOpen] = useState(false)

    return (
        <div className='leftSidebar'>
            {/* Modal */}
            <Modal formData={formData} setFormData={setFormData} setIsOpen={setIsOpen} isOpen={isOpen} />
            {/* Left Sidebar Content */}
            {/* Heading */}
            <div className="heading flex items-center justify-between bg-black text-white p-2">
                <AiOutlineMenu className='cursor-pointer' />
                <p>Edit Heading</p>
                <PiDotsNineBold className='cursor-pointer' />
            </div>
            {/* Heading Actions */}
            <div className='leftSidebarActions'>
                {/* Actions Category */}
                <div className="mainActions">
                    <GrEdit className='actionIcon' />
                    <BsCircleHalf className='actionIcon' />
                    <FcSettings className='actionIcon' />
                </div>
                {/* Title Actions */}
                <div className='titleActions'>
                    <div className='titleActionsHeading'>
                        <AiOutlineCaretDown />
                        <h4 className='ms-1'>Title</h4>
                    </div>
                    {/* Text Color */}
                    <div className="spaceBetween actionGap">
                        <p>Text Color</p>
                        <div className='textColorBox flex'>
                            <div className=''>
                                <TbWorld className='textColorWorldIcon sizedIcon' />
                            </div>
                            <div className='colorBox sizedIcon'>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    {/* Typography */}
                    <div className="typography spaceBetween actionGap">
                        <p>Typography</p>
                        <div className='flex'>
                            <div>
                                <TbWorld className='typographyWorldIcon sizedIcon' />
                            </div>
                            {/* Modal Opening Button */}
                            <BiSolidEditAlt onClick={() => setIsOpen(!isOpen)} className='typographyEditIcon sizedIcon' />
                        </div>
                    </div>
                    {/* Text Stroke */}
                    <div className='textStroke spaceBetween actionGap'>
                        <p>Text Stroke</p>
                        <BiSolidEditAlt className='sizedIcon' />
                    </div>
                    {/* Text Shadow */}
                    <div className='textShadow spaceBetween actionGap'>
                        <p>Text Shadow</p>
                        <BiSolidEditAlt className='sizedIcon' />
                    </div>
                    {/* Blend Mode */}
                    <div className="blendMode spaceBetween">
                        <p>Blend Mode</p>
                        <select className='blendModeDropdown selectIconStyled' name="" id="">
                            <option value="">Normal</option>
                            <option value="">Hard</option>
                        </select>
                    </div>
                    {/* Need Help Button */}
                    <div className='needHelp'>
                        <p className='me-1 cursor-pointer'>Need Help</p>
                        <AiOutlineQuestionCircle />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;