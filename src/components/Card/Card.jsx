import React, {useContext, useState, useEffect} from "react";
import "./card.css";
import Ctx from "../../Ctx";

function Card ({name, image, likes, title, text, _id}) {
    const {user, setFavorites, api, setPosts, setVisiblePosts} = useContext(Ctx);
    const [like, setLike] = useState(likes && likes.includes(user._id));
    const [flag, setFlag] = useState(false);
    const update = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setFlag(true);
        setLike(!like); // false => true
        api.setLikePost(_id, like) // false
            .then(res => res.json())
            .then(data => {
                setFavorites(prev => {
                    let arr = prev.filter(el => el._id === _id);
                    return arr.length > 0 ? 
                        prev.filter(el => el._id !== _id) : 
                        [...prev, data]
                })
                setPosts(prev => prev.map(el => {
                    if (el._id === data._id) {
                        return data;
                    } else {
                        return el;
                    }
                }));
                setVisiblePosts(prev => prev.map(el => {
                    if (el._id === data._id) {
                        return data;
                    } else {
                        return el;
                    }
                }));
            })
    }


    return <div className="card">
        <img src={image} alt={name} style={{height: "100px"}}/>
        {title}
        <p className="text">{text}</p>
        <span className="card__heart" onClick={update}>
            {
                like 
                ? <i className="fa-solid fa-heart"></i>
                : <i className="fa-regular fa-heart"></i>
            }
        </span>
    </div>
}
export default Card