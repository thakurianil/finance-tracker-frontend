import React from 'react'

function Header() {
  return (
    <>
      <header class="flex justify-between items-center py-4">
            <h1 class="text-xl font-bold">FT</h1>
            <nav>
                <a href="#" class="text-gray-400 mx-2">Dashboard</a>
                <a href="#" class="text-gray-400 mx-2">Transaction</a>
                <a href="#" class="text-gray-400 mx-2">Logout</a>
            </nav>
        </header>
    </>
  )
}
export default Header;