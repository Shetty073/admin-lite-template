export default function DashboardPage() {
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

        {/* Table & Chart */}
        <div className="row">
          {/* Table */}
          <div className="col-12 col-md-6">
            <h3 className="fw-bold fs-4 my-3 text-capitalize">Users</h3>
            <table className="table table-striped">
              <thead>
                <tr className="highlight">
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>

            </table>
          </div>

          <div className="col-12 col-md-6">
            <h3 className="fw-bold fs-4 my-3 text-capitalize">Orders</h3>
            <table className="table table-striped">
              <thead>
                <tr className="highlight">
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">ORD_1</th>
                  <td>AMD CPU</td>
                  <td>1</td>
                  <td>₹ 23,456</td>
                </tr>
                <tr>
                  <th scope="row">ORD_2</th>
                  <td>Nvidia GPU</td>
                  <td>2</td>
                  <td>₹ 61,899</td>
                </tr>
                <tr>
                  <th scope="row">ORD_3</th>
                  <td>HyperX RAM</td>
                  <td>2</td>
                  <td>₹ 7,399</td>
                </tr>
              </tbody>

            </table>
          </div>

        </div>

      </div>
    </div>
  );
}