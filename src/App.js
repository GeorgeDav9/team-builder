import React, { useState } from "react"
import Form from "./components/Form"
import Member from "./components/Member"

import data from "./components/data"
import "./App.css"

function App() {
    const [members, setMembers] = useState(data)

    const addNewMember = member => {
        setMembers([...members, member])
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <h2>Member List</h2>
                <div className='form-box'>
                    <Form addNewMember={addNewMember} />
                    <Member memberList={members} />
                </div>
            </header>
        </div>
    )
}

export default App