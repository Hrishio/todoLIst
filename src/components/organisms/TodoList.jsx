import { useNavigate } from "react-router-dom";
import useTodoStore from "../../utils/store";
import CustomButton from "../atoms/button/CustomButton";
import Card from "../molecules/cards/Card";

const TodoList = () => {

  const navigate = useNavigate();
  const userData = localStorage.getItem('users');
  const todos = useTodoStore((state) => state.todos);

 localStorage.setItem('todos', JSON.stringify(todos))
  const renderCardComponent = (todo) => {
    return (<Card key={todo.id} todo={todo} />)
  }

  const handleLogout = ()=>{
    navigate('/login');
  }
  return (
    <div>
      {userData && (
        <CustomButton name="Logout" onClick={handleLogout} />
      )}
     {todos.map((todo) => (
      renderCardComponent(todo)
    ))}
      </div>
  );
};

export default TodoList;
