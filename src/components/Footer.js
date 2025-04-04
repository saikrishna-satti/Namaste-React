


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-4 text-center w-full">
      <p className="text-sm">
        Created By <span className="font-semibold">Sai Krishna</span> &copy; {year}
      </p>
      <strong className="text-lg font-bold">
        Tasty <span className="text-yellow-400">Trails</span>
      </strong>
    </footer>
  );
};

export default Footer;
