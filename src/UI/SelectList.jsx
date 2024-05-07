import {useEffect, useState} from "react";
import "./SelectList.css"

// eslint-disable-next-line react/prop-types
const SelectList = ({ products }) => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [totalEnergy, setTotalEnergy] = useState(0);

    useEffect(() => {
        calculateTotalEnergy();
    }, [selectedProducts]);
    
    const handleAddSelect = () => {
        setSelectedProducts([...selectedProducts, ""]);

    };
    const handleProductSelectChange = (index, productId) => {
        const updatedSelectedProducts = [...selectedProducts];
        updatedSelectedProducts[index] = productId;
        setSelectedProducts(updatedSelectedProducts);

    };
    const handleSelectChange = (event, index) => {
        const productId = event.target.value;
        handleProductSelectChange(index, productId);

    };

    const calculateTotalEnergy = () => {
        let total = 0;
        selectedProducts.forEach(productId => {
            // eslint-disable-next-line react/prop-types
            const selectedProduct = products.find(product => product.productId === productId);
            if (selectedProduct) {
                total += +selectedProduct.energy;
            }
        });
        setTotalEnergy(total);
    };

    return (
        <div className="select-container" >
            {selectedProducts.map((selectedProduct, index) => (
                <div key={index}>
                    <select
                        name={`product-${index}`}
                        id={`product-select-${index}`}
                        value={selectedProduct}
                        onChange={(event) => handleSelectChange(event, index)}
                    >
                        <option value="">--Please choose an option--</option>
                        {/* eslint-disable-next-line react/prop-types */}
                        {products.map(({ productId, name, energy }) => (
                            <option key={productId} value={productId}>
                                {name} - Energy: {energy}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
            <button className="btn-add" onClick={handleAddSelect}>+</button>
            <div>Total Energy: {totalEnergy}</div>
        </div>
    );
};
export default SelectList;