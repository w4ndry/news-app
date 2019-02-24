import Head from 'next/head'
import Header from '../components/header'

export default ({ children, title = 'News ID' }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link
                rel="stylesheet"
                href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
            />
        </Head>

        <div className="container">
            <div className="content">
                <Header />

                { children }
            </div>
        </div>

        <footer>
            <p className="footer">CopyRight@2019 News ID</p>
        </footer>

        <style global jsx>{`
            * {
                padding: 0px;
                margin: 0px;
            }
            li {
                list-style: none;
            }
            a {
                text-decoration: none;
                color: #000;
            }
            .container {
            }
            .content {
                width: 85%;
                margin: 0 auto;
            }
            footer {
                width: 85%;
                margin: 0 auto;
                margin-top: 30px;
                padding: 20px;
            }
            .footer {
                text-align: center;
            }
        `}</style>
    </div>
)
