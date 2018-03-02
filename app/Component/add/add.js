import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, Input, TextArea, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {addnote} from '../../action'


const Newnote = (props) =>(
    
    <Form>
     
        <Form.Input id='form-input-control-first-name' control={Input} label='Note Title' placeholder='title' 
     onChange={event => props.onChangeTitle(event)}
       />
        <TextArea autoHeight placeholder='Text'
        style={{'marginBottom':'10px'}}
        onChange={event => props.onChangeText(event)}
         />
         <Link to='/'>
        <Button type='submit' 
        onClick={()=>props.onSubmitt()}
        >Save</Button></Link>
    </Form>
)
 class Add extends Component{
    constructor(props){
        super(props)
        this.state ={
            title:'', 
            bodytext:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleText = this.handleText.bind(this)
        this.addnewnote = this.addnewnote.bind(this)
    }


    addnewnote(){
        
        this.props.addnote(this.state.title, this.state.bodytext)
    }
    handleChange(event){
        
        this.setState({title:event.target.value})
    
    }
    handleText(event){
        
        this.setState({bodytext:event.target.value})
    }

    render(){
     
        return(
       <div className='addcontainer'>
      
           <Newnote onChangeTitle={this.handleChange}
           onChangeText={this.handleText}
           onSubmitt={this.addnewnote}
           />
       </div>
        )
    }
    
}

function mapStateToProps(state){
return{
    notes:state
}
}

export default connect(mapStateToProps, {addnote})(Add)