import Link from 'next/link'
import WebHead from "./Head";
import React from "react";

const linkStyle = {
    marginRight: 15
};
const routerList = [
    {path:'/', name:'首页'},
    {path:'/newList', name:'新闻列表'},
];

const Header = () => (
    <div>
        <WebHead />
        {
            routerList.map(item=>(
                <Link key={item.path} href={item.path}>
                    <a style={linkStyle}>{item.name}</a>
                </Link>
            ))
        }
    </div>
);

export default Header