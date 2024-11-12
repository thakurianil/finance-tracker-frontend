import React, { useState } from 'react';
import { addTransactions, getTransactions } from '../helpers/userAxios';

const AddTransactionModal = ({ isVisible, onClose, onAddTransaction }) => {
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('credit');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    const newTransaction = {
      amount,
      type: transactionType,
      description,
      date,
    };

    await addTransactions(newTransaction);
    onClose(); 
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-xl font-semibold">Add New Transaction</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="my-4">
            <label htmlFor="amount" className="block text-sm">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          
          <div className="my-4">
            <label htmlFor="transactionType" className="block text-sm">Transaction Type</label>
            <select
              id="transactionType"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </div>
          
          <div className="my-4">
            <label htmlFor="description" className="block text-sm">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          
          <div className="my-4">
            <label htmlFor="date" className="block text-sm">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white p-2 rounded"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded"
            >
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTransactionModal;
