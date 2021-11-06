import React, { useContext, useState } from "react";
import { Restaurent } from "../data/RestaurentData";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [rest, setRest] = useState(Restaurent);

  const handleLogin = () => {
    setLogin(!login);
  };

  const handleSignup = () => {
    setSignup(!signup);
  };

  const handleAllRest = () => {
    const dd = rest.sort(function (a, b) {
      if (a.id < b.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
    setRest([...rest], { dd });
  };

  const handleDtime = () => {
    const dd = rest.sort(function (a, b) {
      if (a.data.d_time < b.data.d_time) {
        return -1;
      }
      if (a.data.d_time > b.data.d_time) {
        return 1;
      }
      return 0;
    });
    setRest([...rest], { dd });
  };

  const handleRating=()=>{
    const dd = rest.sort(function (a, b) {
        if (a.data.rating > b.data.rating) {
          return -1;
        }
        if (a.data.rating < b.data.rating) {
          return 1;
        }
        return 0;
      });
      setRest([...rest], { dd });
  }

  const handleCostLowToHigh=()=>{
    const dd = rest.sort(function (a, b) {
      if (a.data.tag < b.data.tag) {
        return -1;
      }
      if (a.data.tag > b.data.tag) {
        return 1;
      }
      return 0;
    });
    setRest([...rest], { dd });
  }

  const handleCostHighToLow=()=>{
    const dd = rest.sort(function (a, b) {
      if (a.data.tag > b.data.tag) {
        return -1;
      }
      if (a.data.tag < b.data.tag) {
        return 1;
      }
      return 0;
    });
    setRest([...rest], { dd });
  }

  return (
    <AppContext.Provider
      value={{
        login,
        handleLogin,
        signup,
        handleSignup,
        rest,
        handleDtime,
        handleAllRest,
        handleRating,
        handleCostLowToHigh,
        handleCostHighToLow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalLoginContext = () => {
  return useContext(AppContext);
};
