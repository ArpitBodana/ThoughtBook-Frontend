import React,{useState,useContext}from 'react'
import axios from 'axios'
import {Button,Form, FormGroup, FormLabel} from 'react-bootstrap'
import { BrandContext, TokenContext } from '../App'
import {useHistory} from 'react-router-dom'



function Add() {
    const token =useContext(TokenContext)
    const [thought ,setthought] =useState('')
    const [author ,setauthor] = useState('')
    const [user] = useState('user')
    const mytoken = token.token.token
    const history = useHistory()
    const save = ()=>history.push('/SaveModal')
    const Add =()=>history.push('/Add')
    const errors =()=>history.push('/Nodata')
    const auth =()=>history.push('/addwarn')
    const brand =useContext(BrandContext)
    const name = brand.brand.brand

    
   
    
    const handleSubmit =()=>{
        console.log('addsubmit');
        console.log(mytoken);
        
        axios.post('https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic/',{thought:thought,author:author,user:user},{ headers : {'Authorization' : `Token ${mytoken}`}}).then(()=>{
            console.log(' Thought added successfully ');
            // window.location.reload(false)
            save()
            setTimeout(Add,2000)
        }).catch(err=>{
            console.log(err)
            if(name==='ThoughtBook'){
            auth()
            setTimeout(Add,2000)
                
              }else{
              errors()
              setTimeout(Add,2000)
              }
        })

    }
    
    
    return (
        <div>
            <Form className="container ">
                <FormGroup>
                    <FormLabel>Thought</FormLabel>
                    <Form.Control type="text" value={thought} onChange={e=>setthought(e.target.value)} placeholder="Enter Your Thought" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Author</FormLabel>
                    <Form.Control type='text'value={author} onChange={e=>setauthor(e.target.value)} placeholder="Author"/>
                </FormGroup>
                <FormGroup>
                    <Button variant='primary' onClick={handleSubmit}>Submit</Button>
                </FormGroup>
            </Form>
            
        </div>
    )
}

export default Add
