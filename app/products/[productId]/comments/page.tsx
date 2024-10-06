import Link from "next/link";

export default function ProductComments({
    params}: {
    params: { productId:string}
    }){
    return(
        <>
            <h1> Liste des commentaires pour le produit numéro {params.productId}</h1>
            <Link href="comments/1">comments 1 </Link>
            <Link href="comments/2">comments 2 </Link>
            <Link href="comments/3">comments 3 </Link>
        </>
    )

}