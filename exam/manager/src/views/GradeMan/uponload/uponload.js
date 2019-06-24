import { connect } from 'dva'
import React ,{useEffect,useState} from 'react';

function IndexPage(props){
    let [imgs,setimg] = useState('')
    useEffect(function(){
        console.log(props.upload)
        props.upload && setimg(props.upload[0].path)
        console.log(imgs)
    },[props.upload])
    return <div>
        <input type='file' onChange={(e)=>{
                let files = e.target.files;
                // 创建一个formData
                let form = new FormData();
                for (let i=0,len=files.length; i<len;i++){
                    form.append(files[i].name, files[i]);
                    console.log(form)
                    props.append(form)
                }
        }} />
        <img src={imgs}/>
    </div>
    
}
function mapStateToprops(state){
    return {
        ...state.user
    }
}
function mapDispatchToprosp(dispatch){
    return {
        append(payload){
            dispatch({
                type:'user/appendImg',
                payload
            })
        }
    }
}
export default connect(mapStateToprops,mapDispatchToprosp)(IndexPage)
