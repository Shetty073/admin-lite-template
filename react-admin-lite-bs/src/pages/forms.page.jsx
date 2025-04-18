export default function FormsPage() {
  return (
    <div className="container-fluid">

      <div className="mb-3">
        <h3 className="fw-bold fs-4 mb-3 text-capitalize">
          Admin Dashboard
        </h3>

        {/* Cards */}
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="card shadow">
              <div className="card-body py-4">
                <h6 className="mb-2 fw-bold">
                  Member Progress
                </h6>
                <p className="fw-bold">
                  $75,648
                </p>
                <div className="mb-0">
                  <span className="badge text-success me-2">
                    +9.0%
                  </span>
                  <span className="fw-bold">
                    Since Last Month
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card shadow">
              <div className="card-body py-4">
                <h6 className="mb-2 fw-bold">
                  Member Progress
                </h6>
                <p className="fw-bold">
                  $75,648
                </p>
                <div className="mb-0">
                  <span className="badge text-success me-2">
                    +9.0%
                  </span>
                  <span className="fw-bold">
                    Since Last Month
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card shadow">
              <div className="card-body py-4">
                <h6 className="mb-2 fw-bold">
                  Member Progress
                </h6>
                <p className="fw-bold">
                  $75,648
                </p>
                <div className="mb-0">
                  <span className="badge text-success me-2">
                    +9.0%
                  </span>
                  <span className="fw-bold">
                    Since Last Month
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Forms */}
        <div className="row">
          {/* Form 1 */}
          <div className="col-12 col-md-6">
            <h3 className="fw-bold fs-4 my-3 text-capitalize">Add data</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

          {/* Form 2 */}
          <div className="col-12 col-md-6">
            <h3 className="fw-bold fs-4 my-3 text-capitalize">
              Add some more data
            </h3>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}