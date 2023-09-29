import React, {useState, useEffect} from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import Home from "../../pages/home";
import { useNavigate} from "react-router-dom";

export default function SignInGoogle(){
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const handleClick = () => {
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)

            navigate("/")
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    },[])

    return(
        <div>
            {value?<Home/>:
            <button onClick={handleClick}>Signin With Google</button>
    }
        </div>
    )
}