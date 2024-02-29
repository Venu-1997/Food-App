import React from 'react';
import { useCart, useDispatchCart } from './ContextReducer';
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
    let cartData = useCart();
    let dispatch = useDispatchCart();
    let totalPrice = cartData.reduce((total,food) => total + food.price , 0);
    if(cartData.length === 0){
        return(
            <div>
                <div className="m-5 w-100 text-center fs-3">The Cart is Empty!!</div>
            </div>
        )
    }

    const handleCheckOut = async() => {
        let userEmail = localStorage.getItem("userEmail");
        let res = await fetch("http://localhost:5070/api/orders/ordersData",{
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ ordersData: cartData, email: userEmail , orderDate: new Date().toDateString() })
        });

        if(res.status === 200){
            dispatch({type: "DROP"});
        }
    }
    return (
        <div>
            <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
                <table className='table table-hover'>
                    <thead className='text-warning fs-4'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Option</th>
                            <th scope="col">Amount</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartData.map((food,index) => (
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td >{food.name}</td>
                                    <td >{food.quantity}</td>
                                    <td >{food.size}</td>
                                    <td >{food.price}</td>
                                    <td ><button type='button' className='btn p-0'><FaTrashAlt onClick={() => dispatch({ type: "REMOVE", index: index })} /></button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div>
                    <h1 className="fs-2">Total Price: {totalPrice}/-</h1>
                </div>
                <div>
                    <button className="btn bg-warning mt-5" onClick={handleCheckOut}>CheckOut</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
