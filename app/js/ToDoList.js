import React, {useState} from "react";

function ToDoList() {
    const [list, setList] = useState([
        {
            id: 1,
            name: 'Kupić mleko',
            done: false
        },
        {
            id: 2,
            name: 'Zrobić prezentację',
            done: true
        }
    ])
    const [inputValue, setInputValue] = useState('')

    const handleClick = e => {
        e.preventDefault()
        setList(prevState => [
            ...prevState,
            {
                id: list.length + 1,
                name: inputValue,
                done: false
            }
        ])
        setInputValue('')
    }

    const handleDone = id => {
        const listCopy = [...list]
        listCopy.forEach(task => {
            if (task.id === id) {
                task.done = !task.done
            }
        })
        setList(listCopy)
    }

    return (
        <>
            <div className="toDoList">
                <form className="header">
                    <h2>Twoja lista zadań</h2>
                    <input type="text" value={inputValue} onChange={event => setInputValue(event.target.value)} placeholder="np. Zrobić zakupy"/>
                    <button onClick={handleClick} className="btn-add">Dodaj</button>
                </form>

                <ul>
                    {list.map(task => <li key={task.id} onClick={() => handleDone(task.id)} className={task.done === true ? 'done' : undefined}>{task.name}</li>)}
                </ul>
            </div>
        </>
    )
}

export default ToDoList
