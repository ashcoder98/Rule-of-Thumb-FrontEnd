import '../App.css';
import { useState } from 'react'

const Dashboard = (props) => {
    const [ newForm, setNewForm ] = useState({
        username: "",
        advice: ""
    });
    return (
        
<section>
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        value={newForm.username}
        name="username" 
        placeholder="username"
        onChange={handleChange}/>


        <textarea 
        rows="10"
        cols="10"
        type="text" 
        value={newForm.advice}
        name="advice" 
        placeholder="type your advice here"
        onChange={handleChange}/>

    </form>
</section>

    );
}
export default Dashboard;