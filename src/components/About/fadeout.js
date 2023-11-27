import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in', 
      once: true, 
    });
  }, []);

  return (
    <div>
      {/* Your React components */}
    </div>
  );
}

export default App;