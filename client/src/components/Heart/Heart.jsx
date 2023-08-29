import { useContext, useEffect, useState } from "react"
import { AiFillHeart } from "react-icons/ai";
import { useMutation } from "react-query"
import useAuthCheck from "../../hooks/useAuthCheck"
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext"
import { checkFavourites,updateFavourites } from "../../utils/common"
import { toFav } from "../../utils/api"


const Heart = () => {
  const [heartColor, setHeartColor] = useState("white");
  const {validateLogin} = useAuthCheck()


  





  const handleLike = () => {
    if(validateLogin())
    {
        
        setHeartColor((prev)=> prev === "#fa3e5f" ? "white": "#fa3e5f")
    }
}


  return (
    <AiFillHeart
      size={24}
      color={heartColor}
      onClick={(e) => {
        e.stopPropagation();
        handleLike();
      }}
    />
  );
};

export default Heart;
