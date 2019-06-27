import React,{useEffect,useState} from 'react'
import { connect} from 'dva';
function Index(props){ 
    let {imgSrc,srcImg}=props;
    let [imgs,setimgs]=useState("");
    let [canvas,setCanvas]=useState("");
    let [newImg,setnewImg]=useState("");
    let [newTopImg,setnewTopImg]=useState("");
    let [change,setChange]=useState("");
    useEffect(()=>{
        if(!srcImg){
            props.base64();
        }
    },[imgSrc,srcImg])
  return <div>
      <input type="file" onChange={(e)=>{
        setChange(e.target.files);
      }}/>
      {imgs && <img style={{width:"100px",height:"100px",display:"none"}} ref={ref=>setnewTopImg(ref)}  src={imgs}></img>}
      <button disabled={imgSrc?false:true} onClick={()=>{
           setimgs(canvas.toDataURL())
      }}>更换头像</button>

     <canvas ref={ref=>{
         setCanvas(ref);
         changeCan();
     }} width="400" height="200">
     您的浏览器不支持canvas，请更换浏览器.
     </canvas>
     <img style={{width:"200px",height:"200px",display:"none"}} ref={ref=>setnewImg(ref)}  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562050630&di=89f94270963dbfa38de1d0eea22bb5f0&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140103%2F20140103212227-1956389668.jpg"/>
  </div>
  function changeCan(){
    let cxt = canvas && canvas.getContext('2d');
    if(srcImg){
        newImg.src = srcImg;
      cxt.drawImage(newImg, 0, 0, 1280, 720, 0, 0, 400, 288);
     if(change){
        let files = change;
        var reader = new FileReader();
        reader.onload = function(){
            setimgs(this.result);
            if(newTopImg){
             cxt.drawImage(newTopImg, 0, 0, 300, 300, 300, 80, 30, 30);
             if(!imgSrc){
                props.changeImg({base64:canvas.toDataURL()})
             }
            }
        }
        reader.readAsDataURL(files[0]);
     }
  }
}
 }
let mapStateToProps=state=>{
  return {...state.user}
}
let mapDispatchProps=dispatch=>{
 return {
     changeImg(payload){
         dispatch({
             type:"user/changeImg",
             payload,
         })
     },
     base64(){
         dispatch({
             type:"user/base64"
         })
     }
 }
}
export default connect(mapStateToProps,mapDispatchProps)(Index);
