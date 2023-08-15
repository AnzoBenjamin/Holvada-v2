import React, { useEffect, useState } from "react";
import { getDocs, doc, collection, query } from "firebase/firestore";
import { useAuth } from "../../../store/auth-context";
import { db } from "../../../config/firebase";

const AccountDetails: React.FC = () => {
  const { currentUser } = useAuth();
  const [userInfo, setUserInfo] = useState<{}|null>({});

  const getUserInfo = async () => {
    const email = currentUser?.email || "";
    const userDocRef = doc(db, "users", email);
    const infoCollectionRef = collection(userDocRef, "info");
    try {
      const q = query(infoCollectionRef);
      const querySnapshot = await getDocs(q);
      const transactionsData = querySnapshot.docs.map((doc) => doc.data());
      setUserInfo(transactionsData[0])
      console.log(transactionsData)
      
    } catch (error) {
      console.error("Error fetching user info:", error);
      setUserInfo(null);
    }
  };

  useEffect(() => {
    (async () => {
      await getUserInfo();
    })();
  }, [currentUser]);

  return (
    <div>
      {userInfo ? (
        <div>
          <h2>User Info:</h2>
          {/* Add other user info fields here */}
        </div>
      ) : (
        <p>No user info available.</p>
      )}
    </div>
  );
};

export default AccountDetails;
