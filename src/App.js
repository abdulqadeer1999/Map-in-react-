
import './App.css';
import Footer from './components/footer'
function App() {

// const arr = ["karachi","lahore","hyderabd"]

const cities = [
  {
    city : "Karachi",
    temperature : "35C",
    humadity : "200",
    perception  : "50%"
  }, 
  {
    city : "Hyderabad",
    temperature : "25C",
    humadity : "150",
    perception  : "60%"
  },
  {
    city : "Sukkur",
    temperature: "40C",
    humadity : "100",
    perception : "80%"
  },
  {
    city : "khairpur",
    temperature : "40C",
    humadity : "100",
    perception  : "80%"
  },
  {
    city: "Lahore",
    temperature : "45C",
    humadity : "45",
    perception  : "60%"
  }
]

  return (
    <div>
      
      
 <h1>Hello</h1>

 {/* {arr.map((value) => 
   <h2>{value}</h2>
     
 )} */}


 {cities.map((index) =>
 <div key = {index}>  
 <h1> city :{index.city}</h1>
 <p> Temp : {index.temperature}</p>
 <p>Humadity : {index.humadity}</p>
 <p>Perception : {index.perception}</p>
</div>
 )}

      {/* {[1,2,3,4,5]} */}
      {/* <div>{["aq","qa","name"]}</div> */}


    <Footer />
    </div>
  );
}

export default App;
