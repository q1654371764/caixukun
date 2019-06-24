import dynamic from 'dva/dynamic';
// import Add from '../Question/add/add.js'
// import Type from '../Question/type/type'
// import View from '../Question/view/view'
import Detail from '../views/Question/detail/index'
// import List from '../ExamManer/QuestionList/index'
import ExamDetail from '../views/ExamManer/ExamDetail/examdetail'
// import UserShow from '../User/userShow/usershow'
// import ClassManager from '../RoomManager/RoomMan/roomMan'
// import AddUser from '../User/AddUser/Adduser'
// import StudentMan from '../RoomManager/StudentMan/SutdentMan'
// import ClassWait from '../GradeMan/classWait/classWait'
import ClassDetail from '../views/GradeMan/classDetail/classDetail'
// import AddExam from '../ExamManer/AddExam/AddExam'
import AddDetail from '../views/ExamManer/AddDetail/AddDetail'
// import ClassMan from '../RoomManager/classMan/classMan'
import uponload from '../views/GradeMan/uponload/uponload'

// 引入路由
const Add =  dynamic({
    component: () => import('../views/Question/add/add.js'),
});
const Type =  dynamic({
    component: () => import('../views//Question/type/type.js'),
});
const View =  dynamic({
    component: () => import('../views/Question/view/view.js'),
});
const List =  dynamic({
    component: () => import('../views/ExamManer/QuestionList/index.js'),
});
const UserShow =  dynamic({
    component: () => import('../views/User/userShow/usershow'),
});
const ClassManager =  dynamic({
    component: () => import('../views/RoomManager/RoomMan/roomMan.js'),
});
const AddUser =  dynamic({
    component: () => import('../views/User/AddUser/Adduser.js'),
});
const StudentMan =  dynamic({
    component: () => import('../views/RoomManager/StudentMan/SutdentMan.js'),
});
const ClassWait =  dynamic({
    component: () => import('../views/GradeMan/classWait/classWait.js'),
});
const AddExam =  dynamic({
    component: () => import('../views/ExamManer/AddExam/AddExam.js'),
});
const ClassMan =  dynamic({
    component: () => import('../views/RoomManager/classMan/classMan.js'),
});


export default {
  routes: [{
    name: 'router.questions',
    children: [{
      name: 'router.questions.add',
      id: 'main-addQuestions',
      path: '/questions/add',
      component: Add
    },{
      name: 'router.questions.type',
      id: 'main-questionsType',
      path: '/questions/type',
      component: Type
    },{
      name: 'router.questions.view',
      id: 'main-watchQuestions',
      path: '/questions/view',
      component: View
    },{
      name: null,
      id: 'main-watchQuestions',
      path: '/questions/detail',
      component: Detail
    }]
  },
  {
    name: 'router.questions.user',
    children: [{
      name: 'router.questions.adduser',
      id: 'main-addUser',
      path: '/user/add',
      component: AddUser
    },{
      name: 'router.questions.usershow',
      id: 'main-showUser',
      path: '/user/show',
      component: UserShow
    }]
  },
  {
    name: 'router.questions.examMan',
    children: [{
      name: 'router.questions.addExam',
      id: 'main-addExam',
      path: '/exam/add',
      component: AddExam
    },{
      name: 'router.questions.examlist',
      id: 'main-examList',
      path: '/exam/list',
      component: List
    },{
      name: null,
      id: 'main-menu',
      path: '/exam/addDetail',
      component: AddDetail
    }
    ,{
      name: null,
      id: 'main-questionsDetail',
      path: '/exam/ExamDetail',
      component: ExamDetail
    }]
  },
  {
    name: 'router.questions.classMan',
    children: [{
      name: 'router.questions.classMan',
      id: 'main-grade',
      path: '/class/classRoom',
      component: ClassMan
    },{
      name: 'router.questions.roomMan',
      id: 'main-room',
      path: '/class/classMetting',
      component: ClassManager
    },{
      name: 'router.questions.studentMan',
      id: 'main-student',
      path: '/class/student',
      component: StudentMan
    }]
  },
  {
    name: 'router.questions.gradeMan',
    children: [{
      name: 'router.questions.classWait',
      id: 'main-examPaperClassList',
      path: '/examination/waitClass',
      component: ClassWait
    },{
      name: null,
      id: 'main-examPaperClassmate',
      path: '/examination/ClassDetail',
      component: ClassDetail   
    },{
      name: 'router.questions.uponload',
      id: 'main-examPaperClassList',
      path: '/examination/uponload',
      component: uponload
    },]
  }
]
}
