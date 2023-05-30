import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


function NavBar () {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
    return (
        <nav className="bg-blue-950 w-full flex justify-between">
        <div className="flex items-center ml-2">
          <Link to="/dashboard">
            <img
              src="https://media.discordapp.net/attachments/1107828744804122664/1109682491339591762/image.png"
              alt="Logo"
              className="h-12 w-16 mr-2"
            />
          </Link>
        </div>
        <div className="flex items-center justify-end mr-10">
          <Link
            to="/dashboard"
            className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            HOME
          </Link>
          <a
            href="#"
            className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            SOPORTE
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            DOCTOR MODEL
          </a>
        </div>
      </nav>
    );
  };
    

export default NavBar