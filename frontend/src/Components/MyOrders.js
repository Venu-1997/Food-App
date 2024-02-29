import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const MyOrders = () => {
    const [ordersData, setOrdersData] = useState({});

    const fetchMyOrder = async () => {
        await fetch("http://localhost:5070/api/orders/getOrders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json();
            console.log(response);
            await setOrdersData(response)
        })
    }

    useEffect(() => {
        fetchMyOrder()
    }, []);

    return (
        <>
            <NavBar />
            <div className='container'>
                <div className='row'>
                    {
                        ordersData ? Array(ordersData).map(data => {
                        return (
                            data.ordersData ?
                                data.ordersData.ordersData.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                    {
                                                        arrayData.orderDate ? 
                                                        <div className='m-auto mt-5'>{data = arrayData.orderDate}
                                                            <hr />
                                                        </div> 
                                                        :
                                                        <div className='col col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "140px", objectFit: "fill" }} />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.quantity}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        <span className='m-1'>{data}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >₹{arrayData.price}/-</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })
                                    )
                                }) : ""
                            )
                        }) : ""
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MyOrders;
