import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="main-container" style={{ display: "flex" }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
