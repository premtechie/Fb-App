import styled from 'styled-components';


export const Wrapper=styled.div`
    display:flex;
    justify-content:center;
    background-color:white;
`


export const Div=styled.section`
    background-color:white;
    width:97%;
    height:80px;
    border-radius:40px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    -moz-box-shadow: 0 0 2px 0 #888;
    -webkit-box-shadow: 0 0 2px 0 #888;
    box-shadow: 0 0 4px 0 #888;
    position:fixed;
    top:0;
    z-index:100;
`

export const Compo1=styled.div`
    display:flex;
    margin:10px 20px;
    align-items:center;
`

export const ActiveIcon=styled.div`
    background-color:whitesmoke;
    width:50px;
    height:50px;
    padding:8px;
    font-size:24px;
    border-radius:50%;
    color:blue;
`
export const Icon=styled.div`
    width:50px;
    padding:6px;
    font-size:24px;
    color:#ccc;
    margin-left:10px;
    &:hover{
        color:gray;
        cursor:pointer;
    }

`
export const Compo2=styled.div`
    display:flex;
    align-items:center;
    width:18%;
    @media(max-width:1000px){
        display:none;
    }
`
export const Image=styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    margin:0 20px;
`
export const Hamburger=styled.div`
    display:none;
    @media(max-width:1000px){
        display:block;
    }
    margin:0 20px;
    font-size:22px;
    cursor:pointer;
    &:hover{
        color:gray;
    };
`
