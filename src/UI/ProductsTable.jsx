import {useEffect, useState} from "react";
import "./ProductTable.css"
import SelectList from "./SelectList.jsx";
import "./SelectList.css";

const ProductsTable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className="products-table-container">
            <SelectList products={products} />
            <table className="products-table">
                <thead>
                <tr>
                    {['ID', 'Nazwa', 'Kategoria', 'Zastosowania', 'Energia', 'Carbo', 'Tłuszcz', 'Białko'].map(header => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {products.map(({ productId, name, category, uses, energy, carbohydrates, fat, protein }) => (
                    <tr key={productId}>
                        <td>{productId}</td>
                        <td>{name}</td>
                        <td>{category}</td>
                        <td>
                            <ul>
                                {uses.map(use => (
                                    <li key={use}>{use}</li>
                                ))}
                            </ul>
                        </td>
                        <td>{energy}</td>
                        <td>{carbohydrates}</td>
                        <td>{fat}</td>
                        <td>{protein}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsTable;