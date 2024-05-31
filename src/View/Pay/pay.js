import '../Pay/pay.css'
import img1 from '../Pay/dots.svg'
import img2 from '../Pay/cardimg.png'
import img3 from '../Pay/btnimg.svg'
import img4 from '../Pay/cardbodyimg.png'
import img5 from '../Pay/card2.png'
import img6 from '../Pay/barcode.png'
// import img7 from '../Signin/image/bgimg.svg'




export function Pay() {
    return (
        <>
            <p className='p'>Home ⟫ Create An Account  </p>

            <div className="header">
                <h2 className='h2'>My Starbucks Cards</h2>
                <h6 className='h6'>My Starbucks Cards</h6>
                <button className='btnn'>Add Card</button>
            </div>

            <div className='box1'>
                <img src={img1} className='img-1'></img>
                <div className='card1'>
                    <img src={img2} className='img-2'></img>

                    <div className='cardbody'>
                        <div>
                            <h3 className='title'>Aroma</h3>
                            <p className='p'>| 0425</p>
                            <h2 className='price'>₹0.00</h2>
                        </div>
                        <div><button className='btnn2'><img src={img3} className='img-3'></img>Local Card</button></div>
                    </div><img src={img4} className='img-4'></img>
                </div>
                <div className='card2'>
                    <img src={img5} className='card2'></img>
                </div>
{/* 
                <img src={img7} className='img-7'></img> */}

            </div>


            <div className='box-2'>
                <img src={img6} className='img-6'></img>

            </div>


        </>
    );
}