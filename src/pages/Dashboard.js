import '../App.css';
import { useState } from 'react'

const Dashboard = (props) => {
    const [ newForm, setNewForm ] = useState({
        username: "",
        advice: ""
    });
    const handleChange = (event) => {
        setNewForm(prevState => ({...prevState, [event.target.name]: event.target.value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createAdvice(newForm);
        setNewForm({
        username: "",
        advice: ""
        })
    }
    // const loaded = () => {
    //     return props.
    // }
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
<input type="submit" value="Add Advice" />
    </form>
</section>

    );
}
export default Dashboard;


// QUESTIONS FOR IAN
// 1. Why is it failing to fetch the URL?
// 2. Should the add advice be a seperate component?
// 3. 