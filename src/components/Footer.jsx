// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-black py-4 text-center mb-0">
//       <p className="text-sm">Built with Coffee 🍵 and Patience 🧘🏻‍♂️</p>
//       <p className="text-sm">&copy; 2024 All rights reserved</p>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";

const Footer = () => {
  return (
    <footer style={{ flexShrink: 0, marginTop: 'auto', backgroundColor: 'white', color: 'black', padding: '1rem 0', textAlign: 'center', marginBottom: 0 }}>
      <p style={{ fontSize: '0.875rem' }}>Built with Coffee 🍵 and Patience 🧘🏻‍♂️</p>
      <p style={{ fontSize: '0.875rem' }}>&copy; 2024 All rights reserved</p>
    </footer>
  );
};

export default Footer;
