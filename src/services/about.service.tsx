import { Config } from "@/config/environments";
import axios from "axios";
import Error from "next/error";

const getAboutMe = async ( aboutme: string ) => {

    const url = Config().services.bff.url + `/about/${aboutme}`;

    const { data } = await axios.get( url );

    return data;
}

export {
    getAboutMe
}