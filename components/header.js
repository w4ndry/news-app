import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Header = () => (
    <div>
        <header>
            <nav>
                <p>News ID</p>
                <div>
                    <Link href='/login'><a className="login">Login</a></Link>
                </div>
            </nav>
        </header>

        <style jsx>{`
            header {
                padding-top: 10px;
            }
            nav {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }
            p {
                font-size: 25px;
            }
            .login {
                margin-right: 20px;
            }
        `}</style>
    </div>
)

export default Header
