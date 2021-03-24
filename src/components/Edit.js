import axios from 'axios'
import React ,{useState,useContext,useEffect} from 'react'

import {Button,Form, FormControl, FormGroup, FormLabel} from 'react-bootstrap'
import { BrandContext, MyContext, TokenContext } from '../App'
import {useHistory} from 'react-router-dom'


function Edit() {
  const data =useContext(MyContext)
  const token = useContext(TokenContext)
  const brand = useContext(BrandContext)
  const mytoken2 = token.token.token
  const name = brand.brand.brand
  
  const [user]=useState('user')
  
  var [newthought,setnewthought]=useState(null)
  var [newauthor,setnewauthor]=useState(null)
  const history = useHistory()
  const updateit = ()=>history.push('/UpdateModal')
  const Edit =()=>history.push('/Edit')
  const deleteit=()=>history.push('/DeleteModal')
  const errors =()=>history.push('/Nodata')
  const auth=()=>history.push('/unauthorized')
  
  const [arr] =useState([])


   useEffect(()=>{
     
     data.map(data=>{data.user===name &&arr.push({thought:data.thought,user:data.user,id:data.id,date:data.date,author:data.author})})
     console.log('newarr');
     console.log(arr);
    
    

   },[arr])
  
  
  const handleSave =(id,thoughtn,authorn,usern)=>{
  
    console.log(thoughtn);
    console.log(authorn);
    console.log(id);
    if(newauthor===null){
      
      axios.put(`https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic2/${id}`,{thought:newthought,author:authorn,user:user},{ headers : {'Authorization' : `Token ${mytoken2}`}},)
      .then(()=>{console.log('updated successfully ')
      // window.location.reload(false)
        updateit()
        setTimeout(Edit,2000)
    }).catch(err=>{
      console.log(err)
      if(usern!==name){
        auth()
    setTimeout(Edit,4000)
        
      }else{
      errors()
      setTimeout(Edit,2000)
      }
      
      
    })

    }
    else if(newthought===null){
      axios.put(`https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic2/${id}`,{thought:thoughtn,author:newauthor,user:user},{ headers : {'Authorization' : `Token ${mytoken2}`}},)
      .then(()=>{console.log('updated successfully ');
      // window.location.reload(false)
      updateit()
      setTimeout(Edit,2000)
    }).catch(err=>{
      console.log(err)
      if(usern!==name){
        auth()
    setTimeout(Edit,4000)
        
      }else{
      errors()
      setTimeout(Edit,2000)
      }
    })
    }else{
      axios.put(`https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic2/${id}`,{thought:newthought,author:newauthor,user:user},{ headers : {'Authorization' : `Token ${mytoken2}`}},)
    .then(()=>{console.log('updated successfully ');
    // window.location.reload(false)
      updateit()
      setTimeout(Edit,2000)
  }).catch(err=>{
    console.log(err)
    if(usern!==name){
      auth()
  setTimeout(Edit,4000)
      
    }else{
    errors()
    setTimeout(Edit,2000)
    }
  })
    }
    
    
  }
  const handleDelete =(id)=>{
      
    console.log(id);
    axios.delete(`https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic2/${id}`,{ headers : {'Authorization' : `Token ${mytoken2}`}})
    .then(()=>{console.log(`delted${id}`);
    // window.location.reload(false)
      deleteit()
      setTimeout(Edit,2000)
   }).catch(err=>{
    console.log(err)
    auth()
    setTimeout(Edit,4000)
   })
     
  }

    return (
        <div>
            {arr.map(data=>
              <Form className='mt-3 container '>
              <FormGroup>
                  <FormLabel>Thought {data.id } </FormLabel>
                  <FormControl type='text'   onChange={e=>{setnewthought(e.target.value)}} defaultValue={data.thought} />
              </FormGroup>
              <FormGroup>
                  <FormLabel>Author</FormLabel>
                  <FormControl type='text'  onChange={e=>{setnewauthor(e.target.value)}} defaultValue={data.author}/>
              </FormGroup>
              <Button onClick={()=>handleSave(data.id,data.thought,data.author,data.user)} variant='info' size='sm' className=' mr-4'>SaveChanges</Button>
              <Button onClick={()=>handleDelete(data.id,data.user)}  variant='danger ' size='sm'>Delete</Button>
          </Form>
            
            
            )
            }
            
        </div>
    )
}

export default Edit
