"use client";
import { useState } from "react";

export default function DepositPage() {
  const [amount, setAmount] = useState("");
  const [trxId, setTrxId] = useState("");

  const presetAmounts = [100, 200, 500, 1000, 3000, 5000, 10000, 15000, 20000, 25000];

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !trxId) {
      alert("Please fill all fields");
      return;
    }
    alert(`Deposit Request Sent!\nAmount: ${amount}\nTRX ID: ${trxId}`);
    setAmount("");
    setTrxId("");
  };

  return (
    <div className="min-h-screen max-w-[400px] mx-auto p-2 justify-center" >
      <p className="text-center text-bold text-md text-yellow-300 py-2 bg-green-800 ">Deposit</p>
      <div className="py-2">
        <p className="mb-2">Deposit Method *</p>
        <div className="flex items-center gap-4 mb-4 text-white">
          <p className="border-2 text-bold bg-pink-700 py-4 px-4 rounded-md ">NAGAD VIP / DP</p>
          <p className="border-2 text-bold  bg-pink-700 py-4 px-4 rounded-md ">BKASH VIP / DP</p>
        </div>

        {/* Notic */}
        <p className="text-sm  text-red-500 mb-3">❗ ❗ ❗ NOTE: অনুগ্রহ করে আপনার ডিপোজিট করার পরে অবশ্যই আপনার Trx-ID আইডি সাবমিট করবেন। তাহলে খুব দ্রুত আপনার একাউন্টের মধ্যে টাকা যোগ হয়ে যাবে। ⚠️⚠️⚠️</p>
        <hr />
        <p className="text-sm  text-red-500 ">❗ অনুগ্রহ করে সতর্ক থাকুন (যে সম্প্রতি ডিপোজিট পরিষেবা প্রদানের জন্য Telegram বা Facebook এর ভান করে অনেক স্ক্যামার এসেছে)! আমাদের অফিসিয়াল ডিপোজিটগুলো শুধুমাত্র প্ল্যাটফর্মের মধ্যে সম্পন্ন হয়। ⚠️</p>

        {/* Deposit Amount */}
        <div className="mt-6">
          <p>Depost Amounts *</p>
          <div className="grid grid-cols-5 mt-1 gap-2 items-center justify-between">
            {presetAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => handleAmountClick(amt)}
                className="bg-white text-black px-4 py-1 rounded-md border border-red-500"
              >
                {amt}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-2 font-medium">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Amount"
              className="w-full bg-white px-4 py-2 rounded-sm border border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-sm font-semibold transition"
          >
            Submit
          </button>
        </form>
            <p className="mt-4 text-red-500">Deposit Info: 24/24</p>
            <p className="mt-1  text-red-500">MasterCash88 Official</p>
      </div>
    </div>
  );
}
