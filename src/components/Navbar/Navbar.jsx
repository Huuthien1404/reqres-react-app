
import { useEffect, useState } from "react";
import Main from "../Main/Main";
import "./navbar.css";
import axios from "axios";
const Navbar = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [users, setUsers] = useState([]);
    const [userClicked, setUserClicked] = useState(false);
    const [userDetail, setUserDetail] = useState([]);
    useEffect(() => {
        async function getData() {
            if (pageNumber === 1 || pageNumber === 2 || pageNumber === 3) {
                const res = await axios.get("https://reqres.in/api/users?page=1");
                return res;
            }
            else {
                const res = await axios.get("https://reqres.in/api/users?page=2");
                return res;
            }
        }
        getData().then(res => {
            setUsers(res.data.data.filter(item => item.id === pageNumber * 2 || item.id === pageNumber * 2 - 1));
        })
    }, [pageNumber]);
    const handleClickHome = () => {
        setUserClicked(false);
    }
    return (
        <>
            <nav className="navbar">
                <div className="home" onClick={handleClickHome}>Home</div>
                <div className="search-container">
                    <input type="text" className="search-text" placeholder="Search" />
                    <button className="search-btn">Search</button>
                </div>
            </nav>
            <div className="content-container">
                <div className="side">
                    <div className="side-title">Side</div>
                    <div className="side-content">...</div>
                </div>
                <div className="main">
                    <div className="main-title">Main</div>
                    {userClicked ? (
                        userDetail.map((item, index) => {
                            return (
                                <div key={index} className="user-container">
                                    <div className="user-name">{item.first_name} {item.last_name}</div>
                                    <div className="user-img">
                                        <img src={item.avatar} alt="" />
                                    </div>
                                    <div className="user-email"></div>{item.email}</div>
                            )
                        })
                    ) : (
                        <>
                            <Main users={users} handleClickUser={(e) => {
                                setUserDetail(users.filter(item => item.id === Number(e.target.firstChild.innerHTML)));
                                setUserClicked(true)
                            }} />
                            <div className="pages">
                                {Array(6).fill(null).map((it, index) => {
                                    return (
                                        <div key={index} className="page" style={pageNumber === index + 1 ? {
                                            color: "white",
                                            backgroundColor: "#0d6efd",
                                        } : {
                                            color: "#0d6efd",
                                            backgroundColor: "white",
                                        }} onClick={(e) => { setPageNumber(Number(e.target.innerHTML)) }}>{index + 1}</div>
                                    )
                                })}
                            </div>
                        </>
                    )}

                </div>

            </div>
        </>
    );
}

export default Navbar;