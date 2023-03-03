
const AddItem = ( {handleSubmit, newtaskName, setNewItem } ) => {


 return(

    <form onSubmit={handleSubmit} className="addForm  form container m-auto" >
        <div className="w-50 justify-content-center mx-auto">
        <div className="d-flex m-auto justtify-content-between gap-2 form-group">
        <input 
            className="form-control mb-3 w-75"
            type="text" 
            autofocus
            placeholder="Task Name"
            required
            value={newtaskName}
            onChange={(e)=>setNewItem(e.target.value)}
        />
        <button
        className="fw-bold text-danger mx-3 mb-3 w-25 btn btn-warning" 
        type="submit">
        ADD TASK
        </button>  
        </div>
        </div>
    </form>

 )

}



export default AddItem;