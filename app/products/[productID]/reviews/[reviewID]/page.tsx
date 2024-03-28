import { notFound } from "next/navigation";

export default function ReviewID( { params, 
}: {
    params:{ 
        productID: string
        reviewID: string
    };
    }) {
        if (parseInt(params.reviewID) > 1000){
        notFound();
        }
    return (
    <h1>Review {params.reviewID} to Product {params.productID}</h1>
    )
}