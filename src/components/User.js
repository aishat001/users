import { useState } from "react"
import UserDetails from "./UserDetails"

const User = ({ users }) => {
    const [showDetails, setShowDetails] = useState(false)
    const [selected, setSelected] = useState(false)

    const handleShowDetails = (user) => {
        setSelected(user)
        setShowDetails(!showDetails)

    }


    return (

        <div className="userProfile d-flex w-100 flex-wrap justify-content-center">
            {Object.keys(users).map((user, index) => {

                return <div className="user px-1 py-4 m-3 mb-4" key={index}>
                    <h1>{users[user].name}</h1>
                    <p>{users[user].company.bs}</p>
                    {
                        !showDetails && <button className="btn border shadow" onClick={() => handleShowDetails(users[user].name)}> Show details</button>

                    }




                    {selected === users[user].name ?

                        showDetails &&
                        <>
                            <button className="btn border shadow" onClick={() => handleShowDetails(users[user].name)}>close details</button>

                            <UserDetails users={users[user]} key={index} />

                        </>
                        :
                        showDetails && <button className="btn border shadow" onClick={() => handleShowDetails(users[user].name)}> Show details</button>


                    }


                </div>

            })}

        </div>
    )
}


export default User;