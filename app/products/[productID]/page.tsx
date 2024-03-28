export default function ProductDetails( { params, 
}: {
    params:{ productID: string };
    }) {
    return <h1>Welcome to Product {params.productID}</h1>
}