import { configuration } from "@/config/configuration";
import Error from "next/error";

const getCatalogProducts = () => {

}

const getProductById = async ( productId: string ) => {
    //const response = await fetch(`${configuration.backend?.url}/products/${productId}`, {});
    const response = await fetch(`http://localhost:3005/products/${productId}`, {});
    const result = await response.json();
    return result;
}

const getProductsByCategory = ( categories: string ) => {

}


export {
    getProductById
}