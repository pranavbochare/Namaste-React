const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} MyApp</p>
      <div className="links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
