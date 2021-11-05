import '../App.css';
import { useState } from 'react'

const Dashboard = (props) => {
    const [ newForm, setNewForm ] = useState({
        username: "",
        advice: ""
    });
    const handleChange = (event) => {
        setNewForm(prevState => ({...prevState, [event.target.name]: event.target.value }));
        console.log(newForm)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createAdvice(newForm);
        setNewForm({
        username: "",
        advice: ""
        })
    };
const loaded = () => {
console.log(props.advice)
    return props.advice.map((advice) => (
        
        <div key={advice._id} className="advicecard">
            <h2>{advice.username}</h2>
            <p>{advice.advice}</p>
        </div>
    ))
}
    const loading = () => {
        return <h1>Have no fear..Advice is on the way..</h1>
    };

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
        rows="5"
        cols="10"
        type="text" 
        value={newForm.advice}
        name="advice" 
        placeholder="type your advice here"
        onChange={handleChange}/>
<input type="submit" value="Add Advice" />
    </form>
     {props.advice ? loaded() : loading()}
</section>
 
 
 );
}
export default Dashboard;


// QUESTIONS FOR IAN
// 1. Why is it failing to fetch the URL?
// 2. Should the add advice be a seperate component?
// 3. 