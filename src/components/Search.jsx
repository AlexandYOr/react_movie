import React, { useState } from "react"

const movieGroups = ['All', 'Movie', 'Series']


export function Search(props) {
    const [search, setSearch] = useState('')
    const [selectedGroup, setSelectedGroup] = useState('All')
    const onChange = (e) => {
        setSearch(e.target.value)
    }
    const onClick = () => {
        props.handleSearch(search, selectedGroup)
    }
    const onGroupClick = (e) => {
        setSelectedGroup(e.target.name)
        console.log(e.target.name)
    }
    return (
        <div className="search-pannel">
            <div className="row search-wrapper">
                <div className="input-field">
                    <input
                        placeholder='Search'
                        type="search"
                        className="validate"
                        value={search}
                        onChange={onChange}
                    />
                </div>
                <button onClick={onClick} className="btn waves-effect waves-light">Search
                    <i className="material-icons right"></i>
                </button>
            </div>
            <div className="radio-buttons">
                {movieGroups.map((group) => 
                <label key={group}>
                    <input className="with-gap" name={group} type="radio" checked={selectedGroup === group} onChange={onGroupClick}/>
                    <span>{group}</span>
                </label>)}
            </div>
        </div>


    )
}