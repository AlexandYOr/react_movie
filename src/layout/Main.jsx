import { Cards } from '../components/Cards'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'
import React, { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_API_KEY

export function Main () {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(true)
    
    // componentDidMount = () => {
    //     fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix&type=`)
    //     .then((response) => response.json())
    //     .then(data => 
    //         this.setState((state) => {
    //         return {
    //             ...state,
    //             cards: data.Search ?? [],
    //             loading: false   
    //         }
    //     }))
    //     .catch((err) => {
    //         console.log(err)
    //         this.setState({loading: false})
    //     })
    // }

    const handleSearch = (searchValue, type) => {
        setLoading(true)
        // this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}&type=${type === 'All' ? '' : type}`)
        .then((response) => response.json())
        .then((data) => {
            setCards(data.Search ?? [])
            setLoading(false)
        }
        //     this.setState((state) => {
        //     return {
        //         ...state,
        //         cards: data.Search ?? [],
        //         loading: false   
        //     }
        // }
        )
        .catch((err) => {
            console.log(err)
            // this.setState({loading: false})
            setLoading(false)
        })
    }

    useEffect(()=> {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix&type=`)
        .then((response) => response.json())
        .then((data) => {
            setCards(data.Search ?? [])
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
            // this.setState({loading: false})
            setLoading((loading) => loading = false)
        })
    }, [])
    
        return (
        <main className="container">
        <Search handleSearch={handleSearch}/>
        <div className="content">
            {loading ? <Preloader/> : <Cards cards={cards}/> }
        </div>
    </main>
    )    
}

