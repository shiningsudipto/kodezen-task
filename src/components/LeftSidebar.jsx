import { AiOutlineMenu } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';
import { GrEdit } from 'react-icons/gr';
import { BsCircleHalf } from 'react-icons/bs';
import { FcSettings } from 'react-icons/fc';
const LeftSidebar = () => {
    return (
        <div className='leftSidebar'>
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
            </div>
        </div>
    );
};

export default LeftSidebar;