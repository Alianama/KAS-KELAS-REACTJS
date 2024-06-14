import "../output.css";

function Amount() {
  return (
    <div className="d-flex w-100 gap-9 ">
      <div className="card bg-primary ">
        <div className="card-body">
          <h5 className="card-title">Total Amount</h5>
          <p className="card-text">Rp. 20000</p>
        </div>
      </div>
      <div className="card bg-success">
        <div className="card-body">
          <h5 className="card-title">Pengeluaran Bulan Ini</h5>
          <p className="card-text">Rp. 20000</p>
        </div>
      </div>
      <div className="card bg-warning ">
        <div className="card-body text-white ">
          <h5 className="card-title">Pengeluaran Bulan Lalu</h5>
          <p className="card-text">Rp. 20000</p>
        </div>
      </div>
    </div>
  );
}

export default Amount;
