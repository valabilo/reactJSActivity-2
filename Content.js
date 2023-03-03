

import { FaTrashAlt } from 'react-icons/fa';

const Content = ( { items, handleCheck, handleDelete  } ) =>{
     
    return(
            <main className="container-fluid justify-content-center ">
             { items.length > 0 ? (
              <ul className="w-50 mx-auto list-unstyled form-check checkbox-x bg-light shadow rounded-2" >
                { items.map( (item) => (
                    <li className="d-flex item justify-content-between text-start checkbox-xl" key={item.id}>
                      <input className="form-check-input m-5"
                        type="checkbox"
                        onChange={ () => handleCheck(item.id) }
                        checked={item.checked}  
                      />

                      <label className="w-75 m-3"
                       style={ (item.checked)? { textDecoration:'line-through'} : null } 
                      >
                     <h4>{item.taskName}</h4>
                      <p>{item.remarks}</p>
                      <hr />
                      
                      </label>
                      
                      <FaTrashAlt className="delete m-5"
                       onClick={() => handleDelete(item.id)}
                       role="button"
                       tabIndex="0" 
                      />

                    </li>

                )
                )}


              </ul>
             ) : (
              <p style={ {marginTop : '2rem' }}> list is empty </p>
             )
          }
            </main>
    )


}

export default Content;