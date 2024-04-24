import './App.css'
import ProductApi from "./api/ProductApi.jsx";
import ProductsTable from "./UI/ProductsTable.jsx";

function App() {
  return (
    <>
        <ProductsTable/>
        <ProductApi/>
        <footer className="footer">
            <small>© Karol, Olga, Ernest, 2024</small>
            <br></br>
        </footer>

    </>
  )
}

export default App