import { Config } from "@/config/environments";
import { CatalogPattern } from "@/types";
import axios from "axios";
import Error from "next/error";

const getAllProduct = async ( ): Promise<CatalogPattern[]> => {

    const url = Config().services.bff.url + `/products`;

    const { data } = await axios.get( url );

    return data;
}

const getProductById = async ( productId: string ) => {

    const url = Config().services.bff.url + `/products/${productId}`;

    const { data } = await axios.get( url );

    return data;
}

const getProductsByCategory = ( categories: string ) => {

}


export {
    getProductById,
    getAllProduct
}