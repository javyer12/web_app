import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server';

const clientId = process.env.PAYPAL_CLIENT_KEY;
const clientSecretKey = process.env.PAYPAL_CLIENT_SECRET_KEY;
// const clientId = 'AYKvncmQyF7HufQfr1HFmfab4mze3IAv-8yUftJGjpULuzCBmUOCFQ-IIS3Zwy8AkaxE-dtALJ-1kTpH'
// const clientSecretKey = 'EN60sY1ZFBhN7zJrubzQ-1WBtt9D9TQzc_GIO2XAe1IMbVFhVvjq5HaW0XQr_ySGl0I4Vg-Rhg-2ZVtG'

const env = new paypal.core.SandboxEnvironment(clientId, clientSecretKey);
 const client = new paypal.core.PayPalHttpClient(env);

export async function POST(){
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: "50",
                    breakdown:{
                        item_total: {currency_code: "USD",
                        value: "50.00"}
                    }
                },
                    items: [
                        {
                            name: "A React Book",
                            description: "Learn React js with the best book of react",
                            quantity: "1",
                            unit_amount: {
                                currency_code: "USD",
                                value: "50.00"
                            }
                        }
                    ]
                }
            
        ]
    })

    const purchase = await client.execute(request);
    console.log(purchase)
    return NextResponse.json({
        id: purchase.result.id
    })
}