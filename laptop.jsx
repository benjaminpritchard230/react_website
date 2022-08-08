import React from "react";
import Footer from "./footer";
import Header from "./header";
import laptop from "./images/big-laptop.jpg";

function Laptop() {
  //   let processorCost = 500;
  //   let memoryCost = 200;
  //   let ssdCost = 100;
  const baseCost = 1899;
  const [processorCost, setProcessorCost] = React.useState(0);
  const [memoryCost, setMemoryCost] = React.useState(0);
  const [ssdCost, setSsdCost] = React.useState(0);
  let totalCost = `£${baseCost + processorCost + memoryCost + ssdCost}`;
  return (
    <div>
      <div className="container pt-3">
        <div className="row">
          <div className="col-5 d-none d-lg-block">
            <img className="img-fluid w-100" src={laptop} alt="" />
          </div>
          <div className="col-7">
            <div className="row">
              <p className="fs-6">New</p>
              <p className="fs-6">
                Customise your 14‑inch MacBook Pro - Space Grey
              </p>
              <p className="fs-6">
                Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine
              </p>
              <p className="fs-6">16GB unified memory</p>
              <p className="fs-6">512GB SSD storage</p>
              <p className="fs-6">67W USB-C Power Adapter</p>
              <p className="fs-6">14-inch Liquid Retina XDR display</p>
              <p className="fs-6">
                Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3
                port
              </p>
              <p className="fs-6">
                Backlit Magic Keyboard with Touch ID - British
              </p>
            </div>
            <div className="row">
              <hr />
              <p>Add a trade-in</p>
              <p>
                Get credit towards a new Mac when you trade in your eligible
                computer. Or recycle it for free.**
              </p>
              <p>
                <a href="somewhere.html">Get started</a>
              </p>
              <hr />
            </div>
            <div className="row">
              <p>System on a Chip (processor)</p>
              <p>
                <a href="somewhere.html">Which chip is right for you?</a>
              </p>
              <div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setProcessorCost(0)}
                  >
                    M1 PRO
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setProcessorCost(200)}
                  >
                    M1 MAX
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setProcessorCost(400)}
                  >
                    M1 ULTRA
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <p>Memory</p>
              <p>
                <a href="somewhere.html">How much memory is right for you?</a>
              </p>
              <div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setMemoryCost(0)}
                  >
                    16GB
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setMemoryCost(200)}
                  >
                    24GB
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setMemoryCost(400)}
                  >
                    32GB
                  </button>
                </div>
              </div>
              <hr />
              <div className="row">
                <p>Storage</p>
                <p>
                  <a href="somewhere.html">
                    How much storage is right for you?
                  </a>
                </p>
                <div>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setSsdCost(0)}
                    >
                      512GB
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setSsdCost(300)}
                    >
                      1TB
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setSsdCost(500)}
                    >
                      2TB
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer text={totalCost} />
    </div>
  );
}

export default Laptop;
