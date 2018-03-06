import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form , TextArea, Button, Input} from 'semantic-ui-react'
import {deletenote, editnote} from '../../action'
import {Link} from 'react-router-dom'

const Readnote = (props) =>{
    
   
   return(
    <Form>
     
    <Form.Input id='form-input-control-first-name' control={Input} label='Note Title' placeholder='title' type='text'
    value={props.title}
    onChange={event => props.onChangetitle(event.target.value)}
   />
    <TextArea autoHeight placeholder='Text'
    style={{'marginBottom':'10px'}}
    value={props.text}
    onChange={event => props.onChangebody(event.target.value)}
     />
     
     <Link to='/'>
    <Button type='submit'
    onClick={() => props.edit()}
    >Save</Button></Link>
    <Link to='/'>
    <Button type='submit'
    className='delete'
    onClick={()=> props.delete()}
    >Delete</Button></Link>
</Form>)
}
class Read extends Component{
    constructor(props){
        super(props)
        this.state ={
            title:'', 
            bodytext:'',
            deftitle:this.props.location.state.title, 
            deftext:this.props.location.state.text
        }
        this.handleChangetext = this.handleChangetext.bind(this)
        this.handleChangebodytext = this.handleChangebodytext.bind(this)
        this.onSaveClick = this.onSaveClick.bind(this)
        this.editNote = this.editNote.bind(this)
        this.deletenote = this.deletenote.bind(this)
    }

   
    

    handleChangetext(title){
      this.setState({title:title, deftitle:title})
    }
    handleChangebodytext(bodytext){
        this.setState({bodytext:bodytext,deftext:bodytext })
    }
    editNote(){
        if(this.state.title !=='' && this.state.bodytext ==='')
        this.props.editnote(this.props.location.state.id , this.state.title , this.state.deftext)
        else if(this.state.title ==='' && this.state.bodytext !=='')
        this.props.editnote(this.props.location.state.id , this.state.deftitle , this.state.bodytext)
        else
        this.props.editnote(this.props.location.state.id , this.state.title , this.state.bodytext)
    }
    onSaveClick(){
     if(this.state.title !=='' || this.state.bodytext !=='')
      this.editNote()
    
    }
    deletenote(){
        this.props.deletenote(this.props.location.state.id)
    }
    render(){

   
      
        return(
            <div className='addcontainer'>
            <Readnote 
            title={this.state.deftitle}
            text={this.state.deftext}
            onChangetitle={this.handleChangetext}
            onChangebody={this.handleChangebodytext}
            edit={this.onSaveClick}
            delete={this.deletenote}
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

export default connect(mapStateToProps, {deletenote, editnote})(Read)
