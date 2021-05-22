import Image from 'next/image';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles['copyright-info']}>
          <div className={styles['landa-info']}>
            <Image
              src="/landa-black.png"
              alt="L&A Logo"
              width={50}
              height={16}
            />

            <p>Copyright © 2021 L&A Business Center. All rights reserved.</p>
          </div>

          <div className={styles['vercel-info']}>
            <a
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
