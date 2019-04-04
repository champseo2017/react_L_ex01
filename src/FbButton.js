import React from 'react'

// Component แบบ Stateles Function Components ข้อดีคือมันได้ Performance ที่ดีขึ้น 
// ถ้าไม่มีการใช้ state ใน Component ก็สามารถเขียนแบบนี้ได้ 
// การเรียกใช้ props จะไม่ได้ใช้ this แล้วนะครับเพราะเรามีการรับ props เข้ามาเป็น parameter แล้ว
const FbButton = (props) =>{
    return(
        <button onClick={props.handleClick}>{props.caption}</button>
    )
}

export default FbButton