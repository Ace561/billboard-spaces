// UserContext.js

import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export default function UserProvider({ children }) {
    const [userDetails, setUserDetails] = useState(null);

    return (
        <UserContext.Provider value={{ userDetails, setUserDetails }}>
            {children}
        </UserContext.Provider>
    );
    ;
}
