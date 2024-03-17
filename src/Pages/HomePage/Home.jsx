import { useEffect, useState } from "react";
import alemPhoto from '../../assets/alemImg.png'
import prayPhoto from '../../assets/pray-img.png'
import img from '../../assets/home.png'
import img2 from '../../assets/app.png'
import img3 from '../../assets/idea.png'
import img4 from '../../assets/save.png'
import img5 from '../../assets/create.png'
import img6 from '../../assets/chat.png'
import img7 from '../../assets/book.png'
import img8 from '../../assets/language.png'
import img9 from '../../assets/general.png'
import img10 from '../../assets/praying.png'
import img11 from '../../assets/lighting.png'
import img12 from '../../assets/moon.png'
import img13 from '../../assets/tajbi.png'
import { FaCirclePlay } from "react-icons/fa6";
import { FaSortDown } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import copy from '../../assets/copy.png';
import bookmark from '../../assets/bookmark.png';
import bulb from '../../assets/bulb.png';
import share from '../../assets/share.png';
import report from '../../assets/report.png';
import useAxios from "../../Hook/useAxios";



const Home = () => {
    const [allSura, setAllSura] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const myAxios = useAxios();
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
    );

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    useEffect(() => {
        myAxios.get('/hadishs')
        .then(res => setAllSura(res.data))
    }, [myAxios])

    const handleBtn = () => {
        toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://i.ibb.co/YNQjGK1/419143909-882024083570343-9030019948086174887-n.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Sirajul Islam
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      This Functionality Is Work Soon Please Wait
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ))
    }

    return (
        <div className="lg:px-10 lg:py-10 p-5">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="flex lg:gap-6 justify-between bg-[#EBEEF2]">
                <div className="hidden lg:block">
                    <div className="bg-white px-4 pt-9 pb-9 rounded-3xl flex items-center flex-col gap-20 fixed z-30">
                        <div>
                            <img src={prayPhoto} alt="" />
                        </div>
                        <div className="flex flex-col gap-6">
                            <Link to={'/'}>
                                <div className="bg-[#E8F0F5] rounded-full p-3">
                                    <img src={img} alt="" />
                                </div>
                            </Link>
                            <Link to={'/'}>
                                <div className="bg-[#E8F0F5] rounded-full p-3">
                                    <img src={img2} alt="" />
                                </div>
                            </Link>
                            <Link to={'/'}>
                                <div className="bg-[#E8F0F5] rounded-full p-3">
                                    <img src={img3} alt="" />
                                </div>
                            </Link>
                            <Link to={'/'}>
                                <div className="bg-[#E8F0F5] rounded-full p-3">
                                    <img src={img4} alt="" />
                                </div>
                            </Link>
                            <Link to={'/'}>
                                <div className="bg-[#E8F0F5] rounded-full p-3">
                                    <img src={img5} alt="" />
                                </div>
                            </Link>
                            <Link to={'/'}>
                                <div className="bg-[#E8F0F5] rounded-full p-3">
                                    <img src={img6} alt="" />
                                </div>
                            </Link>
                            <Link to={'/'}>
                                <div className="bg-[#E8F0F5] rounded-full p-3">
                                    <img src={img7} alt="" />
                                </div>
                            </Link>
                        </div>
                        <div>
                            <button className="bg-[#1FA45B] text-white text-2xl p-3 rounded-lg">
                                <FaHandHoldingHeart></FaHandHoldingHeart>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-2xl flex-1 pt-5 fixed z-20 left-40 bg-[#EBEEF2] hidden lg:block">
                    <h3 className="text-2xl">Dua Page</h3>
                    <div className="mt-6 w-[350px]">
                        <div className="bg-[#1FA45B] py-4 rounded-tl-xl rounded-tr-xl">
                            <h3 className="text-center text-[17px] text-white">Categories</h3>
                        </div>
                        <div className="px-4 bg-white py-4 rounded-bl-xl rounded-br-xl">
                            <form className="relative w-[318px] input input-bordered">
                                <input className="bg-white py-3 outline-2 outline-[#1FA45B]/40 text-sm w-full pl-7" type="search" placeholder="Search by Categories" />
                                <button className="absolute left-3 top-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#868686]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
                            </form>

                            <div>
                                <div className="collapse hover:bg-[#E8F0F5] rounded-lg pt-3 pl-2 pr-2 pb-0 mt-4">
                                    <input type="radio" name="my-accordion-1" defaultChecked />
                                    <div className="collapse-title p-0">
                                        <div className="flex items-center gap-2">
                                            <img className="bg-[#CFE0E5] p-1 rounded-md" src={img10} alt="" />
                                            <div>
                                                <h4 className="text-base">Introduction to Dua</h4>
                                                <p className="text-sm">Subcategory: 11</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse-content -mt-5">
                                        <div className="border-l-2 border-dotted pt-4 my-2 border-[#1fa45b] relative">
                                            <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3">
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[23px]"></div>
                                                    <p className="text-sm">What is Dua</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[50px]"></div>
                                                    <p className="text-sm">Conditions for Dua to be successful</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[78px]"></div>
                                                    <p className="text-sm">The Methode Of Dua</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[107px]"></div>
                                                    <p className="text-sm">Before Dua</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[135px]"></div>
                                                    <p className="text-sm">Prerequisites of writing Dua and drinking it’s water</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[183px]"></div>
                                                    <p className="text-sm">The correct way to perform Dua for a small child</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="collapse hover:bg-[#E8F0F5] rounded-lg pt-3 pl-2 pr-2 pb-0 mt-4">
                                    <input type="radio" name="my-accordion-1" defaultChecked />
                                    <div className="collapse-title p-0">
                                        <div className="flex items-center gap-2">
                                            <img className="bg-[#CFE0E5] p-1 rounded-md" src={img11} alt="" />
                                            <div>
                                                <h4 className="text-base">Introduction to Dua</h4>
                                                <p className="text-sm">Subcategory: 11</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse-content -mt-5">
                                        <div className="border-l-2 border-dotted pt-4 my-2 border-[#1fa45b] relative">
                                            <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3">
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[23px]"></div>
                                                    <p className="text-sm">What is Dua</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[50px]"></div>
                                                    <p className="text-sm">Conditions for Dua to be successful</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[78px]"></div>
                                                    <p className="text-sm">The Methode Of Dua</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[107px]"></div>
                                                    <p className="text-sm">Before Dua</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[135px]"></div>
                                                    <p className="text-sm">Prerequisites of writing Dua and drinking it’s water</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[183px]"></div>
                                                    <p className="text-sm">The correct way to perform Dua for a small child</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="collapse hover:bg-[#E8F0F5] rounded-lg pt-3 pl-2 pr-2 pb-0 mt-4">
                                    <input type="radio" name="my-accordion-1" defaultChecked />
                                    <div className="collapse-title p-0">
                                        <div className="flex items-center gap-2">
                                            <img className="bg-[#CFE0E5] p-1 rounded-md" src={img12} alt="" />
                                            <div>
                                                <h4 className="text-base">Introduction to Dua</h4>
                                                <p className="text-sm">Subcategory: 11</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse-content -mt-5">
                                        <div className="border-l-2 border-dotted pt-4 my-2 border-[#1fa45b] relative">
                                            <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3">
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[23px]"></div>
                                                    <p className="text-sm">What is Dua</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[50px]"></div>
                                                    <p className="text-sm">Conditions for Dua to be successful</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[78px]"></div>
                                                    <p className="text-sm">The Methode Of Dua</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[107px]"></div>
                                                    <p className="text-sm">Before Dua</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[135px]"></div>
                                                    <p className="text-sm">Prerequisites of writing Dua and drinking it’s water</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[183px]"></div>
                                                    <p className="text-sm">The correct way to perform Dua for a small child</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="collapse hover:bg-[#E8F0F5] rounded-lg pt-3 pl-2 pr-2 pb-0 mt-4">
                                    <input type="radio" name="my-accordion-1" defaultChecked />
                                    <div className="collapse-title p-0">
                                        <div className="flex items-center gap-2">
                                            <img className="bg-[#CFE0E5] p-1 rounded-md" src={img13} alt="" />
                                            <div>
                                                <h4 className="text-base">Introduction to Dua</h4>
                                                <p className="text-sm">Subcategory: 11</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collapse-content -mt-5">
                                        <div className="border-l-2 border-dotted pt-4 my-2 border-[#1fa45b] relative">
                                            <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3">
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[23px]"></div>
                                                    <p className="text-sm">What is Dua</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[50px]"></div>
                                                    <p className="text-sm">Conditions for Dua to be successful</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[78px]"></div>
                                                    <p className="text-sm">The Methode Of Dua</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[107px]"></div>
                                                    <p className="text-sm">Before Dua</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[135px]"></div>
                                                    <p className="text-sm">Prerequisites of writing Dua and drinking it’s water</p>
                                                </div>
                                                <div>
                                                    <div className="bg-[#1fa45b] rounded-full h-1.5 w-1.5 absolute -left-1 top-[183px]"></div>
                                                    <p className="text-sm">The correct way to perform Dua for a small child</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-[#EBEEF2] lg:hidden block">
                    <div className="flex558 fixed z-10 bg-[#EBEEF2] w-full pb-[14px] pt-[80px] px-12 top-0">
                        <form className="relative text-[#868686]">
                            <input className="bg-white py-3 px-4 w-full rounded-md outline-2 outline-[#1FA45B]/40" type="search" placeholder="Search by Dua Name" />
                            <button className="bg-[#F3F4F6] py-[9px] px-[12px] rounded-md absolute right-[5px] top-[5px]"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
                        </form>
                    </div>
                    <div className="mt-32">
                        <div className="">
                            <div className="bg-white rounded-xl py-4 px-5">
                                <h3 className="text-[16px] font-medium"><span className="text-[#21A55C]">Section:</span> The servant is dependent on his Lord</h3>
                            </div>
                            <div className="flex flex-col gap-5 mt-5">
                                {
                                    allSura.map((sura, idx) => <div key={idx} className="p-6 bg-white rounded-xl ">
                                        <div className="flex items-center gap-3">
                                            <img src={sura?.img} alt="" />
                                            <h3 className="text-[#1FA45B] font-semibold text-[18px]">{sura?.title}</h3>
                                        </div>
                                        <h4 className="mt-5 text-[20px]">{sura?.description ? sura?.description : ''}</h4>
                                        <h2 className="my-9 text-[26px] text-right font-medium">{sura?.arabic ? sura?.arabic : ''}</h2>
                                        <h2 className="my-5 text-[20px] "><span className="font-semibold">
                                            {sura?.translite ? 'Transliteration: ' : ''}</span>
                                            <span className="my-5">{sura?.translite ? sura?.translite : ''}</span></h2>

                                        <h2 className="my-5 text-[20px]"><span className="font-semibold">
                                            {sura?.translation ? 'Transliteration: ' : ''}</span>
                                            <span className="my-5">{sura?.translation ? sura?.translation : ''}</span></h2>

                                        <h2 className="mt-12 mb-6 text-[18px] font-medium"><span className="text-[#1FA45B] font-semibold">Reference:</span> <br />{sura?.reference ? sura?.reference : ''}</h2>
                                        <div className="mt-4 flex justify-between">
                                            <p className="text-[44px] text-[#1FA45B]">
                                                {sura?.translation ? <FaCirclePlay></FaCirclePlay> : ''}
                                            </p>
                                            <div className="flex items-center gap-4">
                                                <img src={copy} alt="" />
                                                <img src={bookmark} alt="" />
                                                <img src={bulb} alt="" />
                                                <img src={share} alt="" />
                                                <img src={report} alt="" />
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#EBEEF2] min-w-[400px] lg:block hidden">
                    <div className="flex justify-end fixed z-10 right-96 bg-[#EBEEF2] w-5/6 pb-[14px] pt-[53px] pr-3 top-0">
                        <form className="relative text-[#868686] ">
                            <input className="bg-white w-[371px] py-3 px-4 rounded-md outline-2 outline-[#1FA45B]/40" type="search" placeholder="Search by Dua Name" />
                            <button className="bg-[#F3F4F6] py-[9px] px-[12px] rounded-md absolute right-[5px] top-[5px]"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
                        </form>
                    </div>
                    <div className="ml-44">
                        <div className="mx-[330px] mt-[76px]">
                            <div className="bg-white rounded-xl py-4 px-5">
                                <h3 className="text-[16px] font-medium"><span className="text-[#21A55C]">Section:</span> The servant is dependent on his Lord</h3>
                            </div>
                            <div className="flex flex-col gap-5 mt-5">
                                {
                                    allSura.map((sura, idx) => <div key={idx} className="p-6 bg-white rounded-xl ">
                                        <div className="flex items-center gap-3">
                                            <img src={sura?.img} alt="" />
                                            <h3 className="text-[#1FA45B] font-semibold text-[18px]">{sura?.title}</h3>
                                        </div>
                                        <h4 className="mt-5 text-[20px]">{sura?.description ? sura?.description : ''}</h4>
                                        <h2 className="my-9 text-[26px] text-right font-medium">{sura?.arabic ? sura?.arabic : ''}</h2>
                                        <h2 className="my-5 text-[20px] "><span className="font-semibold">
                                            {sura?.translite ? 'Transliteration: ' : ''}</span>
                                            <span className="my-5">{sura?.translite ? sura?.translite : ''}</span></h2>

                                        <h2 className="my-5 text-[20px]"><span className="font-semibold">
                                            {sura?.translation ? 'Transliteration: ' : ''}</span>
                                            <span className="my-5">{sura?.translation ? sura?.translation : ''}</span></h2>

                                        <h2 className="mt-12 mb-6 text-[18px] font-medium"><span className="text-[#1FA45B] font-semibold">Reference:</span> <br />{sura?.reference ? sura?.reference : ''}</h2>
                                        <div className="mt-4 flex justify-between">
                                            <p className="text-[44px] text-[#1FA45B]">
                                                {sura?.translation ? <FaCirclePlay></FaCirclePlay> : ''}
                                            </p>
                                            <div className="flex items-center gap-10">
                                                <img src={copy} alt="" />
                                                <img src={bookmark} alt="" />
                                                <img src={bulb} alt="" />
                                                <img src={share} alt="" />
                                                <img src={report} alt="" />
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-end fixed z-30 right-2 lg:right-20">
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="avatar items-center gap-1"
                                onClick={toggleDropdown}
                            >
                                <div className="rounded-full">
                                    <img className="w-[45px] h-[45px]"
                                        alt="Avatar"
                                        src={alemPhoto}
                                    />
                                </div>
                                <p>
                                    <FaSortDown></FaSortDown>
                                </p>
                            </div>
                            {isOpen && (<ul
                                tabIndex={0}
                                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a className="justify-between">Profile</a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                            )}
                        </div>
                    </div>
                    <div className="mt-6 w-[300px] fixed z-10 right-14 top-[92px] rounded-bl-3xl rounded-br-3xl hidden lg:block">
                        <div className="bg-white py-4 rounded-tl-3xl rounded-tr-3xl">
                            <h3 className="text-center text-xl text-black font-bold">Settings</h3>
                        </div>
                        <div className="px-4 bg-white pt-4 flex flex-col gap-4 menu rounded-bl-3xl rounded-br-3xl pb-64">
                            <NavLink>
                                <div onClick={handleBtn} className="flex items-center gap-3 bg-[#F7F8FA] p-3 rounded-lg">
                                    <div className="bg-[#E8F0F5] rounded-full w-11 p-3">
                                        <img src={img8} alt="" />
                                    </div>
                                    <h3>Language Settings</h3>
                                </div>
                            </NavLink>
                            <NavLink>
                                <div onClick={handleBtn} className="flex items-center gap-3 bg-[#F7F8FA] p-3 rounded-lg">
                                    <div className="bg-[#E8F0F5] rounded-full w-11 p-3">
                                        <img src={img9} alt="" />
                                    </div>
                                    <h3>General Settings</h3>
                                </div>
                            </NavLink>
                            <NavLink>
                                <div onClick={handleBtn} className="flex items-center gap-3 bg-[#F7F8FA] p-3 rounded-lg">
                                    <div className="bg-[#E8F0F5] rounded-full w-11 p-3">
                                        <img src={img2} alt="" />
                                    </div>
                                    <h3>Font Settings</h3>
                                </div>
                            </NavLink>
                            <div className="border rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg">
                                <NavLink>
                                    <div onClick={handleBtn} className="flex rounded-lg items-center gap-3 bg-[#F7F8FA] p-3 border-l-4 text-[#1FA45B] border-[#1FA45B]">
                                        <div className="bg-[#E8F0F5] rounded-full w-11 p-3">
                                            <img src={img2} alt="" />
                                        </div>
                                        <h3>Appearance Settings</h3>
                                    </div>
                                </NavLink>
                                <div className="flex justify-between px-3 py-5">
                                    <h3>Night Mode</h3>
                                    <input onChange={handleToggle} type="checkbox" value="synthwave" className="toggle theme-controller" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;