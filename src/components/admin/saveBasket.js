import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import Link from 'next/link';

const SaveBasket = () => {
    
  const router = useRouter();
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  const handleClick = () => {
    alert('Basket created successfully!');
    router.push('/admin/createBasket');
    };

  return (
    loggedIn ?
    (<div className="container my-4">
      <h4 className='fw-bold'>Save your Basket</h4>
      <div className='d-flex text-nowrap align-items-center fs-5 mb-3 w-50'>
        <label>Basket Name: &nbsp;</label>
        <input type="text" className='form-control' placeholder='Enter bakset name' />
      </div> 
      <div className='d-flex justify-content-between w-50'>
        <Link href='./createBasket' className="float-end"><button className="btn btn-outline-primary btn-lg">Back</button></Link>
        <div className=''>
        <button type="button" className="btn btn-success btn-lg" onClick={handleClick}>
            <i class="bi bi-bag-check"></i> Save
        </button>
        </div>  
      </div>
    </div>)
    : (
      <div className="d-flex row container m-5">
        <p>No authorized Access</p>
        <p>Please <Link href='../auth/login'>login</Link></p>
      </div>
    )
  );
};

export default SaveBasket;
