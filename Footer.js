

const Footer = ( { numOfItems } ) => {

    const today = new Date();

    return(
        
        <footer className="container-fluid text-center mt-5 py-3 shadow">
            <h6 className="fw-bold text-success text-decoration-underline">
                { numOfItems } Task TO DO  { numOfItems === 1 ? 'item' : '' } 
            </h6>  
            <hr className="w-50 mx-auto"/>
            <p className="">
            Copyright &copy; {today.getFullYear()}
            </p>
        </footer>

    )

}

export default Footer;