function uid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,(c)=>{
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const students = {
    '5c6d787f-3c87-4f3c-a66f-853e73c9a8a1':{//Mohaimin
        id:'5c6d787f-3c87-4f3c-a66f-853e73c9a8a1',
        name: "mohaimin",
        email: 'mohaimin@gmai.com'
    },

    '0dd4a975-3300-42ec-ba8d-7bc66786f4e8' : {// Hamim
        id: '0dd4a975-3300-42ec-ba8d-7bc66786f4e8',
        name: "Hamim",
        email: 'hamim@gmai.com'
    },

    '72762929-9719-4cb5-b4b8-17e521200b2e': {// Shamim
        id: '72762929-9719-4cb5-b4b8-17e521200b2e',
        name: "Shamim",
        email: 'shamim@gmai.com'
    },
    
}
/**
 * In a Object Data never Sorted
 
 * 1. Easily Traverse
 * 2. Filter o(1)-->if get id or key
 * 3. Delete o(1)
 * 4. Update Data o(1)
 * 5. Create Data o(1)
*/


// 5. Create Data or Pushing Data on Object

// const studentData = {
//     id: uid(),
//     name: 'Shumit',
//     email:'shumit@gamil.com'
// }

// students[studentData.id] = studentData;


// 4. Update in Object
// const idIsUpdate = '72762929-9719-4cb5-b4b8-17e521200b2e'
// const updateData = {
//     id: uid(),
//     name: 'Ram',
//     email:'ram@gamil.com',
// }

// students[idIsUpdate] = {
//     ...students[idIsUpdate],
//     ...updateData,
// }


// Delete Data from Object
// delete students[idIsUpdate]


// Traverse In a Object
// for (let key in students) {
//     console.log(students[key].email);
// }




// =============== In React for Object =============== //

// Object.values() == convert a "object value" to an Array
// Object.keys() == convert a "object key" to an Array


Object.values(students).forEach((student) => {
    console.log(student.id);
})





















