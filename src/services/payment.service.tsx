import { Config } from "@/config/environments";
import { IPayment } from "@/types";
import axios from "axios";

const sendCheckout = async ( checkout: IPayment ) => {

    const url = Config().services.bff.url + `/payment`;

    const { data } = await axios.post( url, checkout );

    return data;
}

export {
    sendCheckout
}