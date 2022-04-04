import "./App.css";
import logo from "./logo.svg"
function App() { 
  const loadScript = (src) => {
    return new Promise((resovle)=>{
      const script = document.createElement("script")
      script.src=src
      script.onload =() =>{
        resovle(true)
      }
      script.onerror= ()=>{
        resovle(false)
      }
      document.body.appendChild(script)
    })
  }
  const displayRazorpay = async (amount)=>{
    const res =await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    
    if(!res)
    {
      alert("not done")
      return
    }
    

    const options = {
      key: "rzp_test_AMRzXM38BzQn1y", // Enter the Key ID generated from the Dashboard
      amount: "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: {logo},
     
      handler: function (response){
          alert(response.razorpay_payment_id);
          alert("successfully done")
      },
      prefill: {
          name: "Gaurav Kumar",
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#3399cc"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open()
  }
  return (
    <div className="App">
      <div className="item_1">
      <div className="left">
          <div className="left_1">
            <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" alt="no image" width="180px" height="200px" />
          </div>
          <div className="left_2">
            <h2>Apple iPhone 12(purple 64 GB)</h2>
            <h4>Rating 4.6</h4>
            <h2>$101.99</h2>
          </div>
      </div>
      <div className="right">
          <button onClick={()=> displayRazorpay(101)}>Buy Now</button>
      </div>
      </div>
      <div className="item_1">
      <div className="left">
          <div className="left_1">
            <img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" alt="no image" width="180px" height="200px" />
          </div>
          <div className="left_2">
            <h2>Apple iPhone 12(purple 128 GB)</h2>
            <h4>Rating 4.5</h4>
            <h2>$150.99</h2>
          </div>
      </div>
      <div className="right">
          <button>Buy Now</button>
      </div>
      </div>
    </div>
  );
}

export default App;
