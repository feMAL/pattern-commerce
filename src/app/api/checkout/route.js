import paypal from '@paypal/react-paypal-js'
import {NextResponse} from 'next/server'

const clientId = "AZ4OwcfMTZV6f01IlOK690goN3T6MCCO4AtvUdEeqNTal9IatJYeVtAY6u-O8vPJfa08XZ4bqBA52JQx";
const secretId = "EOx0yHyKf3VN6uckkfP7DJO8ahzESGoPhyZ6tFP9iyXDfOKj3rOnHsImxDReGXMzSQhb73EyIlTG-XxJ";

const environment = new paypal.core.SandboxEnvironment(clientId,secretId);

const client = new paypal.core.PayPalHttpClient(environment);

export async function POST(){

    const request = new paypal.core.orders.OrdersCreateRequest();

    request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: checkout.currency_code,
                    value: checkout.value,
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: "100.00"
                        }
                    }
                },
                items: [
                    {
                        name: "Book of React",
                        description: "A book about React",
                        quantity: "1",
                        unit_amount: {
                            currency_code: "USD",
                            value: "50.00"
                        }
                    },
                    {
                        name: "Book of Next",
                        description: "A book about Next",
                        quantity: "1",
                        unit_amount: {
                            currency_code: "USD",
                            value: "50.00"
                        }
                    }
                ]
            }
        ]
    });
    
    const response = await client.execute(request);
    
    return NextResponse.json({
        id: response.result.id
    })
}

