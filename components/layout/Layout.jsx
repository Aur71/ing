import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Search from './Search';

const Layout = ({ children }) => {
  return (
    <>
      <Search />
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
