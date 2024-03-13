import React, { useEffect, useState } from "react";
import "./index.scss"; // Import your SCSS file for styling
import "./ordertable.scss"; // Import your SCSS file for styling
import api from "../../config/axios";
import { formatDistance } from "date-fns";

const Wallet = ({ data }) => {
  const [balance, setBalance] = useState(100); // Initial balance
  console.log(data);
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
        <div className="balance">${data?.balance?.toFixed(2)}</div>
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
  const [wallet, setWallet] = useState();
  const [transaction, setTransactions] = useState([]);
  const fetchWallet = async () => {
    const response = await api.get("wallet");
    setWallet(response.data);
  };

  const fetchTransaction = async () => {
    const response = await api.get("transaction");
    setTransactions(response.data);
  };

  useEffect(() => {
    fetchWallet();
    fetchTransaction();
  }, []);

  return (
    <div>
      <Wallet data={wallet} />
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
                    {transaction
                      .sort(
                        (item1, item2) =>
                          new Date(item2.createAt) - new Date(item1.createAt)
                      )
                      .map((item) => {
                        return (
                          <tr className="cell-1">
                            <td>{item.ordered.id}</td>
                            <td>VN PAY</td>
                            <td>
                              <span className="badge success">Success</span>
                            </td>
                            <td>${item.moneyValue}</td>
                            <td>
                              {formatDistance(
                                new Date(item.createAt),
                                new Date(),
                                { addSuffix: true }
                              )}
                            </td>
                            <td>
                              <i className="fa fa-ellipsis-h text-black-50"></i>
                            </td>
                          </tr>
                        );
                      })}
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
