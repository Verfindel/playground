import type { PageLoad } from './$types';

export const load: PageLoad = async ({fetch}) => {    
    const fetchProducts = async () => {
        let productsRes = await fetch('https://dummyjson.com/products?limit=10');
        return await productsRes.json();
    } 

    return {
        products: fetchProducts()
    }
};