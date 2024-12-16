import React from 'react'

function Header() {
  return (
    <>
     <div>
      <nav className="navbar navbar-light bg-light justify-content-around">
        <h1 className="navbar-brand bg-light"style={{border: "none", margin: "1rem"}}>Finance Tracker</h1>

        <header class="flex justify-around items-center py-6">
            
            <nav>
                <a href="/" class="text-gray-400 mx-2">Dashboard</a>
                <a href="/transaction" class="text-gray-400 mx-2">Transaction</a>
                <a href="#" class="text-gray-400 mx-2">Logout</a>
            </nav>
        </header>
        
      </nav>
    </div>
    

    </>
  )
}
export default Header;

