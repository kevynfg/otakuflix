import React from 'react';

function ButtonLink(props) {
    // props => { className: "parametro que quiser", href: "ondeIr"}
    console.log(props)
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;