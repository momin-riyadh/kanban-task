import LOGO from '../../assets/images/logo.svg';

function Header() {
    return (
        <div className="h-20 bg-white fixed top-0 left-0 right-0 z-50">
            <div className="px-4 py-2 flex justify-between items-center">
                <a href="" className="w-70">
                    <img width={120} src={LOGO} alt="Logo" className="h-16"/>
                </a>
                <div className="flex items-center gap-2">
                    <button className="bg-[#635FC7] text-white px-4 py-2 rounded-3xl">
                        <i className="bi bi-plus"></i> Add New Task
                    </button>
                    <i className="bi bi-three-dots-vertical"></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
