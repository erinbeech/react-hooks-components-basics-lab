import React from "react";

function NavBar() {
  return (
    <div>
       <nav>
         <a href="#home">this might be a link might not be!</a>
       </nav>
       <Home />
       <About />
    </div>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>I should have been a messed up child star</h1>
    </div>
  );
}

{/* write an <About> component here */}
function About() {
  return (
    <div id="about">
      <h1>i think amanda bynes is amazing</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      {/* add your <About> component here */}
    </div>
  );
}

export default App;