import { Config } from "@/config/environments";
import { CatalogPattern, IPattern } from "@/types";
import axios from "axios";
import Error from "next/error";

const getAllProductToCatalog = async ( ): Promise<CatalogPattern[]> => {

    const url = Config().services.bff.url + `/products/catalog`;

    const { data } = await axios.get( url );

    return data;
}

const getAllProduct= async ( ): Promise<IPattern[]> => {

    const url = Config().services.bff.url + `/products`;

    const { data } = await axios.get( url );

    return data;
}


const getProductById = async ( productId: string ) => {

    const url = Config().services.bff.url + `/products/${productId}`;

    const { data } = await axios.get( url );

    return data;
}


export {
    getProductById,
    getAllProduct,
    getAllProductToCatalog
}