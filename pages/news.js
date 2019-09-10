import React from 'react'
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout'

const Content = (props)=>{
    const {content, href, title} = props.data;
    return (
        <Layout>
            <h1>{title} </h1>
            <p>{content}</p>
            <a href={href}>{title}</a>
        </Layout>
    )
};

Content.getInitialProps = async function (content) {
    const {id} = content.query;
    console.log('页面接收到请求:',id);
    const res = await fetch(`http://localhost:5000/findOne?id=${id}`);
    const data = await res.json();
    console.log(data);
    return {data}
};

export default Content;