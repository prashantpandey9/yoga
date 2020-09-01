import React, { Component } from 'react'
import './Searchbar.scss'
import { Link } from 'react-router-dom'
class Name extends Component {
    render() {
        return (
          <li>
            <Link to={this.props.name} style={{color: 'rgba(0,0,0,0.8 )'}}> 
              {this.props.name}
            </Link>
          </li>
            
                
            
        )
    }
}
class NamesContainer extends Component {
    render() {
        return (
            <ul>
                {this.props.names.map(name => <Name name = {name}/>)}
            </ul>
        )
    }
}
NamesContainer.defaultProps = { name: 'Music' };
export class Searchbar extends Component {
    state = {
        names: [
          'Music', 'Language', 'Sports', 'Video Games', 'Khloe Kardashian', 'George Bush', 'Queen Elizabeth', 'Yeezy', 'Ivanka Trump', 'Leonardo DiCaprio', 
        ],
        searchTerm: '',
      }
    
      editSearchTerm = (e) => {
        this.setState({searchTerm: e.target.value})
        document.getElementById('ul').style.display = "block";
      }
    
      dynamicSearch = () => {
        return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
      }
      
     focus = () =>{
        document.getElementById('ul').style.display = "block";
      }
      blur = () =>{
        document.getElementById('ul').style.display = "none";
      }
    
    render() {
        return (
            <div>
                <div className='searchbarcontainer' onMouseLeave ={this.blur}>
                <i className='fa fa-search serachicon'></i><input type="text" className='searchbar'  onFocus= {this.focus} onChange = {this.editSearchTerm} value = {this.state.searchTerm} placeholder='Search for city'  />
                <div  id='ul'> <NamesContainer names = {this.dynamicSearch()}/></div> 
                </div>
            </div>
        )
    }
}

export default Searchbar
