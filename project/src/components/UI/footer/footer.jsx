import React from 'react';
import Logo from '../../UI/logo/logo';

function Footer() {
  return (
    <footer className="page-footer">
      <div className="logo">
        <Logo className="logo__link--light" />
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
