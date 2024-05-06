import './App.css'
import ProductsTable from "./UI/ProductsTable.jsx";
import Header from "./UI/Header.jsx";

function App() {
  return (
    <>
        <Header/>
        <ProductsTable/>
        <footer className="footer">
            <small>© Karol, Olga, Ernest, 2024</small>
            <br></br>
        </footer>

    </>
  )
}

export default App