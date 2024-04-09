"use client"

import {OnApproveBraintreeActions, PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'

import { useContext } from 'react'; 
import React from 'react';
import { CartItem } from '.';
import Link from 'next/link';
import { CartContext } from '@/context/cart.context';
import { IPayPalApproveOrderValue, IPayment } from '@/types';

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Error from 'next/error';
import { sendCheckout } from '@/services/payment.service';


const Cart = () => {

    const {cart} = useContext(CartContext);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    let total = 0;
    cart.forEach((item) => {
        total+=item.price
    });

    function checkoutTicket() {
        return [
            {
                amount: {
                    currency_code: "USD",
                    value: total.toString(),
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: total.toString()
                        }
                    }
                },
                items: 
                    cart.map((item)=> ({
                        name: item.item_id,
                        description: item.description,
                        quantity: "1",
                        unit_amount: {
                            currency_code: "USD",
                            value: item.price
                        }
                    }))
                
            }
        ]        
        
    }


    function createOrder(data:any, actions:any) {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: checkoutTicket()
        });
      }

      const onApprove = async (data: any, actions:any) => {

        const captureOrder: IPayPalApproveOrderValue = await actions.order.capture();
        console.log(captureOrder)
        if(captureOrder){
            const { id, payer, purchase_units, status }  = captureOrder;

            const payment: IPayment = {
                platform: data.paymentSource,
                total_amount: {
                    amount: total.toString(),
                    currency_code: "USD"  
                },
                buy_id: id,
                order:{
                    order_id: data.orderID,
                    items: purchase_units[0].items,
                    status: status
                },
                client: {
                    name: payer.name.given_name,
                    surname:  payer.name.surname,
                    email: payer.email_address,
                    address: {
                        ...payer.address,
                        ...purchase_units[0].shipping.address
                    }
                }
            }
            //enviar Payment al Backend
            console.log(payment)

            sendCheckout(payment)
            
        }else {
            new Error({statusCode: 409, title: "No se genero la ordern de Compra"})
        }

      }

    return (
        <>
            <div className='my-12 md:w-[70%] w-[95%] min-h-full shadow-md'>
                <div className='py-16 justify-center text-center'>
                    <div className='text-center'>
                        <span className='font-extrabold text-xl'>Your Buy s Cart</span>
                    </div>
                    <div className='grid grid-cols-4 w-full my-8'>
                        <div>
                            Product
                        </div>
                        <div>
                            Description
                        </div>
                        <div>
                            Price
                        </div>
                        <div>
                            Actions
                        </div>
                    </div>
                    <div>
                    {
                        cart.length ? (
                        cart.map( (product) => (
                            <>
                                <div key={`cart_item_${product.item_id}`}  className='flex flex-col pt-8 items-center justify-center'>
                                    <CartItem item={product}></CartItem>
                                    <hr className='text-rose-400 w-[75%]' />
                                </div>
                            </>
                        ))
                        ): (
                        <div className='py-16 font-medium text-md'>
                            <span>
                                Your Cart is empty, get it something in the <Link href={"/shop"}><span className=' font-bold capitalize text-rose-400'>shop</span></Link> 
                            </span>
                        </div>  
                        ) 
                    }

                    {
                        cart.length > 0 ? 
                            <div className='flex justify-evenly items-center w-full my-8'>
                                <span className='font-bold text-md capitalize'>total</span>
                                <span className='text-md'> $ {total}</span>
                            </div>
                             : <></>
                    }
                    </div>

                    <button 
                        type='submit'
                        className={`mt-16 bg-red-300 text-slate-50 rounded h-12 w-[80%] hover:shadow-md ${cart.length ? '': 'hidden'}`}
                        onClick={() => onOpen()}
                    >
                        CHECKOUT
                    </button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <PayPalScriptProvider options={{clientId: process.env.NEXT_PUBLIC_CLIENT_ID_PAYPAL?process.env.NEXT_PUBLIC_CLIENT_ID_PAYPAL: "" }}>
                                    
                        <ModalContent>
                            {(onClose) => (
                                <>
                                <ModalHeader className="flex flex-col gap-1">Checkout Your Products</ModalHeader>
                                <ModalBody>
                                    <p> 
                                        Your pay well be $ {total} for {cart.length} items  
                                    </p>
                                </ModalBody>
                                <ModalFooter>

                                        <PayPalButtons
                                            createOrder={ (data, actions) => createOrder(data, actions)}
                                            //onClose ={ () => {}}
                                            onApprove={ (data,actions) => onApprove(data,actions)}
                                        />

                                </ModalFooter>
                                </>
                            )}
                            
                        </ModalContent>
                        </PayPalScriptProvider> 
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default Cart