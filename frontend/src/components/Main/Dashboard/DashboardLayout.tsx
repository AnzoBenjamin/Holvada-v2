import React, { ReactNode } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardNav } from "./DashboardNav";
import classes from './DashboardLayout.module.scss';
import { useAuth } from "../../../store/auth-context";

interface DashboardLayoutProps{
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const { currentUser, signout } = useAuth();

    const buttonHandler = async()=>{
        try{
            await signout();
        }
        catch(error){
            console.log(error.message)
        }
    }
  return (
    <div>
      <div className={classes.layout}>
        <DashboardNav />
        <div className={classes.main}>
            <div className={classes["main-top"]}>

            <h3 className={classes.email}>{currentUser?.email}</h3>
            <button className={classes.btn} onClick={buttonHandler}>Sign out</button>
            </div>
            {children}
            </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
