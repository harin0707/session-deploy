import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Flex = styled.div`
display: flex;
flex-direction: column;
`

const Create = () => {

    const navigate = useNavigate();
    const onSubmit = () =>{
        axios.post(
            'https://doingdjango.herokuapp.com/',
        {
            title:titleRef.current.value,
            writer:writerRef.current.value,
            body:bodyRef.current.value,
        },
        {

            "Content-Type": "application/json",
        }
        )
        .then((res)=>{
        if (res.data.ok){
            alert("추가완료");
            navigate("/");
        }
        
    });
    }
    
    const titleRef = useRef(null);
    const writerRef= useRef(null);
    const bodyRef= useRef(null);

    return (
        <Flex>
        제목: <input type="text" ref={titleRef}></input>
        작성자: <input type="text" ref={writerRef}></input>
        본문: <textarea col="30" rows="10" type="text" ref={bodyRef}></textarea>

        <button onClick={onSubmit}>submit</button>
        
        
        </Flex>
    )
}

export default Create