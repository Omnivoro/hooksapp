import React, {useState} from 'react';

const NewSongForm = ({addSong}) =>{
	
	const [title, setTitle] = useState('');
	
	const updateTitle = (e) =>{
		setTitle(e.target.value);
	}
	
	const handleSubmit = (e) =>{
		e.preventDefault();
		addSong(title);
		setTitle('');
	}
	
	return (<form onSubmit={handleSubmit}>
				<label>Add a song</label>
				<input type="text" value={title} required onChange={updateTitle}/>
			 	<input type="submit" value="add song"/>
            </form>		
	)
}

export default NewSongForm;