import { AiOutlineMenu } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';
const LeftSidebar = () => {
    return (
        <div className='leftSidebar'>
            <div className="heading flex items-center justify-between bg-black text-white p-2">
                <AiOutlineMenu className='cursor-pointer' />
                <p>Edit Heading</p>
                <PiDotsNineBold className='cursor-pointer' />
            </div>
            <div className='leftSidebarActions'>

            </div>
        </div>
    );
};

export default LeftSidebar;