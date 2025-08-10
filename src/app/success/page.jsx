import Link from "next/link";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-[#007aff]-600 mb-4">🎉 Payment Successful!</h1>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your transaction was completed successfully.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#007aff] hover:bg-[#007aff] text-white font-medium py-2 px-4 rounded transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
