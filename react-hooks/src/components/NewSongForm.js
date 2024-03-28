import {useState} from "react";


const NewSongForm = () => {
    const [title, setTitle] = useState('')
    return (
        <form onSubmit={() => {}}>
            <label htmlFor="">Song Name:</label>
            <input type="text" required value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            <input type="submit" value={'Add song'}/>
        </form>
    )
}

export default NewSongForm;