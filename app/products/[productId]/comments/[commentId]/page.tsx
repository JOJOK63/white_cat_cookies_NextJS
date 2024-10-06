export default function ProductDetailsComment({
                                           params}: {
    params: { productId:string,
              commentId:string,
    }
}){
    return <h1> Product  {params.productId} commentaire {params.commentId} </h1>
}