import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

    const ReadDetail = () => {
    const { state } = useLocation();
    const id = state.id;

    //blog에는 전체 데이터를 받아옴
    const detail = state.blogs.filter((blog) => blog.id === id)[0];
    const navigate = useNavigate();

    //어디로 갈껀지에 대한 url, id
    const buttonClick = (url, id) =>{
        navigate(url, {state:{id:id, detail:detail}});
    }

    const deleted = () =>{
        axios.delete(`https://doingdjango.herokuapp.com/${state.id}/delete`)
        .then((res)=>{
            if(res.data.ok){
                alert("삭제 완료!");
                navigate("/");
            }
        })

    }

    return (
        <>
        <h1>{detail.title}</h1>
        <p>작성자 | {detail.writer}</p>
        <p>{detail.body}</p>

        <button onClick={()=>buttonClick(`/${detail.id}/update`, detail.id)}> Update </button>
        <button onClick={deleted}>update</button>
        </>
    );
    };

export default ReadDetail;