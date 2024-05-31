import '../Store/store.css'
import img2 from '../Store/images/search.png'
import img3 from '../Store/images/location.svg'




export function Store() {
    return (
        <>

            <h5 className='pagename'>Home ⟫ Find A Store  </h5>

            <div className='maindiv'>
                <div className="firstbox">
                    <div className='secondbox'>
                        <input type='text' placeholder=' 🔍  Find a store near you' className='searchbar'></input>
                    </div>
                    <img src={img3} className='pic' alt='img1'></img>
                    <h6 className='Sorry'>Sorry! we can't seem to spot you.</h6>
                    <p className='info'>Please enable your location to find the nearest Starbucks</p>

                    <button className='bton'>Enter Location Manually</button>
                </div>


                <div className='maindiv2'>
                    <img src={img2} className='pic2'></img>
                    <div>
                        <h4 className='alert'>No nearby store found.</h4>
                        <h5 className='alert2'>Oh no! We couldn’t find any store around the provided location. Please enter a different location to get nearby stores.</h5>
                    </div>
                    <div>
                    <h2 className='x'>×</h2>
                    </div>


                </div>







            </div >
        </>
    );
}
