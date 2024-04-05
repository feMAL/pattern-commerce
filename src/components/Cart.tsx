"use client"

import {OnApproveBraintreeActions, PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js'

import { useContext } from 'react'; 
import React from 'react';
import { CartItem } from '.';
import Link from 'next/link';
import { CartContext } from '@/context/cart.context';
import { ICartItem } from '@/types';

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


const Cart = () => {

    const {cart} = useContext(CartContext);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();


    function createOrder(data:any, actions:any) {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: "100.00",
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
        ],
        });
      }

      async function onApprove(data: any, actions:any) {
        console.log(data);
        console.log(actions.order.capture)
        const paymentID = data.paymentID;
        const orderID = data.orderID;
        const payerID = data.payerID;
        console.log(paymentID);
        console.log(orderID);
        console.log(payerID);
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
                    </div>

                    <button 
                        type='submit'
                        className={`mt-16 bg-red-300 text-slate-50 rounded h-12 w-[80%] hover:shadow-md ${cart.length ? '': 'hidden'}`}
                        onClick={() => onOpen()}
                    >
                        CHECKOUT
                    </button>
                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                        <ModalContent>
                            {(onClose) => (
                                <>
                                <ModalHeader className="flex flex-col gap-1">Checkout Your Products</ModalHeader>
                                <ModalBody>
                                    <p> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam pulvinar risus non risus hendrerit venenatis.
                                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <PayPalScriptProvider options={{clientId: process.env.NEXT_PUBLIC_CLIENT_ID_PAYPAL?process.env.NEXT_PUBLIC_CLIENT_ID_PAYPAL: "" }}>
                                        <PayPalButtons
                                            createOrder={ (data, actions) => createOrder(data, actions)}
                                                //const res = await fetch('/api/checkout',{
                                                //    method:'POST'
                                                //})
                                                //const data = await res.json();
                                                //console.log(data)
                                                //return data.id
                                            
                                            //onClose ={ () => {}}
                                            onApprove={ (data,actions) => onApprove(data,actions)}
                                        />
                                    </PayPalScriptProvider>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                    Action
                                    </Button>
                                </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default Cart