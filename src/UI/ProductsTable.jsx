import {useEffect, useState} from "react";
import "./ProductTable.css"

const ProductsTable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [products]);
    return (
        <div className="products-table-container">
            <h1 className="table-title">Products Table</h1>
            <table className="products-table">
                <thead>
                <tr>
                    {['Product ID', 'Name', 'Category', 'Uses', 'Energy', 'Carbohydrates', 'Fat', 'Protein'].map(header => (
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