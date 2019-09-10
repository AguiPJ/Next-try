import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import fetch from 'isomorphic-unfetch';

const NewsList = (props)=>(
    <Layout>
        {
            props.newList.map((item,key)=>(
                <nav key={key}>
                    <Link as={`/n/${item['room number']}`} href={`/n?id=${item.title.slice(0,5)}`}>
                        <a>{item.title}</a>
                    </Link>
                    <hr/>
                </nav>
            ))
        }
    </Layout>
);
NewsList.getInitialProps = async function(){
    const res = await  fetch(`http://localhost:5000/NewsList?skip=0&limit=10`);
    const data = await res.json();
    console.log(data);
    return {
        newList:data
    }
};

export default NewsList;