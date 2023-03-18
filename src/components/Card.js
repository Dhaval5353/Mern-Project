import React from "react";

export default function Card() {
  return (
    <div>
      <div className="card mt-5" style={{ width: "18rem", maxHeigth: "360px" }}>
        <img src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is some important text.</p>
          <div className="container w-100">
            <div class="mb-3">
              <select className="m-2 h-100  bg-success" name="" id="">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded" name="" id="">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-6">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
