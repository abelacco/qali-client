

const Navbar = () => {
  return (
    <nav className="bg-blue-950 w-full flex justify-between">
      <div className="flex items-center ml-2">
        <img src='https://media.discordapp.net/attachments/1107828744804122664/1109682491339591762/image.png' alt="Logo" className="h-12 w-16 mr-2" /> 
      </div>
      <div className="flex items-center justify-end mr-10"> 
        <a href="#" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">HOME</a>
        <a href="#" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">LOGIN</a>
        <a href="#" className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">CREAR PERFIL PROFESIONAL</a>
      </div>
    </nav>
  );
};

export default Navbar;
