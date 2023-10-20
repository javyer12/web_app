"use client"

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function App() {
    console.log(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID)
    return (
        <div className="h-screen bg-slate-950 flex justify-center items-center">
            <div>
                <h1 className="text-white m-3">Proceed the Checkout (1 item)</h1>
                <PayPalScriptProvider options={{
                    clientId: "AYKvncmQyF7HufQfr1HFmfab4mze3IAv-8yUftJGjpULuzCBmUOCFQ-IIS3Zwy8AkaxE-dtALJ-1kTpH", currency: "USD",
                    intent: "capture",
                }}>
                    <PayPalButtons 
                    // createOrder={()=>{}}
                    // onCancel={()=>{}}
                    // onApprove={()=>{}}
                    // una async await function solo puede retornar un tipo de dato (promise<any>)
                    // ejecutar la orden
                    createOrder={async (): Promise<any> =>{
                        const res = await fetch('/api/checkout', {method: "POST"})
                        const order = await res.json()
                        console.log(order.id)
                        return order.id
                    }}
                    // escuchar la respuesta desde paypal
                    onApprove={(data, actions): string | any =>{
                        console.log(data)

                        actions.order?.capture()
                    }}
                    onCancel={(data): any =>{
                        console.log("Order Cancelled: ", data)
                    }}
                    />
                </PayPalScriptProvider>
            </div>
        </div>
    );
}

// https://ingenio.la/desarrolladora-de-software/ example to built
// https://developer.paypal.com/home pagina de paypal donde se registra la web app para usar este servicio
// Cuenta1forPaypal#

// link hacia cuenta de paypal de prueba 
// https://www.sandbox.paypal.com/signin?returnUri=https%3A%2F%2Fwww.sandbox.paypal.com%2Fmep%2F
// https://developer.paypal.com/dashboard/accounts/edit/5347140650003344539?accountName=sb-hj5xb27652363@personal.example.com