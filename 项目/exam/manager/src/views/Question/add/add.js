import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import Editor from 'for-editor'
import styles from './add.scss'
import { Select,message} from 'antd';

const { Option } = Select;

function AddType(props) {
  //考试类型id
  const [examid, examId] = React.useState({ 
    exaid:'8sc5d7-7p5f9e-cb2zii-ahe5i'
  });
  //课程id
  const [sub, subjectId] = React.useState({
    subId:'fqtktr-1lq5u'
  });
  // //题干
  const [questionsstem, questionsStem] = React.useState({ 
    questID:''
  });
  //试题类型id
  const [questionstypeid, questionsTypeid] = React.useState({ 
    questypeId:'774318-730z8m'
  });
  //试题的标题
  const [titl, Titlee] = React.useState({ 
    title:''
  });
  //题目答案
  const [questionsanswer, questionsAnswer] = React.useState({ 
    quesAnswer:''
  });
  const [userid, userId] = React.useState({ 
    useId:''
  });
  const [data, setdata] = React.useState({ 
    useId:''
  });
  const [dataTit, dataTitXiu] = React.useState({ 
    dataName:'添加试题'
  });

  useState(()=>{
   
  },[])
  useEffect(()=>{
    let {examType} = props;
    // 调登录接口
    console.log(props)
    if(props.code1 === 1 && props.code4 === 1){
      userId({ 
        useId:props.data4.user_id
      })
    }else{
      examType()
    }
    let pathName = decodeURIComponent(props.history.location.search.split('=')[1])
    console.log(pathName)
    if(pathName != 'undefined'){
      let arr = props.data6.filter(item=>item.questions_id === pathName)
      console.log(arr)
      dataTitXiu({
        dataName:'修改试题'
      })
      setdata({useId:arr[0]})
    }
   
    // props.history.replace(pathName)

  }, [props]);

  function subTi(){
    let {addTit} = props;
    if(titl.title&&questionsstem.questID&&questionsanswer.quesAnswer&&questionstypeid.questypeId){
      addTit({
        questions_type_id:questionstypeid.questypeId,
        questions_stem:questionsstem.questID,
        subject_id:sub.subId,
        exam_id:examid.exaid,
        user_id:userid.useId,
        questions_answer:questionsanswer.quesAnswer,
        title:titl.title,
      })
      if(props.data5){
        message.success(props.data5);
      }
      console.log(props)
    }
    
    console.log(titl.title,
      examid.exaid,
      questionstypeid.questypeId,
      questionsanswer.quesAnswer,
      sub.subId,
      userid.useId,
      questionsstem.questID)
  }
  function zhuti(value) {
    Titlee({ 
      title:value
    })
    console.log(titl.title)
  }
  
  function type(value) {
    examId({
      exaid:value
    })
    console.log(examid.exaid)
  }
  function tite(value) {
    questionsTypeid({ 
      questypeId:value
    })
    console.log(questionstypeid.questypeId)
  }
  function formation(value) {
    questionsAnswer({ 
      quesAnswer:value
    })
    console.log(questionsanswer.quesAnswer)
  }
  function kecheng(value) {
    subjectId({subId:value})
    console.log(sub.subId)
  }
    return (<div className={styles.add}>
      <div className={styles.title}>
          <p>{dataTit.dataName}</p>
      </div>
      <div className={styles.content}>
        <p>题目信息</p>
        <p>题干</p>
        <input type="text" placeholder="请输入题目标题，不超过20个字" className={styles.inp} value={data.useId?data.useId.title:questionsstem.questID} onChange={(event)=>{
          questionsStem({ 
            questID:event.target.value
          })

        }} />
        <p>题目主题</p>
        <div className="edit">
          <Editor onChange={zhuti} value={data.useId?data.useId.questions_stem:titl.title}/> 
        </div>
        <p>请选择考试类型</p>
        <Select defaultValue='8sc5d7-7p5f9e-cb2zii-ahe5i' style={{ width: 120 }} onChange={type}>
          {
            props.data1 && props.data1.map((item,index)=><Option value={item.exam_id} key={index}>{item.exam_name}</Option>)
          }
        </Select>
        <p>请选择课程类型：</p>
        <Select defaultValue='fqtktr-1lq5u' style={{ width: 120 }} onChange={kecheng}>
          {
            props.data2 && props.data2.map((item,index)=><Option value={item.subject_id} key={index}>{item.subject_text}</Option>)
          }
        </Select>
        <p>请选择题目类型：</p>
        <Select defaultValue='774318-730z8m' style={{ width: 120 }} onChange={tite}>
          {
            props.data3 && props.data3.map((item,index)=><Option value={item.questions_type_id} key={index}>{item.questions_type_text}</Option>)
          }
        </Select>
        <p>答案信息</p>
        <Editor onChange={formation} value={data.useId?data.useId.questions_answer:questionsanswer.quesAnswer}/>
        <button onClick={subTi} className={styles.submitt}>提交</button>
      </div>
      
    </div>)
    
  }


  // props的类型检查
  AddType.propTypes = {

  }
  // props的默认值
  AddType.defaultProps = {

  }
const mapStateToProps = state=>{
  console.log('state...', state);
  return {
    ...state.user
  }
}

const mapDisaptchToProps = dispatch=>{
  return {
    examType(){
      dispatch({
        type: 'user/allQuest',
      })
    },
    addTit(payload){
      dispatch({
        type: 'user/addtitle',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(AddType);

