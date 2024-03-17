import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="bg-[#EBEEF2]">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;