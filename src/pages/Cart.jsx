import React, { Profiler } from "react";
import { useContext } from "react";
import { Table } from "react-bootstrap";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
    const { cart } = useContext(CartContext);
    console.log(cart);
    return (
        <div className="container">
            <div className="cart-body">
                <h2>Carrito</h2>
                <Table
                    className="align-middle caption-top text-center"
                    striped
                    bordered
                    hover
                    size="lg"
                >
                    <thead>
                        <tr>
                            <th>Cantidad</th>
                            <th>Nombre</th>
                            <th>Precio Unitario</th>
                            <th>Producto</th>
                            <th>Precio Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((prod) => {
                            return (
                                <tr>
                                    <td>{prod.q}</td>
                                    <td>{prod.title}</td>
                                    <td>${prod.price}</td>
                                    <td>
                                        <img className="cart-img" src={prod.image} alt="" />
                                    </td>
                                    <td>${parseFloat(prod.q * prod.price).toFixed(2)}</td>
                                    <td>
                                        <Link>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="delete-icon bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                {
                    cart.length > 0 && <div className="text-center">
                        <button className="cart-button m-2">Finalizar Compra</button>
                        <button className="cart-button">Vaciar carrito</button>
                    </div>
                }
                {
                    cart.length === 0 && <p className="text-center">no hay items en el carrito :(</p>
                }
            </div>
        </div>
    );
};

export default Carrito;
