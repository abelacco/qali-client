import Footer  from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children, main }) => {
  return (
    <>
      <Navbar />
      <main className={main}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
