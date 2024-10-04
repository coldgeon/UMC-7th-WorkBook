import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState('');
  const [modifyText, setModifyText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addToDo = () => {
    if (text === '') {
      alert('입력해라~~~');
    } else {
      setToDos((prev) => [...prev, { id: Math.floor(Math.random() * 100) + 2, task: text }]);
    }
    setText('');
  };

  const deleteToDo = (id) => {
    console.log(id);
    // 강의 보고 내가 생각한 고
    // setToDos(toDos.filter((rmTodo) => rmTodo.id !== id));

    // 강의에서 사용한 방봅
    setToDos((prev) => prev.filter((item) => item.id !== id));
  };

  const modifyToDo = (id, text) => {
    setToDos((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              task: text,
            }
          : item
      )
    );
    setIsEditing('');
  };

  //issue1: 분리 성공 했는데 다른 건 다 되는데, 왜 addToDo 했을 때 input 박스가 안 비워질까요(addToDo 함수에 setText('') 이렇게 주기도 했고, 또 UI 가보면 비워져있는 취급?을 받는 거 같던데)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={addToDo} label={'할일 등록'}></Button>
      </form>
      <div>
        {toDos.map((todo, _) => (
          <div key={todo.id} style={{ display: 'flex', gap: '20px' }}>
            {isEditing !== todo.id ? (
              <div style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
                <Button onClick={() => setIsEditing(todo.id)} label={'수정하기'}></Button>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}.</p>
                <input defaultValue={todo.task} onChange={(e) => setModifyText(e.target.value)}></input>
                <Button onClick={() => modifyToDo(todo.id, modifyText)} label={'수정완료'}></Button>
              </div>
            )}

            <Button onClick={() => deleteToDo(todo.id)} label={'삭제하기'}></Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
