

const Main = ({ users , handleClickUser }) => {

    return (
        <>

            <div className="main-content">
                <div className="items-header">
                    <div className="id">ID</div>
                    <div className="first">First</div>
                    <div className="last">Last</div>
                    <div className="email">Email</div>
                    <div className="avatar">Avatar</div>
                </div>
                {users.map((card, index) => {
                    return (
                        <div key={index} className="item" onClick={handleClickUser}>
                            <div className="item-id">{card.id}</div>
                            <div className="item-first">{card.first_name}</div>
                            <div className="item-last">{card.last_name}</div>
                            <div className="item-email">{card.email}</div>
                            <div className="item-avatar">
                                <img src={card.avatar} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>


        </>
    );
}

export default Main;