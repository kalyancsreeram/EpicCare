import React, {useState, useEffect} from 'react'
import { decodeToken } from '../../utils/tokenUtil';

function PhysicianGridComp() {
 
  const [user, setUser]= useState('');

  useEffect(() => {
    const token = decodeToken();     
    setUser(token.user.name);
  }, []);

  return (
    <div>Welcome {user}</div>
  )
}

export default PhysicianGridComp