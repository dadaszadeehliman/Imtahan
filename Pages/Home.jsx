import axios from 'axios'
import { useEffect, useState } from 'react'

function Home() {
  const [getdata, setgetdata] = useState([])
  useEffect((id) => {
    axios.get('http://localhost:8000/shop', id)
      .then(res => setgetdata(res.data))
  }, [])

  return (
    <>
      <div className='row Home_section_1 p-5 mt-5'>
        <div className='col-lg-6 col-md-12 Home_sectio_1_img'><img src="src\assets\header-img.png.webp" alt="fgsdfg" /></div>
        <div className='col-lg-6  col-md-12 text-md-center mt-2'>
          <h1><span>Flat </span>75%Off</h1>
          <h1>IT’S HAPPENING THIS SEASON!</h1>
          <a href="#" className='btn btn-primary'>Purh Chase</a>
        </div>
      </div>

      <div className='Home_section_2'>
        <div className='container'>
          <div className='row'>
            <div className='row col-lg-8 col-md-8'>
              <div className='col-lg-6 col-md-6  g-3'> <img src="https://preview.colorlib.com/theme/shop/img/c1.jpg" alt="gdfs" /></div>
              <div className='col-lg-6 col-md-6 g-3'><img src="https://preview.colorlib.com/theme/shop/img/c2.jpg" alt="gsdg" /></div>
              <div className='col-lg-12 col-md-6 g-3'><img src="https://preview.colorlib.com/theme/shop/img/c3.jpg" alt="gdfs" /></div>
            </div>
            <div className='col-lg-4 col-md-4'>
              <div className='g-3'><img src="https://preview.colorlib.com/theme/shop/img/c4.jpg" alt="fghsdf" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5 Home_section_3 p-5'>
        <div className='container'>
          <h2 className='text-center'>New realeased Products for Men</h2>
          <p className='text-center'>Who are in extremely love with eco friendly system.</p>
          <div className='row mt-4'>
            <div className='col-lg-3 col-md-6 text-center'>
              <div><img src="https://preview.colorlib.com/theme/shop/img/l1.jpg" alt="bdfb" /></div>
              <h2>Long Sleeve shirt</h2>
              <h1>$150.00</h1>
            </div>
            <div className='col-lg-3 col-md-6 text-center'>
              <div><img src="https://preview.colorlib.com/theme/shop/img/l2.jpg" alt="bdfb" /></div>
              <h2>Long Sleeve shirt</h2>
              <h1>$150.00</h1>
            </div>
            <div className='col-lg-3 col-md-6 text-center'>
              <div><img src="https://preview.colorlib.com/theme/shop/img/l3.jpg" alt="bdfb" /></div>
              <h2>Long Sleeve shirt</h2>
              <h1>$150.00</h1>
            </div>
            <div className='col-lg-3 col-md-6 text-center'>
              <div><img src="https://preview.colorlib.com/theme/shop/img/l4.jpg" alt="bdfb" /></div>
              <h2>Long Sleeve shirt</h2>
              <h1>$150.00</h1>
            </div>
          </div>
        </div>
      </div>


      <div className='Home_section_4'>
        <div className='container'>
          <h2 className='text-center'>New realeased Products for Women</h2>
          <p className='text-center'>Who are in extremely love with eco friendly system.</p>
          <div className='row'>
            {getdata.map(element => {
              return (
                <div className='col-lg-3 col-md-6 mt-3 text-center Home_section_4_qutu '>
                  <div><img src={element.img} alt="" /></div>
                  <h3>{element.name}</h3>
                  <h2>{element.money}</h2>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className='Home_section_5 mt-5'>
        <div className='container'>
          <h2 className='text-center'>Exclusive Hot Deal Ends in:</h2>
          <p className='text-center'>Who are in extremely love with eco friendly system.</p>
          <div className='row Home_section_5_esas'>
            <div className='col-lg-3'><img src="https://preview.colorlib.com/theme/shop/img/cd.png" alt="fghsdffg" /></div>
            <div className='row col-lg-5 Home_section_esas m-5'>
              <div className='col-lg-3 col-md-3 col-sm-3'>
                <h3>-2050</h3>
                <p className='text-center'>Days</p>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-3'>
                <h3>-2050</h3>
                <p className='text-center'>Days</p>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-3'>
                <h3>-2050</h3>
                <p className='text-center'>Days</p>
              </div>
              <div className='col-lg-3 col-md-3 col-sm-3'>
                <h3>-2050</h3>
                <p className='text-center'>Days</p>
              </div>
              {/* <div className='d-flex justify-content-end home_section_5_a'>
                <a href="#" className='text-right'>Shop Now</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className='Home_section_6 mt-5 p-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-4 col-sm-6 row'>
              <div className='col-lg-3 col-md-3 col-sm-3'><img src="https://preview.colorlib.com/theme/shop/img/r1.jpg" alt="dfsad" /></div>
              <div className='col-lg-9 col-md-3 col-sm-3'>
                <h6>Black lace Heels</h6>
                <p>$189.00</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6 row'>
              <div className='col-lg-3 col-md-3 col-sm-3'><img src="https://preview.colorlib.com/theme/shop/img/r1.jpg" alt="dfsad" /></div>
              <div className='col-lg-9 col-md-3 col-sm-3'>
                <h6>Black lace Heels</h6>
                <p>$189.00</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6 row'>
              <div className='col-lg-3 col-md-3 col-sm-3'><img src="https://preview.colorlib.com/theme/shop/img/r1.jpg" alt="dfsad" /></div>
              <div className='col-lg-9 col-md-3 col-sm-3'>
                <h6>Black lace Heels</h6>
                <p>$189.00</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6 row'>
              <div className='col-lg-3 col-md-3 col-sm-3'><img src="https://preview.colorlib.com/theme/shop/img/r1.jpg" alt="dfsad" /></div>
              <div className='col-lg-9 col-md-3 col-sm-3'>
                <h6>Black lace Heels</h6>
                <p>$189.00</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6 row'>
              <div className='col-lg-3 col-md-3 col-sm-3'><img src="https://preview.colorlib.com/theme/shop/img/r1.jpg" alt="dfsad" /></div>
              <div className='col-lg-9 col-md-3 col-sm-3'>
                <h6>Black lace Heels</h6>
                <p>$189.00</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6 row'>
              <div className='col-lg-3 col-md-3 col-sm-3'><img src="https://preview.colorlib.com/theme/shop/img/r1.jpg" alt="dfsad" /></div>
              <div className='col-lg-9 col-md-3 col-sm-3'>
                <h6>Black lace Heels</h6>
                <p>$189.00</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6 row'>
              <div className='col-lg-3 col-md-3 col-sm-3'><img src="https://preview.colorlib.com/theme/shop/img/r1.jpg" alt="dfsad" /></div>
              <div className='col-lg-9 col-md-3 col-sm-3'>
                <h6>Black lace Heels</h6>
                <p>$189.00</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6 row'>
              <div className='col-lg-3 col-md-3 col-sm-3'><img src="https://preview.colorlib.com/theme/shop/img/r1.jpg" alt="dfsad" /></div>
              <div className='col-lg-9 col-md-3 col-sm-3'>
                <h6>Black lace Heels</h6>
                <p>$189.00</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6 row'>
              <div className='col-lg-3 col-md-3 col-sm-3'><img src="https://preview.colorlib.com/theme/shop/img/r1.jpg" alt="dfsad" /></div>
              <div className='col-lg-9 col-md-3 col-sm-3'>
                <h6>Black lace Heels</h6>
                <p>$189.00</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6 row'>
              <div className='col-lg-3 col-md-3 col-sm-3'><img src="https://preview.colorlib.com/theme/shop/img/r1.jpg" alt="dfsad" /></div>
              <div className='col-lg-9 col-md-3 col-sm-3'>
                <h6>Black lace Heels</h6>
                <p>$189.00</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6 row'>
              <div className='col-lg-3 col-md-3 col-sm-3'><img src="https://preview.colorlib.com/theme/shop/img/r1.jpg" alt="dfsad" /></div>
              <div className='col-lg-9 col-md-3 col-sm-3'>
                <h6>Black lace Heels</h6>
                <p>$189.00</p>
              </div>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6 row'>
              <div className='col-lg-3 col-md-3 col-sm-3'><img src="https://preview.colorlib.com/theme/shop/img/r1.jpg" alt="dfsad" /></div>
              <div className='col-lg-9 col-md-3 col-sm-3'>
                <h6>Black lace Heels</h6>
                <p>$189.00</p>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default Home