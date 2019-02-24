import React from 'react'
import Layout from '../components/layout'
import NewsCard from '../components/newsCard'
import { fetchHeadlines, fetchNews, fetchDetail } from '../actions/'
import { connect } from 'react-redux'
import Link from 'next/link'

class Index extends React.Component {
    componentDidMount () {
        const { fetchHeadlines, fetchNews } = this.props
        fetchNews()
        fetchHeadlines()
    }

    _fetchDetail = (data) => {
        const { fetchDetail } = this.props

        fetchDetail({data})
    }

    render() {
        const { headlines, allNews, isLoading } = this.props

        if (isLoading) {
            return(
            <Layout>
                <div class="ui active inverted dimmer">
                    <div class="ui large text loader">Loading</div>
                </div>
            </Layout>)
        }

        return (
            <Layout>
                <div>
                    <h1>Top Headlines</h1>
                    <div class="ui grid">
                        {headlines && headlines.map((data, index) => (
                            <div class="four wide column">
                            <Link as={`/p/${data.url.split('/')[data.url.split('/').length-1]}`} href={`/show?title=${data.url.split('/')[data.url.split('/').length-1]}`}>
                                <a onClick={() => {this._fetchDetail(data)}}><NewsCard key={index} data={data} /></a>
                            </Link>
                        </div>

                        ))}
                    </div>
                </div>
                <div class="ui divider"></div>
                <div>
                    <h1 className="news">News</h1>
                    <div class="ui grid">
                        {allNews && allNews.map((data, index) => (
                            <div class="four wide column">
                            <Link as={`/p/${data.url.split('/')[data.url.split('/').length-1]}`} href={`/show?title=${data.url.split('/')[data.url.split('/').length-1]}`}>
                                <a onClick={() => {this._fetchDetail(data)}}><NewsCard key={index} data={data} /></a>
                            </Link>
                        </div>

                        ))}
                    </div>

                </div>
            </Layout>
        )
    }
}
const mapStateToProps = state => {
    const { headlines, allNews, isLoading } = state.news
    return { headlines, allNews, isLoading }
}
export default connect(mapStateToProps, {fetchHeadlines, fetchNews, fetchDetail})(Index)
