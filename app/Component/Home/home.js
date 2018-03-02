import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Input, Button, Segment, Icon } from 'semantic-ui-react'

const InputExampleIcon = () => (
   
  <Input 
  className='searchBar'
  icon='search' placeholder='Search...' />
   
)
const ButtonAdd = () =>{
    
    return(
        <Link to='/add'>
    <Button circular icon='add'
    color='twitter'
    />
    </Link>
    )
}

const Notelist =(props) =>{

  
    return(
        
        <Segment.Group>
            
            {props.notes.map(note=>{
                return(
                    <Link to={{
                        pathname:'/read', 
                        state:{title:note.title, 
                        text:note.bodytext, 
                        id:note.id
                        }
                    }}
                    
                    >
                    <Segment className='gg'
                    key={note.id}
                    
                    >
                        <span>{note.title}</span>
                        
                    </Segment>
                    </Link>
                )
            })}
        </Segment.Group>
      
    )
}
  






 class Home extends Component{
 
  
    render(){
        const {notes} = this.props

        return(
            <div className='SearchNote'>
         <InputExampleIcon/>
         <ButtonAdd />
         {notes.length === 0 ?
         <h1 style={{'textAlign':'center'}}>The list is empty</h1>
         :
         <Notelist 
         notes={notes}
         />
         }
          </div>
        )
    }
    
}
function mapStateToProps(state){
    return{
        notes:state
    }
}
export default connect(mapStateToProps,null)(Home)