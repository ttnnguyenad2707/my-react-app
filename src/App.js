
import data from './student.json'
import ReadRow from './comp/readRow';
import { useState } from 'react';
import EditRow from './comp/editRow';


function App() { 
  const [Comp, setComp] = useState("ReadRow");
  const [student, setStudent] = useState(data);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();

  const handleAddStudent = () => {
  const newID = parseInt(student[student.length - 1].id) + 1;

    let newStudent = {
      id: newID,
      name: name,
      age: age,
      gender: gender
    }
    student.push(newStudent)
    console.log(student);
    // console.log(newStudent);
    setStudent(prev => [...prev, student])
  }
  // const handleDelete = (id) => {
  //   console.log(id);
  // }
  const handleDelete=(id)=>{
    let delStudent = {};
    let indexDel = -1;
    for (let i = 0; i < student.length;i++){
      if (student[i].id === id){
         delStudent = student[i];
         indexDel = i;
        break;
      }
    }
    student.splice(indexDel,1)
    console.log(student);
    setStudent([...student])

  }

  const handleEdit = (id) =>{
  console.log(id);
    // Comp = EditRow;
  }
  
  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
          
          {student.map(u => (
            <Comp
            key = {u.id}
              id={u.id}
              Name={u.name}
              Age={u.age}
              Gender={u.gender}
              onClick = {()=>handleDelete(u.id)}
              onClick2 = {() => handleEdit(u.id)}
            />
          ))}
        </tbody>
      </table>
      <input value={name} type="text" className="form-control mb-2 mr-sm-2" id="Name" placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
      <div className="input-group mb-2 mr-sm-2">
        <input value={age} type="text" className="form-control" id="Age" placeholder="Age" onChange={(e) => setAge(e.target.value)}></input>
      </div>
      <div className="input-group mb-2 mr-sm-2">

        <input value={gender} type="text" className="form-control" id="Gender" placeholder="Gender" onChange={(e) => setGender(e.target.value)}></input>
      </div>
      <button onClick={handleAddStudent} className="btn btn-primary">Add</button>
    </div>



  );
}



export default App;
