import React, { useEffect, useRef, useState } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';

const Card = ({foodData}) => {
    let dispatch = useDispatchCart();
    let cartData = useCart();
    const priceRef = useRef();
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");
    let options = foodData.options;
    let priceOptions = Object.keys(options);
    let finalPrice = quantity * parseInt(options[size]);
    const handleAddToCart = async() => {
        let food = [];
        for (const item of cartData) {
            if (item.id === foodData._id) {
                food = item;
                break;
            }
        }
        if (food.length !== 0) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: foodData._id, price: finalPrice, quantity: quantity });
                return;
            }
            else if (food.size !== size) {
                await dispatch({type: "ADD",id: foodData._id,img: foodData.img,name: foodData.name,price: finalPrice, quantity: quantity,size: size});
                return;
            }
            return;
        }
        await dispatch({type: "ADD",id: foodData._id,img: foodData.img,name: foodData.name,price: finalPrice, quantity: quantity,size: size});
    }
    useEffect(() => {
        setSize(priceRef.current.value);
    },[]);



    return (
        <div className="card mt-3" style={{"width": "18rem", "minHeight": "400px"}}>
            <img src={foodData.img} className="card-img-top" alt="..." style={{height:"220px", objectFit:"fill"}}/>
            <div className="card-body">
                <h5 className="card-title">{foodData.name}</h5>
                <div className="container w-100">
                    <select className="m-2 h-100 bg-warning rounded"onChange={(e) => setQuantity(e.target.value)}>
                        {
                            Array.from(Array(10),(e,i) => {
                                return (
                                    <option key={i+1} value={i+1}>{i+1}</option>
                                )
                            })
                        }
                    </select>
                    <select className="m-2 h-100 bg-warning rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                        {
                            priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })
                        }
                    </select>
                    <div className="d-inline h-100 fs-5">₹{finalPrice}/-</div>
                </div>
                <hr></hr>
                <button className="btn btn-warning justify-center ms-2" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card;
