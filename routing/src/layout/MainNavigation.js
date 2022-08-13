import { Link } from "react-router-dom";
import '../layout/MainNavigation.css';


function MainNavigation() {
    return <header className="header">
        <div>
        <nav>
            <ul>
                <li>
                    <Link className="test" to='/'>FirstPage</Link>
                    <Link className="test" to='/second'>SecondPage</Link>
                    <Link className="test" to='/third'>ThirdPage</Link>
                </li>
            </ul>
        </nav>
        </div>
    </header>
}

export default MainNavigation;