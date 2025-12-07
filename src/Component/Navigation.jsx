const Navigation=()=>{
    return(
        <div>
        <nav className='Navbar'>
        <div className='Logo'>
          <img src="/Images/brand_logo.png" alt="BrandLogos"/>
        </div>
        <ul>
          <li>Home</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button>Login</button>
       </nav>
        </div>
    )
}
export default Navigation;