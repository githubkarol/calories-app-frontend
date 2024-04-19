import {useEffect, useState} from "react";

const ProductApi = () => {

    const [products, setProducts] = useState(null);

    useEffect(()=> {
        if (products === null) {
            fetch('http://localhost:8080/api/v1/products')
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setProducts(data)
                })
                .catch((e) =>console.log(e))
        }
    },[products])

    const productsContent = products?.map((product) => {
       return (<div key={product.name}>{product.name}</div>)
    })

    const content = !products ? <div>No products</div> : productsContent;

    return (
        <div>
            {content}
        </div>
    )
}
export default ProductApi