import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../store/auth-context'
import classes from './DashBoardHeader.module.scss'

export const DashboardHeader = () => {
    const { signout, currentUser } =  useAuth();
    const navigate = useNavigate()
     const buttonHandler = async () =>{
        try{
            await signout()
            navigate("/")
            
        } catch(error: any){
            console.log(error.message)
        }
     }
  return (
    <header className={classes.header}>
        <h2 className={classes["nav-heading"]}>Holvada</h2>
        <p>{currentUser?.email}</p>
        <button onClick={buttonHandler}>Sign out</button>
    </header>
  )
}
