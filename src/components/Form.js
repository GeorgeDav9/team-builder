import React, { useState } from "react"

const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    })

    const newHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value })
    }

    const submitForm = event => {
        event.preventDefault()
        props.addNewMember(member)
        setMember({ name: "", occupation: "", role: "" })
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Team Member</label>
            <input
                id='name'
                name='name'
                type='text'
                placeholder='Name'
                onChange={newHandler}
                value={member.name}
            />

            <label htmlFor='occupation'>My Job</label>
            <input
                id='occupation'
                name='occupation'
                type='text'
                placeholder='Occupation'
                onChange={newHandler}
                value={member.occupation}
            />

            <label htmlFor='role'>What I do</label>
            <input
                id='role'
                name='role'
                type='text'
                placeholder='Role'
                onChange={newHandler}
                value={member.role}
            />

            <button type='submit'>Add Member</button>
        </form>
    )
}

export default Form 