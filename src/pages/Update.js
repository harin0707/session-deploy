import React,{useRef} from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';

const navigate = useNavigate;
const Update = () => {
    const {state} = useLocation();
    const onSubmit = (e) =>{
        e.preventDefault();
        axios.put(
            `https://doingdjango.herokuapp.com/${state.id}/update`, {
                title: titleRef.current.value,
                writer: writerRef.current.value,
                body: bodyRef.current.value,

            },
            {
                "Cotent-Type" : "application/json",
            }
        ).then((res)=>{
            if(res.data.ok){
                alert("수정완료!");
                navigate('/');
        }
        })
    }

    const titleRef = useRef(null);
    const writerRef= useRef(null);
    const bodyRef= useRef(null);

    return (
        <form>
        제목: <input type="text" ref={titleRef} defaultValue={state.detail.title}></input>
        작성자: <input type="text" ref={writerRef} defaultValue={state.detail.write}></input>
        본문: <textarea col="30" rows="10" type="text" ref={bodyRef} defaultValue={state.detail.wirte}></textarea>

        <button type="submit" onClick={onSubmit}>submit</button>
    
        </form>
    )
}

export default Update