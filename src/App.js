
import './App.css';
import style from './custom.module.css'
import {Container,Row,Col} from 'react-bootstrap'
import NavBar from './components/NavBar';
import React,{useEffect,useState,useReducer } from  'react'
import axios from 'axios'


export const MyContext = React.createContext()
export const LoadingContext = React.createContext()
export const TokenContext = React.createContext()
export const CheckContext = React.createContext()
export const BrandContext = React.createContext()

const initialState={
  token:''
}
const reducer= (state,action)=>{
  switch(action){
    case 'change' :
      localStorage.setItem('tokencookie',action.value)
      
      return {token:action.value}
    default :
      localStorage.setItem('tokencookie',action.value)
      
      
      return {token:action.value}
      
  }
}
const initialState2={
  check :true}
const reducer2 =(state , action)=>{
  switch( action){
    case 'update':
      
      return {check:false}
    case 'update2':
      
      return {check:true}
    default:
      
      return {check:true}

  }
}
const initialState3={brand:'ThoughtBook'}
const reducer3=(state,action)=>{
  switch(action.type){
    case 'userlogin':
      localStorage.setItem('brandcookie',action.value)
      
      
      return {brand:action.value}
    case 'userlogout':
      localStorage.removeItem('brandcookie')
      localStorage.removeItem('tokencookie')
     
      return {brand:'ThoughtBook'}
     
    default:
      return {brand:initialState3}
  }
}


function App() {
  
 const [token,dispatch]=useReducer(reducer,initialState)
 const [check,dispatch2]=useReducer(reducer2,initialState2)
 const [brand,dispatch3]= useReducer(reducer3,initialState3)

  
  const [posts,setPosts] = useState([])
  const [loading ,setloading] = useState(true)
  
  
    useEffect(()=>{
      axios.get('https://chikubodana.pythonanywhere.com/api/v1/thoughtbook/generic/').then((res)=>{
      setloading(false)
      setPosts(res.data)
      
    }).catch(err=>{
      setloading(false)
      setPosts(null)
    })
   

  },[posts]) 

  useEffect(()=>{
    var tokencookie =localStorage.getItem('tokencookie')
    var brandcookie = localStorage.getItem('brandcookie')
   
    if(tokencookie!==null){
      initialState2.check=true
    }

  })
 
  return (
    <div className="App" >
      <Container fluid className={style.headingback}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
           
           <h2 className={style.heading}>MyThoughtBook</h2>
           
          </Col>
        </Row>
      </Container>
      <BrandContext.Provider value={{brand:brand,dispatch3:dispatch3}}>
      <CheckContext.Provider value={{check:check,dispatch2:dispatch2}}>
      <TokenContext.Provider value={{token:token,dispatch:dispatch}}>
       <LoadingContext.Provider value={loading}>
        <MyContext.Provider value={posts}>
          <NavBar/>
        </MyContext.Provider>
      </LoadingContext.Provider>
      </TokenContext.Provider>
      </CheckContext.Provider>
      
      </BrandContext.Provider> 
    </div>
  );
}

export default App;
