import CustomHead from './CustomHead';
import Footer from './Footer';
import Navbar from './Navbar';

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <>
      <CustomHead />
      <Navbar />
      <div className="container-md">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
