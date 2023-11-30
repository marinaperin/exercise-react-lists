import './Navbar.css';

const Navbar = ({links, title}) =>{
    return (
        <nav>
            <h1>{title}</h1>
            <menu>
                {links.map(({name, url},i)=>(
                    <li key={`link ${i}`}>
                        <a href={url}>
                            {name}
                        </a>
                    </li>
                ))}
            </menu>
        </nav>
    )
}
export default Navbar;