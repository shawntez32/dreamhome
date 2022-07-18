import React from "react";
import jquery from "jquery";

/*
On Click: Make all other divs dissapear.,
         Center image and make it 70% width,
         Full Description of property 70% width Centered
         Footer 
*/


const boxes = [$('#nav'),$('#footer')];

$(document).on("load",function() {
  $('.box').on('click', function() {
    $(this).hide();
  });
  /*$('div').hide()*/
});

function moreInfo(value) {
  for (let i = 0; i < divz.length; i++) {
    if (alwaysVisible.includes(divz[i])) {
      divz[i].style.display = att.value;
    }
  }
  return (
    <>
    <div className="selectedHouse">
      <div><img src={value.img} alt="" /></div>
      <div className="selectedHouseTable">
        <ul>
          <li>{value.price}</li>
          <li>{value.location}</li>
          <li>{value.age}</li>
          <li>{value.owner}</li>
        </ul>
      </div>
    </div>
    </>
  )
}



function Landing() {
    return(
        <>
            <div className="topgrid">
                <div className="">
                </div>
                <div className="grid1">
                  <div className="box">
                      <div className="top">
                        <div className="overlay">
                          <img className="house_image" alt="image" src='Images/house.webp' />
                        </div>
                        <div className="bottom">
                          <ul className="list-inline mrg-0 clr-535353">
                            <li href="#"><h4>$475,000</h4> </li>
                            <li><h4>4,340 SqFt</h4></li>
                            <li><h4>5 Beds</h4></li>
                            <li><h4>5 Baths</h4></li>
                            <li><h4>609 W Gravers Ln</h4></li>
                          </ul>
                        </div>
                      </div>
                    </div>



                            <div className="box">
                              <div className="top">
                                <div className="overlay">
                                  <img className="house_image" alt="image" src='Images/house2.webp'/>
                                </div>
                                <div className="bottom">
                                  <ul className="list-inline mrg-0 clr-535353">
                                    <li href="#"><h4>$555,000</h4></li>
                                    <li><h4>6,825 SqFt</h4></li>
                                    <li><h4>6 Beds</h4></li>
                                    <li><h4>4 Baths</h4></li>
                                    <li><h4>218 Lynnebrook Ln</h4></li>
                                  </ul>
                                </div>
                              </div>
                            </div>



                                  <div className="box">
                                    <div className="top">
                                      <div className="overlay">
                                        <img className="house_image" alt="image" src='Images/house3.jpg'/>
                                      </div>
                                      <div className="bottom">
                                        <ul className="list-inline mrg-0 clr-535353">
                                          <li href="#"><h4>$1,599,999</h4> </li>
                                          <li><h4>13,500 SqFt</h4></li>
                                          <li><h4>8 Beds</h4></li>
                                          <li><h4>6 Baths</h4></li>
                                          <li><h4>209 Chestnut Hill ve</h4></li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>


                                    <div className="box">
                                      <div className="top">
                                        <div className="overlay">
                                          <img className="house_image" alt="image" src='Images/house4.jpg' />
                                        </div>
                                        <div className="bottom">
                                          <ul className="list-inline mrg-0 clr-535353">
                                            <li href="#"><h4>$475,000</h4> </li>
                                            <li><h4>4,340 SqFt</h4></li>
                                            <li><h4>5 Beds</h4></li>
                                            <li><h4>5 Baths</h4></li>
                                            <li><h4>609 W Gravers Ln</h4></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>



                                    <div className="box">
                                      <div className="top">
                                        <div className="overlay">
                                          <img className="house_image" alt="image" src='Images/house5.jpg'/>
                                        </div>
                                        <div className="bottom">
                                          <ul className="list-inline mrg-0 clr-535353">
                                            <li href="#"><h4>$555,000</h4></li>
                                            <li><h4>6,825 SqFt</h4></li>
                                            <li><h4>6 Beds</h4></li>
                                            <li><h4>4 Baths</h4></li>
                                            <li><h4>218 Lynnebrook Ln</h4></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>



                                          <div className="box">
                                            <div className="top">
                                              <div className="overlay">
                                                <img className="house_image" alt="image" src='Images/house6.jpg'/>
                                              </div>
                                              <div className="bottom">
                                                <ul className="list-inline mrg-0 clr-535353">
                                                  <li href="#"><h4>$1,599,999</h4> </li>
                                                  <li><h4>13,500 SqFt</h4></li>
                                                  <li><h4>8 Beds</h4></li>
                                                  <li><h4>6 Baths</h4></li>
                                                  <li><h4>209 Chestnut Hill ve</h4></li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>

                                <div className="box">
                                  <div className="top">
                                    <div className="overlay">
                                      <img className="house_image" alt="image" src='Images/house7.jpg'/>
                                    </div>
                                    <div className="bottom">
                                      <ul className="list-inline mrg-0 clr-535353">
                                        <li href="#"><h4>$475,000</h4> </li>
                                        <li><h4>4,340 SqFt</h4></li>
                                        <li><h4>5 Beds</h4></li>
                                        <li><h4>5 Baths</h4></li>
                                        <li><h4>609 W Gravers Ln</h4></li>
                                      </ul>
                                    </div>
                                  </div>
                              </div>




                                <div className="box">
                                  <div className="top">
                                    <div className="overlay">
                                      <img className="house_image" alt="image" src='Images/house8.jpg' />
                                    </div>
                                    <div className="bottom">
                                      <ul className="list-inline mrg-0 clr-535353">
                                        <li href="#"><h4>$555,000</h4></li>
                                        <li><h4>6,825 SqFt</h4></li>
                                        <li><h4>6 Beds</h4></li>
                                        <li><h4>4 Baths</h4></li>
                                        <li><h4>218 Lynnebrook Ln</h4></li>
                                      </ul>
                                    </div>
                              </div>
                            </div>



                                      <div className="box">
                                        <div className="top">
                                          <div className="overlay">
                                            <img className="house_image" alt="image" src='Images/house5.jpg'/>
                                          </div>
                                          <div className="bottom">
                                            <ul className="list-inline mrg-0 clr-535353">
                                              <li href="#"><h4>$1,599,999</h4> </li>
                                              <li><h4>13,500 SqFt</h4></li>
                                              <li><h4>8 Beds</h4></li>
                                              <li><h4>6 Baths</h4></li>
                                              <li><h4>209 Chestnut Hill ve</h4></li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                        </div>
                        <div className="">

                        </div>
                        </div>



                        <div id="carouselExampleSlidesOnly" className="carousel-slide hero" data-bs-ride="carousel">
                          <h1 id="featured_homes">Featured Homes</h1>
                      <div className="carousel-inner">
                      <div className="carousel-item active" >
                        <div>
                          <img src="./images/a2.jpg" alt=""/>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="./images/a3.jpg" alt="real estate"/>
                      </div>
                      <div className="carousel-item">
                        <img src="./images/a4.jpg" alt="home"/>
                      </div>
                    </div>
                  </div>

                            <div className="topgrid2">
                              <div className="">

                              </div>
                              <div className="grid2">

                                    <div className="box">
                                      <div className="top">
                                        <div className="overlay">
                                          <img className="house_image" alt="image" src='Images/house.webp'/>
                                        </div>
                                        <div className="bottom">
                                          <ul className="list-inline mrg-0 clr-535353">
                                            <li href="#" target="_parent"><h4>$475,000</h4> </li>
                                            <li><h4>4,340 SqFt</h4></li>
                                            <li><h4>5 Beds</h4></li>
                                            <li><h4>5 Baths</h4></li>
                                            <li><h4>609 W Gravers Ln</h4></li>
                                          </ul>
                                        </div>
                                      </div>
                                      </div>




                                    <div className="box">
                                      <div className="top">
                                        <div className="overlay">
                                          <img className="house_image" alt="image" src='Images/house2.webp'/>
                                        </div>
                                        <div className="bottom">
                                          <ul className="list-inline mrg-0 clr-535353">
                                            <li href="#" target="_parent"><h4>$555,000</h4></li>
                                            <li><h4>6,825 SqFt</h4></li>
                                            <li><h4>6 Beds</h4></li>
                                            <li><h4>4 Baths</h4></li>
                                            <li><h4>218 Lynnebrook Ln</h4></li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>


                                          <div className="box">
                                            <div className="top">
                                              <div className="overlay">
                                                <img className="house_image" alt="image" src='Images/house3.jpg'/>
                                              </div>
                                              <div className="bottom">
                                                <ul className="list-inline mrg-0 clr-535353">
                                                  <li href="#" target="_parent"><h4>$1,599,999</h4> </li>
                                                  <li><h4>13,500 SqFt</h4></li>
                                                  <li><h4>8 Beds</h4></li>
                                                  <li><h4>6 Baths</h4></li>
                                                  <li><h4>209 Chestnut Hill ve</h4></li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>

                        <div className="box">
                          <div className="top">
                            <div className="overlay">
                              <img className="house_image" alt="image" src='Images/house.webp'/>
                            </div>
                            <div className="bottom">
                              <ul className="list-inline mrg-0 clr-535353">
                                <li href="#" target="_parent"><h4>$475,000</h4> </li>
                                <li><h4>4,340 SqFt</h4></li>
                                <li><h4>5 Beds</h4></li>
                                <li><h4>5 Baths</h4></li>
                                <li><h4>609 W Gravers Ln</h4></li>
                              </ul>
                            </div>
                          </div>
                        </div>




                        <div className="box">
                          <div className="top">
                            <div className="overlay">
                              <img className="house_image" alt="image" src='Images/house2.webp' />
                            </div>
                            <div className="bottom">
                              <ul className="list-inline mrg-0 clr-535353">
                                <li href="#" target="_parent"><h4>$555,000</h4></li>
                                <li><h4>6,825 SqFt</h4></li>
                                <li><h4>6 Beds</h4></li>
                                <li><h4>4 Baths</h4></li>
                                <li><h4>218 Lynnebrook Ln</h4></li>
                              </ul>
                            </div>
                          </div>
                        </div>

                              <div className="box">
                                <div className="top">
                                  <div className="overlay">
                                    <img className="house_image" alt="image" src='Images/house3.jpg'/>
                                  </div>
                                  <div className="bottom">
                                    <ul className="list-inline mrg-0 clr-535353">
                                      <li href="#" target="_parent"><h4>$1,599,999</h4> </li>
                                      <li><h4>13,500 SqFt</h4></li>
                                      <li><h4>8 Beds</h4></li>
                                      <li><h4>6 Baths</h4></li>
                                      <li><h4>209 Chestnut Hill ve</h4></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
        </>
    )
}

export default Landing;