import {withRouter} from 'next/router'
import { connect } from 'react-redux'

import Layout from '../components/layout'

const Content = withRouter((props) => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>This is the blog post content.</p>
    </div>
))

const PostContent = (props) => (
   <div>
       <h1>{props.detail.title}</h1>
       <p>{props.detail.content}</p>
   </div>
)

const Page = (props) => (
    <Layout>
        <PostContent {...props} />
    </Layout>
)
const mapStateToProps = state => {
    const { detail } = state.news
    return { detail }
}
export default connect(mapStateToProps, null)(Page)
