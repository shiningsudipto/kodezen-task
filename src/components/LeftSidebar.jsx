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

    let [isOpen, setIsOpen] = useState(false)

    return (
        <div className='leftSidebar'>
            <Modal formData={formData} setFormData={setFormData} setIsOpen={setIsOpen} isOpen={isOpen} />
            <div className="heading flex items-center justify-between bg-black text-white p-2">
                <AiOutlineMenu className='cursor-pointer' />
                <p>Edit Heading</p>
                <PiDotsNineBold className='cursor-pointer' />
            </div>
            <div className='leftSidebarActions'>
                <div className="mainActions">
                    <GrEdit className='actionIcon' />
                    <BsCircleHalf className='actionIcon' />
                    <FcSettings className='actionIcon' />
                </div>
                <div className='titleActions'>
                    <div className='titleActionsHeading'>
                        <AiOutlineCaretDown />
                        <h4 className='ms-1'>Title</h4>
                    </div>
                    <div className="textColor actionGap">
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
                    <div className="typography spaceBetween actionGap">
                        <p>Typography</p>
                        <div className='flex'>
                            <div>
                                <TbWorld className='typographyWorldIcon sizedIcon' />
                            </div>
                            <BiSolidEditAlt onClick={() => setIsOpen(!isOpen)} className='typographyEditIcon sizedIcon' />
                        </div>
                    </div>
                    <div className='textStroke spaceBetween actionGap'>
                        <p>Text Stroke</p>
                        <BiSolidEditAlt className='sizedIcon' />
                    </div>
                    <div className='textShadow spaceBetween actionGap'>
                        <p>Text Shadow</p>
                        <BiSolidEditAlt className='sizedIcon' />
                    </div>
                    <div className="blendMode spaceBetween">
                        <p>Blend Mode</p>
                        <select className='blendModeDropdown' name="" id="">
                            <option value="">Normal</option>
                            <option value="">Hard</option>
                        </select>
                    </div>

                    <div className='needHelp'>
                        <p className='me-1'>Need Help</p>
                        <AiOutlineQuestionCircle />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;