import { useState } from "react"
import { Form, InputGroup, Container } from "react-bootstrap"
import {BsSearch} from 'react-icons/bs'


const Searchbar = (props)=>{
   
const [searchQuery, setSearchQuery] = useState('')   

const handleSubmit = (e)=>{
e.preventDefault()
props.findLocation(searchQuery)
}

return(
    <Container fluid className="mt-3">
    <Form onSubmit={handleSubmit}>

    <InputGroup  className="mb-3">
        <InputGroup.Text >
            <BsSearch/>
        </InputGroup.Text>
       <Form.Control
         placeholder="Cerca la città..."
         value={searchQuery}
         onChange={(e)=>{setSearchQuery(e.target.value)}}
         
           />
    </InputGroup>  
    
    </Form>    
    </Container>
 )
}

export default Searchbar