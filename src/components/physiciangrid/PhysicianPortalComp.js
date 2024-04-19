import React from 'react'
import { useAuth } from '../../utils/auth'

function PhysicianGridComp() {
  const auth = useAuth();
  return (
    <div>Welcome {auth.user}</div>
  )
}

export default PhysicianGridComp