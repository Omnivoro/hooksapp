import React, {useState, useEffect} from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSongForm';

const SonsList = () => {
	const [songs, setSongs] = useState([{title: 'almost home', id: 1},
									 	{title: 'this wild darkness', id: 2},
									 	{title: 'memory gospel', id: 3}])
	
	const [age, setAge] = useState(20);
	
	
	const addSong = (title) =>{
		setSongs([...songs, {title, id: uuidv1()}])
	}
	
	useEffect(()=>{
		console.log('use hooks effect with songs', songs);
	},[songs]);
	
	useEffect(()=>{
		console.log('use hooks effect with age', age);
	},[age]);
	
	
    return ( <div className="song-list">
        <ul>
            {songs.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
		<NewSongForm addSong={addSong}/>
		<button onClick={()=>(setAge(age + 1))}>Add 1 to age = {age}</button>
    </div> );
}
 
export default SonsList;