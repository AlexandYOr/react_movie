import { Cards } from '../components/Cards'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'
import React from 'react'

const API_KEY = process.env.REACT_APP_API_KEY

export class Main extends React.Component {
    state = {
        cards: [],
        loading: true
    }
    
    componentDidMount = () => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix&type=`)
        .then((response) => response.json())
        .then(data => 
            this.setState((state) => {
            return {
                ...state,
                cards: data.Search ?? [],
                loading: false   
            }
        }))
    }

    handleSearch = (searchValue, type) => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}&type=${type === 'All' ? '' : type}`)
        .then((response) => response.json())
        .then(data => 
            this.setState((state) => {
            return {
                ...state,
                cards: data.Search ?? [],
                loading: false   
            }
        }))
    }

    
    render() {
        return <main className="container">
        <Search handleSearch={this.handleSearch}/>
        <div className="content">
            {this.state.loading ? <Preloader/> : <Cards cards={this.state.cards}/> }
        </div>
    </main>
    }
    
}

