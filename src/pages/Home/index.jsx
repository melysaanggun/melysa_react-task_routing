import { useState } from "react";
/**Components */
import AddTodo from "../../components/AddTodo";
import List from '../../components/List';
import Navbar from '../../components/Navbar';
/**Styles */
import "./home.css";

const Home = (props) => {
    const [todo,setTodo] = useState([
        {
          id: 1,
          title: "Mengerjakan Exercise",
          completed: true
        },
        {
          id: 2,
          title: "Mengerjakan Assignment",
          completed: false 
        }
      ]
      ) 
    
      const simpan = (value) => {
        const baru = [
          ...todo, 
          {id: (new Date()).getTime(), title: value, completed: false, }]
        setTodo(baru)
      };
    
      const selesai = (id, checked) => {
        const baru = todo.map(x => {
          if (id === x.id) return {...x, completed: checked}
          return x
        })
        setTodo(baru)
      }
    
      const hapus = (id) => {
        const baru = todo.filter(x => x.id !== id )
        setTodo(baru)
      }

    return ( 
        <div className="container">
        <div className="row">
          <Navbar />
          <div className="content">
            <h1>todos</h1>
            <AddTodo simpan={simpan}/>
            <List 
            list={todo} 
            onChecked={selesai}
            hapus={hapus} />
          </div>
        </div>
      </div>
     );
}
 
export default Home;