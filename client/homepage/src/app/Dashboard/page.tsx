import React from "react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-72 bg-green-900 text-white">
        <div className="p-6 text-5xl font-bold">CropGain</div>
        <nav className="space-y-4 text-2xl">
          <a href="#" className="block py-2 px-6 hover:bg-green-700">
            Dashboard
          </a>
          <a href="#" className="block py-2 px-6 hover:bg-green-700">
            Markets
          </a>
          <a href="#" className="block py-2 px-6 hover:bg-green-700">
            Fields and Land Cost
          </a>
          <a href="#" className="block py-2 px-6 hover:bg-green-700">
            Inputs
          </a>
          <a href="#" className="block py-2 px-6 hover:bg-green-700">
            Applications
          </a>
          <a href="#" className="block py-2 px-6 hover:bg-green-700">
            Crop Planner
          </a>
          <a href="#" className="block py-2 px-6 hover:bg-green-700">
            Reports
          </a>
          <a href="#" className="block py-2 px-6 hover:bg-green-700">
            Inventory
          </a>
          <a href="#" className="block py-2 px-6 hover:bg-green-700">
            Balance Sheets
          </a>
          <a href="#" className="block py-2 px-6 hover:bg-green-700">
            Analysis
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-semibold mb-8">Applied Inputs</h1>
          <div className="space-y-12">
            {/* Fertilizer Section */}
            <section>
              <h2 className="text-3xl font-medium mb-4">Fertilizer</h2>
              <table className="w-full bg-white overflow-hidden mx-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Applied Crops
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Cost
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Units
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Liquid
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Density
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={6}
                      className="px-0 py-4 whitespace-nowrap text-sm text-center text-gray-500"
                    >
                      <button className="w-full h-full text-black flex items-center justify-center space-x-2 bg-white border border-black py-2 px-4 group hover:border-green-600">
                        <span className="inline-flex items-center justify-center w-7 h-7 text-3xl bg-white border-2 border-black rounded-full text-black group-hover:text-green-600 group-hover:border-green-600 transition-colors duration-300">
                          +
                        </span>
                        <span className="text-lg group-hover:text-green-600 transition-colors duration-300">
                          Add Fertilizer
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Seeds Section */}
            <section>
              <h2 className="text-3xl font-medium mb-4">Seeds</h2>
              <table className="w-full bg-white overflow-hidden mx-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Applied Crops
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Cost
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Units
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={4}
                      className="px-0 py-4 whitespace-nowrap text-sm text-center text-gray-500"
                    >
                      <button className="w-full h-full text-black flex items-center justify-center space-x-2 bg-white border border-black py-2 px-4 group hover:border-green-600">
                        <span className="inline-flex items-center justify-center w-7 h-7 text-3xl bg-white border-2 border-black rounded-full text-black group-hover:text-green-600 group-hover:border-green-600 transition-colors duration-300">
                          +
                        </span>
                        <span className="text-lg group-hover:text-green-600 transition-colors duration-300">
                          Add Seeds
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Chemicals Section */}
            <section>
              <h2 className="text-3xl font-medium mb-4">Chemicals</h2>
              <table className="w-full bg-white overflow-hidden mx-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Applied Crops
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Cost
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Units
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={4}
                      className="px-0 py-4 whitespace-nowrap text-sm text-center text-gray-500"
                    >
                      <button className="w-full h-full text-black flex items-center justify-center space-x-2 bg-white border border-black py-2 px-4 group hover:border-green-600">
                        <span className="inline-flex items-center justify-center w-7 h-7 text-3xl bg-white border-2 border-black rounded-full text-black group-hover:text-green-600 group-hover:border-green-600 transition-colors duration-300">
                          +
                        </span>
                        <span className="text-lg group-hover:text-green-600 transition-colors duration-300">
                          Add Chemicals
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <div>
              <div className="text-5xl font-semibold mb-4">Overhead Inputs</div>

              <p className="text-2xl mb-14">
                These inputs will track your overhead expenses like Labor,
                Drying, or any number of custom categories.
              </p>
            </div>

            {/* Crop Insurance Section */}
            <section>
              <h2 className="text-3xl font-medium mb-4">Crop Insurance</h2>
              <table className="w-full bg-white overflow-hidden mx-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Crops
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Fields
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Coverage Amount
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Cost
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Entity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={5}
                      className="px-0 py-4 whitespace-nowrap text-sm text-center text-gray-500"
                    >
                      <button className="w-full h-full text-black flex items-center justify-center space-x-2 bg-white border border-black py-2 px-4 group hover:border-green-600">
                        <span className="inline-flex items-center justify-center w-7 h-7 text-3xl bg-white border-2 border-black rounded-full text-black group-hover:text-green-600 group-hover:border-green-600 transition-colors duration-300">
                          +
                        </span>
                        <span className="text-lg group-hover:text-green-600 transition-colors duration-300">
                          Add Insurance
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Fuel Section */}
            <section>
              <h2 className="text-3xl font-medium mb-4">Fuel</h2>
              <table className="w-full bg-white overflow-hidden mx-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Applied Crops
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Cost
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Units
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={4}
                      className="px-0 py-4 whitespace-nowrap text-sm text-center text-gray-500"
                    >
                      <button className="w-full h-full text-black flex items-center justify-center space-x-2 bg-white border border-black py-2 px-4 group hover:border-green-600">
                        <span className="inline-flex items-center justify-center w-7 h-7 text-3xl bg-white border-2 border-black rounded-full text-black group-hover:text-green-600 group-hover:border-green-600 transition-colors duration-300">
                          +
                        </span>
                        <span className="text-lg group-hover:text-green-600 transition-colors duration-300">
                          Add Fuel
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Labor Section */}
            <section>
              <h2 className="text-3xl font-medium mb-4">Labor</h2>
              <table className="w-full bg-white overflow-hidden mx-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Applied Crops
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Cost
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Units
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={4}
                      className="px-0 py-4 whitespace-nowrap text-sm text-center text-gray-500"
                    >
                      <button className="w-full h-full text-black flex items-center justify-center space-x-2 bg-white border border-black py-2 px-4 group hover:border-green-600">
                        <span className="inline-flex items-center justify-center w-7 h-7 text-3xl bg-white border-2 border-black rounded-full text-black group-hover:text-green-600 group-hover:border-green-600 transition-colors duration-300">
                          +
                        </span>
                        <span className="text-lg group-hover:text-green-600 transition-colors duration-300">
                          Add Labor
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Repair Section */}
            <section>
              <h2 className="text-3xl font-medium mb-4">Repair</h2>
              <table className="w-full bg-white overflow-hidden mx-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Applied Crops
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Cost
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-black uppercase tracking-wider">
                      Units
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={4}
                      className="px-0 py-4 whitespace-nowrap text-sm text-center text-gray-500"
                    >
                      <button className="w-full h-full text-black flex items-center justify-center space-x-2 bg-white border border-black py-2 px-4 group hover:border-green-600">
                        <span className="inline-flex items-center justify-center w-7 h-7 text-3xl bg-white border-2 border-black rounded-full text-black group-hover:text-green-600 group-hover:border-green-600 transition-colors duration-300">
                          +
                        </span>
                        <span className="text-lg group-hover:text-green-600 transition-colors duration-300">
                          Add Repair
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
