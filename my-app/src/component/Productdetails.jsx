import {useParams} from 'react-router-dom'
 
function Productdetails(){
    const {id}=useParams();
    return(
        <>
            <h1>Product id: {id}</h1>
        </>
    )
}
export default Productdetails;