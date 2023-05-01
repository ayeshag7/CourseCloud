import { Routes, Route } from "react-router-dom";
import { HomePage, ProductList, ProductDetail, CartPage, Login, Register, OrderPage, DashboardPage } from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes>}/>
            <Route path="/order-summary" element={<ProtectedRoutes><OrderPage /></ProtectedRoutes>}/>
            <Route path="/dashboard" element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
        </Routes> 
    </div>
  )
}
