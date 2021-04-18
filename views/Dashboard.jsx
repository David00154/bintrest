import React from "react";
import DashboardLayout from "./_layouts/DashboardLayout.jsx";

export default function Dashboard(props) {
  const { name, withdrawls, balance, deposit, earning } = props.user;
  return (
    <DashboardLayout title="Dashboard" {...props}>
      <div>
        <div id="home">
          <div className="lg:flex justify-between items-center mb-6">
            <p className="text-2xl font-semibold mb-2 lg:mb-0">Hello {name}!</p>
            <a
              href="/user/logout"
              className="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow"
            >
              Logout
            </a>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <p class="text-xl font-semibold mb-4"></p>

              <div class="w-full bg-white border rounded-lg p-1 mb-8 xl:mb-0">
                {/* <canvas id="buyers-chart" width="600" height="400"></canvas> */}
                <iframe
                  allowtransparency="true"
                  frameborder="0"
                  src="https://s.tradingview.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A540%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22light%22%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22anyoption.online%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%7D"
                  style={{
                    boxSizing: "border-box",
                    height: "540px",
                    width: "100%",
                  }}
                ></iframe>
              </div>
            </div>

            <div class="w-full px-3 mb-4">
              <p class="text-xl font-semibold mb-4"></p>

              <div class="w-full bg-white border rounded-lg p-1 mb-8 xl:mb-0">
                {/* <canvas id="reviews-chart" width="600" height="400"></canvas> */}
                <div
                  style={{
                    width: "100%",
                    height: "calc(610px - 32px)",
                    background: "transparent",
                    padding: "0 !important",
                  }}
                >
                  <iframe
                    id="tradingview_4b404"
                    src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_4b404&amp;symbol=BITSTAMP%3ABTCUSD&amp;interval=1&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=%5B%5D&amp;theme=light&amp;style=1&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=phoenixcryptotrade.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=BITSTAMP%3ABTCUSD"
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: "0 !important",
                      padding: "0 !important",
                    }}
                    frameborder="0"
                    allowtransparency="true"
                    scrolling="no"
                    allowfullscreen=""
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mb-20">
              <div className="w-1/2 xl:w-1/4 px-3">
                <div className="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
                  {/* <svg
                    className="w-16 h-16 fill-current mr-4 hidden lg:block"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
                  </svg> */}

                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    className="w-16 h-16 fill-current mr-4 hidden lg:block"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,153.921c-46.856,0-84.977,38.12-84.977,84.977s38.121,84.977,84.977,84.977s84.977-38.12,84.977-84.977
			S302.856,153.921,256,153.921z M256,307.841c-38.015,0-68.944-30.928-68.944-68.944s30.928-68.944,68.944-68.944
			s68.944,30.928,68.944,68.944S294.015,307.841,256,307.841z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M256,230.881c-5.01,0-9.086-4.076-9.086-9.086s4.076-9.086,9.086-9.086h17.102c4.427,0,8.017-3.588,8.017-8.017
			c0-4.428-3.589-8.017-8.017-8.017h-9.086v-9.086c0-4.428-3.589-8.017-8.017-8.017s-8.017,3.588-8.017,8.017v10.405
			c-9.93,3.354-17.102,12.752-17.102,23.8c0,13.851,11.268,25.119,25.119,25.119c5.01,0,9.086,4.076,9.086,9.086
			s-4.076,9.086-9.086,9.086h-17.102c-4.427,0-8.017,3.588-8.017,8.017s3.589,8.017,8.017,8.017h9.086v9.086
			c0,4.428,3.589,8.017,8.017,8.017s8.017-3.588,8.017-8.017V279.8c9.93-3.354,17.102-12.752,17.102-23.8
			C281.119,242.149,269.851,230.881,256,230.881z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M508.829,189.754l-31.033-23.541v-64.134c0-4.428-3.589-8.017-8.017-8.017h-87.09L271.182,9.47
			c-8.938-6.781-21.424-6.781-30.362,0L129.312,94.063h-87.09c-4.427,0-8.017,3.588-8.017,8.017v64.134L3.171,189.754
			C1.196,191.256,0,193.66,0,196.142v307.841C0,508.412,3.589,512,8.017,512h342.046c4.427,0,8.017-3.588,8.017-8.017
			c0-4.428-3.589-8.017-8.017-8.017H16.033V210.553l459.833,285.414h-83.048c-4.427,0-8.017,3.588-8.017,8.017
			c0,4.428,3.589,8.017,8.017,8.017H503.96c3.114,0,5.995-1.849,7.301-4.668c0.48-1.041,0.74-2.2,0.74-3.349V196.142
			C512,193.66,510.803,191.256,508.829,189.754z M34.205,202.961l-12.052-7.481l12.052-9.142V202.961z M477.795,186.338
			l12.052,9.142l-12.052,7.481V186.338z M68.409,179.04v45.152l-18.171-11.279V110.096h163.006c4.427,0,8.017-3.588,8.017-8.017
			s-3.589-8.017-8.017-8.017H155.84l94.669-71.817c3.233-2.453,7.748-2.453,10.982,0l94.669,71.817H256
			c-4.427,0-8.017,3.588-8.017,8.017s3.589,8.017,8.017,8.017h205.762v102.817l-18.171,11.279V179.04
			c0-4.428-3.589-8.017-8.017-8.017c-19.155,0-34.739-15.583-34.739-34.739c0-4.428-3.589-8.017-8.017-8.017H119.182
			c-4.427,0-8.017,3.588-8.017,8.017c0,19.156-15.584,34.739-34.739,34.739C71.999,171.023,68.409,174.611,68.409,179.04z
			 M84.443,234.144v-47.721c21.588-3.439,38.684-20.535,42.124-42.123h258.868c3.439,21.588,20.534,38.684,42.124,42.123v47.721
			L256.001,340.628L84.443,234.144z M495.967,489.573l-224.766-139.51l224.766-139.51V489.573z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M375.716,17.102h-9.086V8.017c0-4.428-3.589-8.017-8.017-8.017s-8.017,3.588-8.017,8.017v9.086h-9.086
			c-4.427,0-8.017,3.588-8.017,8.017c0,4.428,3.589,8.017,8.017,8.017h9.086v9.086c0,4.428,3.589,8.017,8.017,8.017
			s8.017-3.588,8.017-8.017v-9.086h9.086c4.427,0,8.017-3.588,8.017-8.017C383.733,20.691,380.143,17.102,375.716,17.102z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M102.079,42.756h-9.086V33.67c0-4.428-3.589-8.017-8.017-8.017s-8.017,3.588-8.017,8.017v9.086h-9.086
			c-4.427,0-8.017,3.588-8.017,8.017c0,4.428,3.589,8.017,8.017,8.017h9.086v9.086c0,4.428,3.589,8.017,8.017,8.017
			s8.017-3.588,8.017-8.017v-9.086h9.086c4.427,0,8.017-3.588,8.017-8.017C110.096,46.344,106.507,42.756,102.079,42.756z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M444.125,42.756h-9.086V33.67c0-4.428-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.588-8.017,8.017v9.086h-9.086
			c-4.427,0-8.017,3.588-8.017,8.017c0,4.428,3.589,8.017,8.017,8.017h9.086v9.086c0,4.428,3.589,8.017,8.017,8.017
			c4.427,0,8.017-3.588,8.017-8.017v-9.086h9.086c4.427,0,8.017-3.588,8.017-8.017C452.142,46.344,448.553,42.756,444.125,42.756z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M170.489,17.102h-9.086V8.017c0-4.428-3.589-8.017-8.017-8.017s-8.017,3.588-8.017,8.017v9.086h-9.086
			c-4.427,0-8.017,3.588-8.017,8.017c0,4.428,3.589,8.017,8.017,8.017h9.086v9.086c0,4.428,3.589,8.017,8.017,8.017
			s8.017-3.588,8.017-8.017v-9.086h9.086c4.427,0,8.017-3.588,8.017-8.017C178.505,20.691,174.916,17.102,170.489,17.102z"
                        />
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>

                  <div className="text-gray-700">
                    <p className="font-semibold text-3xl">{earning}</p>
                    <p>Earnings</p>
                  </div>
                </div>
              </div>

              <div className="w-1/2 xl:w-1/4 px-3">
                <div className="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6 xl:mb-0">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    id="_003_ECOMMERCE_03"
                    className="w-16 h-16 fill-current mr-4 hidden lg:block"
                    data-name="003_ECOMMERCE_03"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>003_081</title>
                    <path d="M21,20a.99974.99974,0,0,1-1-1V5a1.001,1.001,0,0,0-1-1H5A1.001,1.001,0,0,0,4,5V19a1,1,0,0,1-2,0V5A3.00328,3.00328,0,0,1,5,2H19a3.00328,3.00328,0,0,1,3,3V19A.99974.99974,0,0,1,21,20Z" />
                    <path d="M15,22H9a3.00328,3.00328,0,0,1-3-3V14a1,1,0,0,1,2,0v5a1.001,1.001,0,0,0,1,1h6a1.001,1.001,0,0,0,1-1V14a1,1,0,0,1,2,0v5A3.00328,3.00328,0,0,1,15,22Z" />
                    <path d="M16,11H8A2.00229,2.00229,0,0,1,6,9V2H18V9A2.00229,2.00229,0,0,1,16,11ZM8,4V9h8.00146L16,4Z" />
                    <path d="M12,17a2.88623,2.88623,0,0,1-3-2.75,1,1,0,0,1,2,0c0,.40625.458.75,1,.75s1-.34375,1-.75a1,1,0,0,1,2,0A2.88623,2.88623,0,0,1,12,17Z" />
                    <circle cx="6" cy="7" r="1" circle cx="18" cy="7" r="1" />
                  </svg>

                  <div className="text-gray-700">
                    <p className="font-semibold text-3xl">{withdrawls}</p>
                    <p>Withdrawls</p>
                  </div>
                </div>
              </div>

              <div className="w-1/2 xl:w-1/4 px-3">
                <div className="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="w-16 h-16 mr-4 hidden lg:block"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path
                          d="M335.367,257.951c-7.187,0-13.033,5.847-13.033,13.034v43.562c0,7.187,5.847,13.033,13.033,13.033H512v-69.628H335.367z
			 M357.347,312.858c-11.097,0-20.094-8.996-20.094-20.094c0-11.097,8.996-20.094,20.094-20.094s20.094,8.996,20.094,20.094
			C377.44,303.862,368.444,312.858,357.347,312.858z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M335.367,227.534H512V152.95c0-23.959-19.492-43.45-43.45-43.45h-6.084H133.703H43.45C19.492,109.5,0,128.991,0,152.95
			v310.047c0,23.959,19.492,43.451,43.45,43.451h425.099c23.959,0,43.45-19.492,43.45-43.451v-105H335.367
			c-23.959,0-43.45-19.491-43.45-43.45v-43.562C291.917,247.026,311.41,227.534,335.367,227.534z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <polygon points="425.425,5.552 219.067,79.082 451.626,79.082 		" />
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>

                  <div className="text-gray-700">
                    <p className="font-semibold text-3xl">{deposit}</p>
                    <p>Deposits</p>
                  </div>
                </div>
              </div>

              <div className="w-1/2 xl:w-1/4 px-3">
                <div className="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6">
                  <svg
                    className="w-16 h-16 fill-current mr-4 hidden lg:block"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path>
                  </svg>

                  <div className="text-gray-700">
                    <p className="font-semibold text-3xl">{balance}</p>
                    <p>Balance</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full xl:w-1/3 px-3">
              <p class="text-xl font-semibold mb-4">Recent Transactions</p>
              <div class="w-full bg-white border rounded-lg p-4"></div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
