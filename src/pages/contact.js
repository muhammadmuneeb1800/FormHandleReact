import React from "react";

export default function Contact() {
  let fullName = "";
  let city = "";
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
    console.log("fullName", fullName);
    console.log("city", city);
  };
  return (
    <>
      <main className="py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center">Contact us</h1>
              <hr />
              <div className="card p-4 mx-auto" style={{ maxWidth: 600 }}>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Full Name"
                        name="fullName"
                        onChange={(e) => {
                          fullName = e.target.value;
                        }}
                      />
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="City"
                        name="City"
                        onChange={(e) => {
                          city = e.target.value;
                        }}
                      />
                    </div>
                    <div className="col">
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
