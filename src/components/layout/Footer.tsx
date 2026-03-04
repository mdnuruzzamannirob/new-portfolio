const Footer = () => {
  return (
    <footer className="border-t border-card-border bg-card-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
