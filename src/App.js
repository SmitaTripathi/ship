
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <div class="frame">
              <span class="black">Ship</span>
              <span class="blue" >mate.</span>
          </div> 
          
         <div class="dollar"><p class="purple">$</p></div>
        <div class="track"><p class="white">Track shipment</p></div>
          
      </header>
      <main className="Main-content">
            <div class="load">
              <img class="ship" src="./ship.png" alt="ship"></img>
              <p class="text_load">Load</p>
            </div>
          <div class="update">
                <div class="Frame">
                <div class="circle"><p class="text">1</p></div>
                <div class="h_line"></div>
                <div class="details">Search</div>
                </div>
                
                <div class="Frame">
                <div class="circle"><p class="text">2</p></div>
                <div class="h_line"></div>
                <div class="details">Recommended Services</div>
                </div>
                <div class="Frame">
                <div class="circle"><p class="text">3</p></div>
                <div class="h_line"></div>
                <div class="details">Results</div>
                </div>
                <div class="Frame">
                <div class="circle_dark"><p class="text"></p></div>
                <div class="details">Booking</div>
                </div>
            </div>
      </main>
      <search class="search_bar">
          <div class='frame_5'>
          <div class="origin">
            <img src="./destination.png" class="icon1" alt="icon"></img>
                <p class="start">Delhi, 110003</p>
          </div>
          <div class="origin">
              <img src="./destination.png" class="icon1" alt="icon"></img>
              <p class="to">Shanghai, 200080</p>
          </div>
          <div class="origin">
              <img src="./calendar.png" class="icon" alt="icon"></img>
              <p class="date">13 April 2023</p>
          </div>
          <div class="origin">
              <img src="./ship_live.png" class="icon" alt="icon"></img>
              <p class="trans">141.21KG - AIR</p>
          </div>
          <div class="write">
            <img src="./write.png" class="icon" alt="icon"></img>
          </div>
          </div>
      </search>
      {/* <div class="main_line"></div> */}
      <div class="value">
        <div class="best">Best Value 5-5 days $3,121</div>
        <div class="quickest">Quickest 5-5 days $3,121</div>
        <div class="cheapest">Cheapest 5-5 days $3,121</div>
      </div>
      <div class="quotes">
            <div class="Quotes_write">3 Top Quotes <small>(6 in total)</small></div>
            <select class="options_fil">
                <option>Filters</option>
                <option>More</option>
                <option>And more</option>
            </select>
            <select class="options_pri">
                <option>Price</option>
                <option>More</option>
                <option>And more</option>
            </select>
            <select class="options_mod">
                <option>Modes</option>
                <option>More</option>
                <option>And more</option>
            </select>
            <select class="options_sel">
                <option>Seller</option>
                <option>More</option>
                <option>And more</option>
            </select>
      </div>
      <div class="rating">
          <div class="views">
            <div class="views_detail">

                  <div class="view_line_a">
                    <div class="best_view">
                      <div class='ellipse'></div>
                      <div class="write_value">Best Value</div>
                    </div>
                    <div class="Express">Express </div>
                    <div class="grey_small">Est. 5 days</div>
                  </div>

                  <div class="view_line_b">
                    <img class="loc"src="./destination.png" alt="icon"></img>
                    <div class="intial">110003, Delhi</div>
                    <img class="flight_off" src="./flight.png" alt="icon"></img>
                    <img class="col" src="./destination.png" alt="icon"></img>
                    <div class="final">200080, Shanghai</div>
                  </div>

                  <div class="view_line_c">
                    <img class="small_pic" src="./boat.png" alt="boat"></img>
                    <div classs="limited">Primetime Worldwide</div>
                    <img class="str_rating" src="./4star.png" alt="star"></img>
                  </div>
            </div>
            <div class="views_cost">
               <div class="money">$ 3,983</div>
               <div class="select">Selected</div>
               <div class="underline">View detail</div>
            </div>
          </div>
          <div class="views">
                          <div class="views_detail_sec">

                                  <div class="view_line_a_sec">
                                    <div class="best_view_sec">
                                      <div class='ellipse_sec'></div>
                                      <div class="write_value_sec">Best Value</div>
                                    </div>
                                    <div class="Express_sec">Express </div>
                                    <div class="grey_small_sec">Est. 5 days</div>
                                  </div>

                                  <div class="view_line_b_sec">
                                    <img class="loc_sec"src="./destination.png" alt="icon"></img>
                                    <div class="intial_sec">110003, Delhi</div>
                                    <img class="flight_off_sec" src="./flight.png" alt="icon"></img>
                                    <img class="col_sec" src="./destination.png" alt="icon"></img>
                                    <div class="final_sec">200080, Shanghai</div>
                                  </div>

                                  <div class="view_line_c_sec">
                                    <img class="small_pic_sec" src="./boat.png" alt="boat"></img>
                                    <div classs="limited_sec">Primetime Worldwide</div>
                                    <img class="str_rating_sec" src="./4star.png" alt="star"></img>
                                  </div>
                           </div>
          </div>
          
          
      </div>
    </div>
  );
}

export default App;
