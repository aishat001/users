


const UserDetails = ({users}) => {


    return (

        <div className="text-start flex flex-col px-3 justify-content-center mt-5">
    <h2>General Info</h2>
                 <p className="d-flex justify-content-between"><strong>Website</strong> {users.website}</p>
                 <p className="d-flex justify-content-between"><strong>Address</strong> {"     "}{users.address.suite}, {users.address.street}, {users.address.city}</p>
                 <p className="d-flex justify-content-between"><strong>Email</strong> {users.email}</p>
                 <p className="d-flex justify-content-between"><strong>Phone</strong> {users.phone}</p>
        
        </div>
    )
}

export default UserDetails;