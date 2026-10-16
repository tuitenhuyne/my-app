import{useReducer, useState} from 'react'
export default function BaseReducer(){
   // const [age, setAge] = useState(18)
   const[profile, setProfile] = useState ({age: 18})
   //useReducer
   //const[state, dispatch] = useReducer( reducer, initalArg, init?)
   //1. state la gia tri cua doi tuong can quan ly trang thai
   //2. initialArg la gia tri mac dinh dau tien cua state
   //3. reducer la ham/function xu ly cap nhat gia tri cua state
   // - Ham reducer nhan vao 2 doi so: current-state, object action duoc nhan tu dispatch
   // - Ham reducer luon tra ve mot state moi


   //4. dispatch la ham kich hoat yeu cau ham reducer xu ly cap nhat gia tri cho state
   // - dispatch khi goi reducer, se truyen object action cho reducer
   // - object action gom co: type( hanh dong muon xu ly) va payload( gia tri tuong ung di kem)

   const [profile2, dispatch] = useReducer(reducer, {age2: 5})

   function reducer(state, action){
    //thuc hien logic xu ly de cap nhat gia tri state la object profile2
    if (action.type === "Increase"){
        return {
            age2: state.age2 + 1
        }
    }
    throw Error("unknown type: " + action.type)
   }


    return(
        <>
        <h1> Base Reducer </h1>
        <h3> My age is: {profile.age} </h3>
        <button onClick={() => setProfile({age: profile.age + 1})}>Increase age</button>
        <h3> My age 2 is: {profile2.age2} </h3>
        <button onClick={()=> dispatch({type: "Increase"})}>Increase age 2</button>
        </>
    )

}