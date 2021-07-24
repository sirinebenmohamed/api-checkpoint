import React from 'react';
import profileImage from '../assets/avatar.jpg';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'; 
import { Link } from 'react-router-dom';
import '../App.css';


const UserCard = ({ user }) => {
    return (
    <div className='col-md-4 mt-3'>        
        <div className='card' style={{ width: '18rem;' }}>
            <img src={profileImage} className='card-img-top' alt='profile'  />
            <div className='card-body'>
                <h5 className='card-title'>{user.name}</h5>
                <h5 className='card-title'>{user.email}</h5>
                <h5 className='card-title'>{user.phone}</h5>
                <Link to={`/profile/${user.id}`}>
                    <button className="card-btn">Details </button>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default UserCard;