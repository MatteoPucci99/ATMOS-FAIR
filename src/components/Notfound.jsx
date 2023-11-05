import notfound from '../img/notfound.png'


const Notfound = ()=>{
   
        return(
            <>
            <div className='text-center mt-4'>
                <img src={notfound} width={'80%'} alt="notfound" />
            </div>
            <div className='d-flex flex-column align-items-center mt-3'>
                <p className='fs-4'>Error 404, Location not found</p>
                <p className='fs-4'>Try again !</p>
            </div>
            
            </>
        )
   
}

export default Notfound