import CustomHead from './CustomHead';
import Footer from './Footer';
import Navbar from './Navbar';

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <>
      <CustomHead />
      <Navbar />
      <div className="container-sm">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
