// Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-black/60 text-green-300 py-4 text-center border-t border-green-500">
      <p>© 2024 Sanath Kumar | All Rights Reserved</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com/sanathkumarr" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">GitHub</a>
        <a href="https://linkedin.com/in/sanath-kumar-sanath-a09492213" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;