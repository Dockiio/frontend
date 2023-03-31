import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import DefaultLayout from "../layout/defaultLayout";
import { LogoAlt } from "../assets/index";

//firebase
import {
  auth, 
  db, 
  doc,
  setDoc,
  signInWithPopup,
  signInWithEmailAndPassword,
  provider
  
} from "../firebase/firebase.config";
  
import Toast from "../components/toast/toast";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("" || null);
  const navigate = useNavigate();
  const validateForm = () => {
    let isValid = true;
    if ( email == "" || password == "" ) {

      isValid = false;
      setMessage("invalid credential");
      setIsLoading(false);

    }

    return isValid;

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowToast(true);
    if (validateForm()) {
      signInWithEmailAndPassword(
        auth,
        email,
        password
      )
        .then(async(userCredential) => {
          setMessage("success");
          const user = userCredential.user;
          localStorage.setItem("docRef", user.uid);
          navigate("/chatbot");
        })
        .catch((err) => {
               
          if (err?.message == "Firebase: Error (auth/wrong-password).") {
            setMessage("wrong password/email");
            setIsLoading(false);
          }
          else{
            setMessage(err?.message);
            setIsLoading(false);
          }
        });
    }
  };

  const handleGoogle = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then(async(result) => {
        setMessage("success");
        const photo = result.user.photoURL;
        const displayName = result.user.displayName;
        const email = result.user.email;
        const uid = result.user.uid;
        var fullName = displayName.split(" ");

        // Extract the first word
        var firstName = fullName[0];
        const userDocRef = doc(db, "users", uid);

        const userData = {
          email: email,
          username: firstName
        };

        localStorage.setItem("docRef", uid);
        return setDoc(userDocRef, userData);

      })
      .then(() => { 
        navigate("/chatbot");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error || errorMessage);
      });
  };
  const handleCloseToast = () => {
    setShowToast(false);
  };
  return (
    <DefaultLayout>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="w-1/2 h-[40rem] bg-white bg-opacity-30 shadow-xl backdrop-filter backdrop-blur-2xl rounded-xl">
          <div className="flex justify-center items-center flex-col gap-1">
            <img src={ "https://res.cloudinary.com/phantom1245/image/upload/v1679974349/dockii/logoAlt_wjktd5.png" || LogoAlt } alt="" className="w-20"/>
            <h2 className="text-xl text-[#1A0634] font-tomorrow font-semibold">Welcome Back</h2>
          </div>

          <form action="" className="px-10 pt-14">
                    
            <div className="w-full">
              <label htmlFor="email" className="text-md text-[#302F5C] font-tomorrow font-semibold pl-2">Email</label>
              <input 
                type="email" 
                placeholder="example@gmail.com" 
                className="mt-2 pl-3 w-full py-4 rounded-2xl bg-[#F7F5F5] outline-none border-none"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
                    
            <div className="w-full mt-6">
              <label htmlFor="password" className="text-md text-[#302F5C] font-tomorrow font-semibold pl-2">Password</label>
              <input 
                type="password" 
                placeholder="*******" 
                className="mt-2 pl-3 w-full py-4 rounded-2xl bg-[#F7F5F5] outline-none border-none"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="py-5">
              <h4 className="text-md text-[#302F5C] font-tomorrow font-semibold pl-2 text-end" >Forgot Password</h4>
            </div>
            <div>
              <button 
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full py-4 rounded-xl bg-[#5664E5] font-tomorrow  font-bold text-white">
                {isLoading ? "please wait..." : "Login"}
              </button>
            </div>
            <div className="text-center text-[#7F7F86] font-tomorrow  font-bold my-3 text-xl">or</div>
            <div>
              <button onClick={handleGoogle} className="w-full py-4 rounded-xl bg-transparent border-2 border-[#302F5C] font-tomorrow  font-bold text-[#302F5C] capitalize">
                <div className="flex justify-center items-center">
                  <img className="mr-2" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" width="20" height="20" />
                  <span>Sign in with Google</span>
                </div>
              </button>
                        
            </div>
            <div className="pt-4">
              <h4 className="text-md text-black font-tomorrow font-semibold pl-2 text-center" >Don't have an account? 
                <span className="text-[#302F5C]">
                  <NavLink to="/register"> Register</NavLink>
                </span>
              </h4>
            </div>
          </form>
                
        </div>
        {showToast && (
          <Toast message={message} onClose={handleCloseToast} />
        )}
      </div>
    </DefaultLayout>
  );
}
