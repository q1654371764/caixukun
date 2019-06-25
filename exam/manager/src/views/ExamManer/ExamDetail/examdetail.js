import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './examdetail.css';
function ExamDetail(props) {
  let [ar,newArr] = React.useState({
    arr:[]
  })
  useEffect(()=>{
    let {ExamDe,allTit} = props;
    let id = props.history.location.search.split('=')[1]
    console.log(id)
    allTit()
    ExamDe({
      exam_exam_id:id
    })
    if(props.manager.data && props.user.data6){
      newArr({
        arr:props.manager.data[0].question_ids
      })
      let arr1 = []
      let arr = JSON.parse(props.manager.data[0].question_ids)
      for(var i=0;i<arr.length;i++){
        arr1.push(props.user.data6.find(item=>item.questions_id === arr[i]))
      }
      newArr({
        arr:arr1
      })
      console.log(arr1)
    }
    console.log(props)
  }, []);

    return <div className={styles.content}>
        {
          ar.arr && ar.arr.map((item,index)=><div key={index} className={styles.every}>
            <p>{item.title}</p>
            <p>{item.questions_stem}</p>
          </div>)
        }
    </div>
    
  }

  // props的类型检查
  ExamDetail.propTypes = {

  }
  // props的默认值
  ExamDetail.defaultProps = {

  }
const mapStateToProps = state=>{
  console.log('state...', state);
  return {
    ...state
  }
}

const mapDisaptchToProps = dispatch=>{
  return {
    ExamDe(payload){
      dispatch({
        type: 'manager/ExamDetail',
        payload
      })
    },
    allTit(){
      dispatch({
        type: 'user/alltitle',
      })
    },
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(ExamDetail);
