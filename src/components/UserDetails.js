import React,{useState} from "react";
import {observer} from 'mobx-react-lite';

const UserDetails = (props) =>{
    const store= props.store
    const [isEditNameClicked, setIsEditNameClicked] = useState(false)
    const [isSkillsAdded, setIsSkillsAdded] = useState(false)
    const [newName, setNewName] = useState('')
    const [newSkill, setNewSkill] = useState('')
    // console.log('store',store)
    const handleEditName= () => {
        setIsEditNameClicked(true)
    }
    const handleUpdateName=() => {
        store.updateUser(newName)
        setNewName('')
    }
    const handleNameChange=(e) => {
        setNewName(e.target.value)
    }
    const handleSkillChange=(e) => {
        setNewSkill(e.target.value)
    }
    const handleAddSkill=() => {
        store.addSkills(newSkill)
        setNewSkill('')
    }
    return(
        <div>
            <h4>UserDetails</h4>
            <p><strong>id- </strong>{store.userInfo.id}</p>
            <p><strong>name- </strong>{store.userInfo.name}</p>
            <button onClick={handleEditName}>Edit Name</button>
            {isEditNameClicked && <input type='text' value={newName} onChange={handleNameChange} /> }
            {isEditNameClicked && <button onClick={handleUpdateName}>Update Name</button> }
            <p><strong>skills</strong></p>
            {store.userInfo.skills.map((skill,idx)=>{
                    return <p key={idx}> -> {skill}</p>
            })}
            <input type='text' value={newSkill} onChange={handleSkillChange} />
            <button onClick={handleAddSkill}>Add Skill</button>
        </div>
    )
}
export default observer(UserDetails);