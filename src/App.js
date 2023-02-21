import Form from "./Component/Form";
import Typography from "@mui/material/Typography"
import "./App.css"

function App() {
  return (
    <div className="App">  
    <Typography variant="h3" component="h1" sx={{color:"gray"}}>
      Material U.I. Basic Form
    </Typography>


<Form/>
     </div>
  );
}

export default App;
