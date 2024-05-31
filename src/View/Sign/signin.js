import '../Signin/signin.css'
import img1 from './image/dots.svg'
import img2 from './image/bgimg.svg'
import img3 from './image/123.svg'

export function Signin() {
    return (

        <>

            <p className='name'>Home ⟫ Create An Account  </p>
            <div className='main'>
                <img src={img1} className='imgone'></img>
                <img src={img2} className='imgtwo'></img>
            </div>
            <div className='box'>
                <img src={img3} className='imgthree'></img>
                <h1 className='h1'>Login to Starbucks</h1><hr></hr>


                <div className='maindivision'>
                    <div className='div1'>
                        <p className='emailid'>EMAIL ID</p>
                        <input type="Email" placeholder="Enter Email Id" required=""></input>

                        <p className='emailid'>CREATE PASSWORD</p>
                        <input type="password" placeholder="Enter Password" required=""></input>
                        <p className='para'>
                            8 Characters
                            1 Uppercase
                            1 Symbol
                            1 Numeric</p>
                    </div>

                    <div className='div2'>
                        <p className='emailid'>MOBILE NO</p>
                        <input type="Email" placeholder="Enter Mobile No" required=""></input>

                        <p className='emailid'>CONFIRM PASSWORD</p>
                        <input type="password" placeholder="Re-Enter Password*" required=""></input>
                    </div>


                </div>
                <button className='btn'>Continue</button>

            </div>

        </>
    );
}