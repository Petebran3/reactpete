import {Link, useMatch, useResolvedPath} from "react-router-dom"
export default function Navbar(){

  
    return <nav className="nav">
        <Link to="/" className="site-title">Don't Bite The Apple
        </Link>
        <ul>
            
                <CustomLink to="/products">Products</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                
            
            
        </ul>
    </nav>
}
 function CustomLink({to, children,...props}) {
   const resolvePath = useResolvedPath(to)
   const isActive = useMatch({path: resolvePath.pathname, end: true})
     return (
        <li className={isActive ? "active" : ""}>
        <Link to={to}{...props}>{children}
        </Link>
        </li>
     )
 }