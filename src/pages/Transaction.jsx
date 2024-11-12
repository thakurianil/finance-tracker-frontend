import React, { useEffect, useState } from "react";
import { getTransactions } from "../helpers/userAxios";
import AddTransactionModal from "./addTransaction"; // Import your modal component

// TransactionRow component for rendering each row in the table
const TransactionRow = ({ transaction, index }) => {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>{index + 1}</td>
      <td>{new Date(transaction.date).toLocaleDateString("en-CA")}</td>
      <td>{transaction.description}</td>
      <td className={transaction.type === "debit" ? "text-red-500" : ""}>
        {transaction.type === "debit" ? `-${transaction.amount}` : ""}
      </td>
      <td className={transaction.type === "credit" ? "text-green-500" : ""}>
        {transaction.type === "credit" ? `$${transaction.amount}` : ""}
      </td>
    </tr>
  );
};

// Main TransactionPage component
const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false); // State to toggle modal visibility

  const getTransaction = async () => {
    const response = await getTransactions();
    console.log(200, response);

    setTransactions(response.transactions ?? []);
  };

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    getTransaction();
  };

  useEffect(() => {
    // fill posts
    getTransaction();
  }, []);

  // Calculate the total balance
  const totalBalance = transactions.reduce((total, transaction) => {
    if (transaction.type === "credit")
      return total + parseFloat(transaction.amount);
    if (transaction.type === "debit")
      return total - parseFloat(transaction.amount);
    return total;
  }, 0);

  return (
    <div className="container mx-auto">
      <div className="table-container bg-gray-800 p-6 rounded-lg my-6 mx-auto w-6/5">
        <div className="table-header flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-white">
            {transactions.length} transaction(s) found!
          </h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Search transactions..."
              className="p-2 rounded border border-gray-300 mr-4"
            />
            <button
              className="bg-blue-600 text-white p-2 rounded flex items-center"
              onClick={() => setIsModalVisible(true)} // Show modal on button click
            >
              <i className="fas fa-plus mr-2"></i> Add New Transaction
            </button>
          </div>
        </div>
        <table className="w-full table-auto text-white">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>#</th>
              <th>Date</th>
              <th>Title</th>
              <th>Out</th>
              <th>In</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <TransactionRow
                key={index}
                transaction={transaction}
                index={index}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5" className="text-right text-white">
                Total Balance
              </td>
              <td className="text-white">${totalBalance.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Add Transaction Modal */}
      <AddTransactionModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAddTransaction={handleAddTransaction}
      />
    </div>
  );
};

export default Transaction;
