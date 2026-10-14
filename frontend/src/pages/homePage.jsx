import { Link, Route, Routes } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { MdOutlineStorage } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { ImUserTie } from "react-icons/im";
import BillPage from "./billPage";

export default function HomePage() {
    return (
        <>
            <div className="w-full h-full flex justify-center items-center">


                <div className="w-[350px] h-full bg-primary flex flex-col justify-between items-center p-4">
                    <img src="app_logo.png" alt="logo" className="bg-white w-50 p-2 rounded-full shadow-lg" />
                    <div className="w-full flex flex-col items-center justify-center gap-4">
                        <Link to="/" className="w-70 h-15 text-white bg-accent flex justify-center items-center text-xl rounded-full shadow-lg hover:bg-accent/90 gap-4 transition-all duration-75"><CgNotes />Bill</Link>
                        <Link to="/inventory" className="w-70 h-15 text-white bg-accent flex justify-center items-center text-xl rounded-full shadow-lg hover:bg-accent/90 gap-4 transition-all duration-75"><MdOutlineStorage />Inventory</Link>
                        <Link to="/customers" className="w-70 h-15 text-white bg-accent flex justify-center items-center text-xl rounded-full shadow-lg hover:bg-accent/90 gap-4 transition-all duration-75"><ImUserTie />Customers</Link>
                        <Link to="/history" className="w-70 h-15 text-white bg-accent flex justify-center items-center text-xl rounded-full shadow-lg hover:bg-accent/90 gap-4 transition-all duration-75"><FaClockRotateLeft />History</Link>
                    </div>
                    <div className="w-full h-20 flex items-center justify-between bg-secondary rounded-full overflow-hidden shadow-xl">
                        <img src="app_icon.png" alt="avatar" className="w-20 h-20 rounded-full object-cover bg-white" />
                        <h1 className="text-lg">UserName</h1>
                        <Link className="text-4xl mr-4 text-white"><IoIosSettings /></Link>
                    </div>
                </div>
                <div className="w-[calc(100%-350px)] h-full bg-gray-400">
                    <Routes>
                        <Route path="/" element={<BillPage/>} />
                        <Route path="/inventory" element={<h1>Inventory</h1>} />
                        <Route path="/customers" element={<h1>Customers</h1>} />
                        <Route path="/history" element={<h1>History</h1>} />

                    </Routes>
                </div>
            </div>

        </>
    )
}