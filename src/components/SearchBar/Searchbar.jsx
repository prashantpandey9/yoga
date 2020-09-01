import React, { Component } from 'react'
import './Searchbar.scss'

class Name extends Component {
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
class NamesContainer extends Component {
    render() {
        return (
            <li>
                {this.props.names.map(name => <Name name = {name}/>)}
            </li>
        )
    }
}
export class Searchbar extends Component {
    state = {
        names: [
          'Music', 'Language', 'Sports', 'Video Games', 'Khloe Kardashian', 'George Bush', 'Queen Elizabeth', 'Yeezy', 'Ivanka Trump', 'Leonardo DiCaprio', 
        ],
        searchTerm: ''
      }
    
      editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
      }
    
      dynamicSearch = () => {
        return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
      }
      
     content = () =>{
         return(
          <div>
              
          </div> 
         )
      }
    
    render() {
        return (
            <div>
                <div className='searchbarcontainer'>
                <i className='fa fa-search serachicon'></i><input type="text" className='searchbar'  onChange = {this.editSearchTerm} value = {this.state.searchTerm} placeholder='Search for city' onFocus={this.content}/>
                <ul> <NamesContainer names = {this.dynamicSearch()}/></ul> 
                </div>
            </div>
        )
    }
}

export default Searchbar
