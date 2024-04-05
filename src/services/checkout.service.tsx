import { Config } from "@/config/environments";
import { ICartItem } from "@/types";
import axios from "axios";
import Error from "next/error";

const sendCheckout = async ( cart: ICartItem[], productId: string ) => {

    const url = Config().services.bff.url + `/checkout/${productId}`;

    const { data } = await axios.post( url, cart );

    return data;
}

export {
    sendCheckout
}