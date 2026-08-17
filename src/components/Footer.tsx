// Code written by Pranav Durai
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 mt-4">
      <div className="flex items-center justify-center text-[12px] text-muted dark:text-dark-muted font-sans">
        <p>&copy; {year} Pranav Durai</p>
      </div>
    </footer>
  );
};

export default Footer;
