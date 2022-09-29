function uid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,(c)=>{
        const r = Math.random() * 16 | 0;
        const v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * 1. Easily Traverse
 * 2. Filter
 * 3. Delete -------> [ splice -> o(n),,  filter -> o(n) ]
 * 4. Update Data -------> Medium [ findIndex  o(n) ]
 * 5. Create a new one ------> Easy [ push->0(1),, unshift -> o(n) ]
*/

const students = [
    {//Mohaimin
        id: uid(),
        name: "mohaimin",
        email: 'mohaimin@gmai.com'
    },
    {// Hamim
        id: uid(),
        name: "Hamim",
        email: 'hamim@gmai.com'
    },
    {// Shamim
        id: '72762929-9719-4cb5-b4b8-17e521200b2e',
        name: "Shamim",
        email: 'shamim@gmai.com'
    },
    
]

// -------------------- 5. Create new Data -----> easy task
// * unshift()
// * push() -----> easy tool

// students.push( {
//     id: uid(),
//     name: "Rabbi",
//     email: 'rabbi@gmai.com'
// })


// ----------------- 4. Update Data -------------> Medium
// * findIndex(), Spread operator
const idKey = '72762929-9719-4cb5-b4b8-17e521200b2e'

const updateData = {
    name:'Furkan'
}
const index = students.findIndex((item) => item.id === idKey)

students[index] = {
    ...students[index],
    ...updateData,
}

console.log(students);

// ---------------- 3. Delete Data -------------->




console.log(students);

