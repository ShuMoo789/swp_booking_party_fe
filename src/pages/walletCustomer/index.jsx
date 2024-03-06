import React, { useState } from "react";
import "./index.scss"; // Import your SCSS file for styling
import "./ordertable.scss"; // Import your SCSS file for styling

const Wallet = () => {
  const [balance, setBalance] = useState(100); // Initial balance

  // Function to handle adding money
  const addMoney = () => {
    // Placeholder logic for adding money
    const amountToAdd = 50; // Example amount to add
    setBalance(balance + amountToAdd);
    alert(`Added $${amountToAdd} to your wallet!`);
  };

  return (
    <div className="wallet-container">
      <div className="balance-container">
        <h1>Account Balance</h1>
        <div className="balance">${balance.toFixed(2)}</div>
      </div>
      <div className="button-container">
        <button className="add-money-btn" onClick={addMoney}>
          Add Money to Wallet
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Wallet />
      <h2 style={{ marginTop: "20px", marginLeft: "20px" }}>
        All Transaction Details
      </h2>
      <div className="container mt-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-12">
            <div className="rounded">
              <div className="table-responsive table-borderless">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Order #</th>
                      <th>Method</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Created</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    <tr className="cell-1">
                      <td>#SO-13487</td>
                      <td>Paypal</td>
                      <td>
                        <span className="badge success">Success</span>
                      </td>
                      <td>$2674.00</td>
                      <td>Today</td>
                      <td>
                        <i className="fa fa-ellipsis-h text-black-50"></i>
                      </td>
                    </tr>
                    <tr className="cell-1">
                      <td>#SO-13453</td>
                      <td>Momo</td>
                      <td>
                        <span className="badge success">Success</span>
                      </td>
                      <td>$3454.00</td>
                      <td>Yesterday</td>
                      <td>
                        <i className="fa fa-ellipsis-h text-black-50"></i>
                      </td>
                    </tr>
                    <tr className="cell-1">
                      <td>#SO-13498</td>
                      <td>GooglePay</td>
                      <td>
                        <span className="badge failed">Failed</span>
                      </td>
                      <td>$6274.00</td>
                      <td>May 12, 2020</td>
                      <td>
                        <i className="fa fa-ellipsis-h text-black-50"></i>
                      </td>
                    </tr>
                    <tr className="cell-1">
                      <td>#SO-16499</td>
                      <td>ApplePay</td>
                      <td>
                        <span className="badge pending">Pending</span>
                      </td>
                      <td>$6375.00</td>
                      <td>May 11, 2020</td>
                      <td>
                        <i className="fa fa-ellipsis-h text-black-50"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
