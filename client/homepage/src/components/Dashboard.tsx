export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-green-900 text-white">
        <div className="p-6 text-3xl font-bold">CropGain</div>
        <nav className="space-y-4">
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
      <main className="flex-1 p-10 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold mb-8">Applied Inputs</h1>

          <div className="space-y-12">
            {/* Fertilizer Section */}
            <section>
              <h2 className="text-2xl font-medium mb-4">Fertilizer</h2>
              <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applied Crops
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cost
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Units
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Liquid
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Density
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500"
                    >
                      <button className="text-green-800 hover:underline">
                        + Add Fertilizer
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* Seeds Section */}
            <section>
              <h2 className="text-2xl font-medium mb-4">Seeds</h2>
              <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applied Crops
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cost
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Units
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500"
                    >
                      <button className="text-green-800 hover:underline">
                        + Add Seeds
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
