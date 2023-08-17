import { createContext, useContext, useState } from "react"
import { toast } from 'react-toastify';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {

  //store login session & update the state of login or not
  const [isLogged, setIsLogged] = useState(!!sessionStorage.getItem('cbId'))
  const [Clickable, setClickable] = useState(false)

  function startLoginSession(response) {
    if (response.data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(response.data.accessToken))
      sessionStorage.setItem("cbId", (response.data.user.id))
      sessionStorage.setItem("email", (response.data.user.email))
      setIsLogged(!!sessionStorage.getItem('cbId'))
    }
  }
  function showErrorLogin (message){
    toast(message, {
      position: "top-right",
      autoClose: 1200,
      closeButton: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    handleDoubleClick()
  }
  function fetchingError(message){
    toast.error(message, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

  }
  // to fix double Click on the Login
  function handleDoubleClick() {
    setClickable(true);
    setTimeout(() => setClickable(false), 2000)
  }

  const value = {
    startLoginSession,
    isLogged,
    setIsLogged,
    handleDoubleClick,
    Clickable,
    showErrorLogin,
    fetchingError
  }
  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  const context = useContext(SessionContext);
  return context;
}