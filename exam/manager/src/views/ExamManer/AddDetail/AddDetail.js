import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import styles from './AddDetail.scss'
import { Button,Drawer } from 'antd';
import RigthBar from '../../Question/view/view.js'

// const { Option } = Select;
  
function AddDetail(props) {
    let [title,titltRight] = useState('');
    let [tit,titRight] = useState([]);
    let [gen,genRight] = useState('');
    let [examId,examRight] = useState('')
  useState(()=>{
   
  },[])
  useEffect(()=>{
      
      if(!props.location.search.split('=')[1]){
        props.history.push('/exam/add')
      }
    console.log(props)
    titltRight(props.location.search.split('=')[1])
    if(props.manager && props.manager){
        if(props.manager.addExamList){
            console.log(tit)
            console.log(JSON.parse(props.manager.addExamList.exam[2].question_ids))
            console.log(props.manager.addExamList.exam[2].exam_exam_id)
            examRight(props.manager.addExamList.exam[2].exam_exam_id)
            genRight(JSON.parse(props.manager.addExamList.exam[2].question_ids))
            if(props.manager.addExamList.exam[2]){
                JSON.parse(props.manager.addExamList.exam[2].question_ids).filter((item,index)=>{
                    tit.push(props.user.data6.find((citem,cindex)=>item === citem.questions_id))
                })
            }
            
        }
        
    }
  }, []);
  let [vis,visRight] = useState(false);

  function showDrawer(){
      visRight(true)
      console.log(vis)
  };
  function onClose(){
    visRight(false)
    console.log(vis)
  };
    return (<div className={styles.content}>
        <span>创建试卷</span>
        <div className={styles.con}>
            <button className={styles.add} onClick={showDrawer}>添加新题</button>
            <div className={styles.top}>
                <span>{title}</span><br/>
                <span>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</span>
            </div>
            <div className={styles.question}>
                {
                    tit && tit.map((item,index)=><div className={styles.every} key={index}>
                        <span>{item.title}</span><br/>
                        <span>{item.questions_stem}</span>
                        <p className={styles.del} onClick={()=>{
                            let ind = tit.findIndex((citem,index)=>citem.questions_id === item.questions_id)
                            console.log(ind)
                            titRight(tit.slice(ind+1))
                        }}>删除</p>
                    </div>)
                }
            </div>
            <div className={styles.an}>
                <Button type='primary' className={styles.btn} onClick={()=>{
                  let {genXin} = props;
                  genXin({
                    question_ids:JSON.stringify(gen),
                    examid:examId
                  })
                   
                  props.history.push('/exam/list')
                }}>创建试卷</Button>
            </div>
            <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={vis}
                width={1000}
                >
                <RigthBar />
            </Drawer>
        </div>
    </div>
    )
}

  // props的类型检查
  AddDetail.propTypes = {

  }
  // props的默认值
  AddDetail.defaultProps = {

  }
const mapStateToProps = state=>{
  console.log('state...', state);
  return {
    ...state
  }
}

const mapDisaptchToProps = dispatch=>{
  return {
    genXin(payload){
      dispatch({
        type: 'manager/genXin',
        payload
      })
    }
  }
}

export default connect(mapStateToProps, mapDisaptchToProps)(AddDetail);

