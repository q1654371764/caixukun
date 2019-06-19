import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './AddExam.css'
import { Input,Select,Button,InputNumber,DatePicker } from 'antd';

const { Option } = Select;
  
function AddExam(props) {
    let [start,startValueRight] = useState(null)
    let [end,endRight] = useState(null)
    let [open,openRight] = React.useState({
        Value:false
    })
    let [exam,examRight] = React.useState({
        Value:''
    })
    let [classD,classRight] = React.useState({
        Value:''
    })
    let [num,numRight] = React.useState({
        Value:3
    })
    let [inp,inpRight] = useState('')
    function onStartChange(value){
        console.log(value._d * 1)
        startValueRight(value)
    };
    function onEndChange(value){
        console.log(value._d * 1)
        endRight(value)
    };
    function handleStartOpenChange(open){
        if (!open) {
            openRight({
                Value:true
            })
        }
    };
    function handleEndOpenChange(open) {
        openRight({
            Value:open
        })
    };
    function onChange(value) {
        numRight({
            Value:value
        })
        console.log('changed', value);
      }
    function handleChange1(value) {
        examRight({
            Value:value
        })
        console.log(`selected1 ${value}`);
      }
    function handleChange2(value) {
        classRight({
            Value:value
        })
    console.log(`selected2 ${value}`);
    }
    function inpp(e){
        inpRight(e.target.value)
        console.log(e.target.value)
    }
    function addExam(){
        if(inp && exam.Value && classD.Value && num.Value && start._d * 1 && end._d * 1){
            let {Addexam} = props;
            Addexam({
                subject_id:classD.Value,
                exam_id:exam.Value,
                title:inp,
                number:num.Value,
                start_time:start._d * 1,
                end_time:end._d * 1
            })
        }
    }
  useState(()=>{
   
  },[])
  useEffect(()=>{
    let {examType,allTit} = props;
      allTit()
    examType()
    console.log(props)
  }, []);
  useEffect(()=>{
      console.log(props.manager)
    if(props.manager) {
        if(props.manager.addExamList){
            props.history.push('/exam/addDetail?title='+inp)
        }
       
        
    }
    
    console.log(props.manager)
  }, [props.manager]);
    return (<div className={styles.content}>
        <span>添加考试</span>
        <div className={styles.con}>
            <div className={styles.eve}>
                <span className={styles.red}>*</span><span>试卷名称:</span><br/>
                <Input className={styles.inp} onChange={inpp}/>
            </div><br/>
            <div className={styles.eve}>
                <span className={styles.red}>*</span><span>选择考试类型:</span><br/>
                <Select style={{ width: 120 }} onChange={handleChange1} className={styles.mar}>
                    {
                        props.user.data1 && props.user.data1.map((item,index)=><Option value={item.exam_id}>{item.exam_name}</Option>)
                    }
                </Select>
            </div><br/>
            <div className={styles.eve}>
                <span className={styles.red}>*</span><span>选择课程:</span><br/>
                <Select style={{ width: 120 }} onChange={handleChange2} className={styles.mar}>
                    {
                        props.user.data2 && props.user.data2.map((item,index)=><Option value={item.subject_id}>{item.subject_text}</Option>)
                    }
                </Select>
            </div><br/>
            <div className={styles.eve}>
                <span className={styles.red}>*</span><span>设置题量:</span><br/>
                <InputNumber min={3} max={10} onChange={onChange} className={styles.mar}/>
            </div><br/>
            <div className={styles.eve}>
                <span className={styles.red}>*</span><span>考试时间:</span><br/>
                <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={start}
                    placeholder="开始时间"
                    onChange={onStartChange}
                    onOpenChange={handleStartOpenChange}
                    className={styles.time}
                />
                 <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    value={end}
                    placeholder="结束时间"
                    onChange={onEndChange}
                    open={open.Value}
                    onOpenChange={handleEndOpenChange}
                    className={styles.time}
                />
            </div><br/>
            <Button type="primary" className={styles.btn} onClick={addExam}>创建试卷</Button>
        </div>
    </div>)
  }
  

  // props的类型检查
  AddExam.propTypes = {

  }
  // props的默认值
  AddExam.defaultProps = {

  }
const mapStateToProps = state=>{
  console.log('state...', state);
  return {
    ...state
  }
}

const mapDisaptchToProps = dispatch=>{
  return {
    examType(){
      dispatch({
        type: 'user/allQuest',
      })
    },
    Addexam(payload){
        dispatch({
          type: 'manager/AddExam',
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

export default connect(mapStateToProps, mapDisaptchToProps)(AddExam);

