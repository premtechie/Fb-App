import React from 'react'
import styled from 'styled-components';

const Input=styled.input`
    padding:10px 15px;
    border:none;
    border:1px solid #ccc;
    border-radius:30px;
    width:150%;
    margin:0 20px;
    outline:none;
    background-color:whitesmoke;
    &:hover{
        background-color:white;
        -moz-box-shadow: 0 0 2px 0 #888;
        -webkit-box-shadow: 0 0 2px 0 #888;
        box-shadow: 0 0 4px 0 #888;
    }
    @media(max-width:1000px){
        width:100%;
        margin:0;
        margin-left:10px;
    }
    @media(max-width:700px){
        width:100%;
        margin:0;
        margin-left:10px;
    }
`

function InputComponet() {
    return (
        <div>
            <Input />
        </div>
    )
}

export default InputComponet;