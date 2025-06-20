import React from 'react'
import axios from 'axios'

export const RazorPay = ({sum}) => {

    
  const [responseId, setResponseId] = React.useState("");
  const [responseState, setResponseState] = React.useState([]);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = src;

      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }

      document.body.appendChild(script);
    })
  }

  const createRazorpayOrder = (amount) => {
    let data = JSON.stringify({
      amount: amount * 100,
      currency: "INR"
    })

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/orders",
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }

    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data))
      handleRazorpayScreen(response.data.amount)
    })
    .catch((error) => {
      console.log("error at", error)
    })
  }

  const handleRazorpayScreen = async(amount) => {
    const res = await loadScript("https:/checkout.razorpay.com/v1/checkout.js")

    if (!res) {
      alert("Some error at razorpay screen loading")
      return;
    }

    const options = {
      key: 'rzp_test_oYC3YeSISOZZFZ',
      amount: amount,
      currency: 'INR',
      name: "Deeksha Garg",
      description: "payment to Deeksha garg",
      image: "https://papayacoders.com/demo.png",
      handler: function (response){
        setResponseId(response.razorpay_payment_id)
      },
      prefill: {
        name: "Deeksha Garg",
        email: "officialdeekshagarg@gmail.com"
      },
      theme: {
        color: "#F4C430"
      }
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  const paymentFetch = (e) => {
    e.preventDefault();

    const paymentId = e.target.paymentId.value;

    axios.get(`http://localhost:5000/payment/${paymentId}`)
    .then((response) => {
      console.log(response.data);
      setResponseState(response.data)
    })
    .catch((error) => {
      console.log("error occures", error)
    })
  }


  return (
<>
<div className="razorpay-main">
 <div className="App">
      <button onClick={() => createRazorpayOrder(1)}>Payment of {sum}Rs.</button>
      {responseId && <p>{responseId}</p>} <br />
      <h1>This is payment verification form</h1><br />
      <form onSubmit={paymentFetch}>
        <input type="text" name="paymentId" />
        <button type="submit">Fetch Payment</button>
        {responseState.length !==0 && (
          <ul>
            <li>Amount: {responseState.amount / 100} Rs.</li>
            <li>Currency: {responseState.currency}</li>
            <li>Status: {responseState.status}</li>
            <li>Method: {responseState.method}</li>
          </ul>
        )}
      </form>
    </div>



</div>

</>
  )
}
