const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-275 mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <p className="text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
