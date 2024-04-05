import { Config } from "@/config/environments";
import { IContactFormData } from "@/types/services";
import axios from "axios";
import Error from "next/error";

const sendContact = async ( form: IContactFormData ) => {

    const url = Config().services.bff.url + `/contact`;

    const { data } = await axios.post( url, form );

    return data;
}

export {
    sendContact
}