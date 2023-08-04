import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
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
        <Link to={"/account/details"}> <img src="/account.png" alt="Account" /> </Link>
    </header>
  )
}
