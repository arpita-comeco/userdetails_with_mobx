import React from "react";
import {observer} from 'mobx-react-lite';

const UserDetails = (props) =>{
    const store= props.store
    console.log('store',store)
    return(
        <div>
            <h4>UserDetails</h4>
            <p><strong>id- </strong>{store.userInfo.id}</p>
            <p><strong>name- </strong>{store.userInfo.name}</p>
            <p><strong>skills</strong></p>
            {store.userInfo.skills.map((skill,idx)=>{
                    return <p key={idx}> -> {skill}</p>
            })}
        </div>
    )
}
export default observer(UserDetails);