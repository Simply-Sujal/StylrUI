import { useAuth } from '../store/Auth';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import UserInfo from '../UserProfile/UserInfo';

const UserProfile = () => {
    const { isTokenAvailable, } = useAuth();

    return (
        <>
            <div className={`${isTokenAvailable ? "bg-white" : "bg-orange-100"} w-full h-auto flex items-center justify-center pt-28 md:pt-[120px]`}>
                <div className="w-full rounded-lg pt-5">
                    <div className="flex justify-between flex-row-reverse items-center mb-4 px-2 md:px-20">
                        {
                            isTokenAvailable ? (
                                <Link to="/logout" className="rounded relative inline-flex group items-center justify-center px-3 py-[3px] m-1 cursor-pointer border-b-4 border-l-2 active:border-orange-600 active:shadow-none shadow-lg bg-gradient-to-tr from-orange-600 to-orange-500 border-orange-700 text-white">
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                    LogOut
                                </Link>
                            ) : (
                                <Link to="/login" className="rounded relative inline-flex group items-center justify-center px-3 py-[3px] m-1 cursor-pointer border-b-4 border-l-2 active:border-orange-600 active:shadow-none shadow-lg bg-gradient-to-tr from-orange-600 to-orange-500 border-orange-700 text-white">
                                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                                    <span className="relative">Sign In</span>
                                    <IoIosArrowRoundForward className='text-[30px] pt-[3px]' />
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div >
            <UserInfo />
        </>

    );
};

export default UserProfile;
