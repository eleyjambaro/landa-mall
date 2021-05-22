import Image from 'next/image';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-md">
        <div className={`row`}>
          <div className={`col-12 col-sm-6 ${styles['landa-info']}`}>
            <Image
              src="/landa-black.png"
              alt="L&A Logo"
              width={50}
              height={16}
            />

            <p>Copyright © 2021 L&A Business Center. All rights reserved.</p>
          </div>

          <div
            className={`col-12 col-sm-6 mt-2 mt-sm-0 ${styles['vercel-info']}`}
          >
            <a
              className="d-flex justify-content-center justify-content-sm-end"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Powered by</p>
              <span className={styles.logo}>
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={72}
                  height={16}
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
