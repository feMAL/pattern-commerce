import { configuration } from "@/config/configuration";
import axios from "axios";
import Error from "next/error";

const getCatalogProducts = () => {

}

const getProductById = async ( productId: string ) => {

    const url = configuration.backend?.url + `/products/${productId}`;

    const { data } = await axios.get( url );

    return data;
}

const getProductsByCategory = ( categories: string ) => {

}


export {
    getProductById
}