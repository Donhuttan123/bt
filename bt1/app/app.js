import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@gmail.com' },
    { id: 2, name: 'Trần Thị B', email: 'tranthib@gmail.com' },
  ]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAddUser = (event) => {
    event.preventDefault();

    const newUser = {
      id: Date.now(),
      name: name,
      email: email
    };

    setUsers([...users, newUser]);
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <header>
        <h1>Quản lý người dùng trong công việc</h1>
      </header>

      <main>
        <form onSubmit={handleAddUser}>
          <label htmlFor="name">Tên người dùng:</label>
          <input type="text" id="name" name="name" placeholder="Nhập tên của bạn" value={name} onChange={handleNameChange} />

          <label htmlFor="email">Địa chỉ email:</label>
          <input type="email" id="email" name="email" placeholder="Nhập địa chỉ email của bạn" value={email} onChange={handleEmailChange} />

          <label htmlFor="password">Mật khẩu:</label>
          <input type="password" id="password" name="password" placeholder="Nhập mật khẩu" value={password} onChange={handlePasswordChange} />

          <button type="submit">Thêm người dùng</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Ảnh đại diện</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Chỉnh sửa</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td><img src="https://via.placeholder.com/50" alt="Avatar" /></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><button>Sửa</button></td>
                <td><button onClick={() => handleDeleteUser(user.id)}>Xóa</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer>
        <p>Bản quyền © 2021. Tất cả các quyền được bảo lưu.</p>
      </footer>
    </>
  );
}

export default App;