import { Fragment } from "react"

function ReadRow({ id, Name, Age, Gender,onClick,onClick2 }) {
    

    return (
       <Fragment>
        {id && 
        <tr>
            
            <th scope="row">{id}</th>
            <td>{Name}</td>
    
            <td>{Age}</td>
            <td>{Gender}</td>
            
            <td>
            <button className="btn btn-primary mr-3" onClick={onClick2}>Edit</button>
            <button className="btn btn-primary mr-3" onClick={onClick}>delete</button>
    
            </td>
        </tr>
        }
      </Fragment>
  
    )
  }
  export default ReadRow