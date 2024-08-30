// import NavBar from "./Components/NavBar"
// import NewsBoard from "./Components/Newsboard"

// const App = () => {
//   // const [category,setCategory] = useState("general");
//   return (
//     <div>
//       <NavBar/>
//       <NewsBoard/>
//     </div>
//   )
// }

// export default App

import { useState } from "react";
import NavBar from "./Components/NavBar";
import NewsBoard from "./Components/Newsboard";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <NavBar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App;
