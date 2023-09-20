
import React, { useState, useEffect } from 'react';

import MainContent from "./components/MainContent";
import Loading from "./components/Loading";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000); 
  }, []);


  return (
    <div className="bg-primary  w-full overflow-hidden text-white font-kreon">
      {loading ? <Loading /> : <MainContent />}
  </div>
  );
}

export default App;
