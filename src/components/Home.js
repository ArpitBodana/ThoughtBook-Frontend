import React ,{useContext,useState} from 'react'
import style from '../custom.module.css';
import {Row,Col,Container,Card,Badge} from 'react-bootstrap'
import {LoadingContext, MyContext} from '../App'
import Spinnerr from './Spinner';
import ReactPaginate from 'react-paginate'




function Home() {
   const data =  useContext(MyContext)
   const loading = useContext(LoadingContext)
   
   const [pagenumber,setpagenumber] =useState(0)
   const userperPage= 15;
   const pagesvisted = pagenumber*userperPage
   const count =data.slice(pagesvisted,pagesvisted+userperPage)
   const length=data.length
   const pagecount = Math.ceil(length/userperPage)

   const handlePage=({selected})=>{
       setpagenumber(selected)

   }
  
  
    return (
        <div>
           
            
            <Container fluid='md'>
                {loading&&<Spinnerr/>}
             
              <Row>
              
                    
                    {count.map(post=>
                        <Col xs={11} xl={4} lg={4} md={6} sm={6}>
                            
                                <div className={style.box}>
                                    <Card className={style.Thought}>

                                        <Card.Text>
                                        <p>{post.id}. {post.thought}<br/>-{post.author} </p>
                                        <p style={{fontSize:'0.90rem'}}>Posted By - <Badge  variant='danger' className=' p-2'>{post.user}</Badge></p>
                                        <p style={{fontSize:'0.8rem'}}>{post.date}</p>
                                        </Card.Text>
                                        

                                    </Card>
                                </div>

                        </Col>
                        )}
                       
                        <Row xl={1} lg={1} sm={1} md={1}>
                        <ReactPaginate
                        previousLabel={"Prev"}
                        nextLabel={"Next"} 
                        pageCount={pagecount}
                        onPageChange={handlePage}
                        containerClassName={style.paginations}
                        previousLinkClassName={'previousBttn'}
                        nextLinkClassName={'nextBttn'}
                        disabledClassName={'disablebtn'}
                        activeClassName={style.activebtn}
                        marginPagesDisplayed={1}
                        />
                    </Row>
                        
                       
                    
               
                </Row>
              
               
            
            </Container>  
           
        </div>
    )
}

export default Home
