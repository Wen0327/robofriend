import React from "react";

const Card = (props) =>{
    const{name, email, id} = props
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            {/* use backticks(`) instead of double quote(") */}
            <img src={`https://robohash.org/${id}?size=300x300`} alt=""/>
            <div>
                <h2>{name}</h2>
                <p>{id}</p>
                <p>{email}</p>
            </div>
        </div> 
    );
}

export default Card;