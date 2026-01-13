import { useState, useEffect } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import SearchedTable from './components/SearchedTable';
import UserForm from './components/Form';
import Button from './components/Button';
// import {createUser,getUsers,deleteUser,updateUser,getUserById} from './api/crudeApi';
import {getUsers,deleteUser,getUserById,updateUser,createUser} from './api/crudeApi';
const App =()=> {
  const [users, setUsers] = useState([]);
  const [filteredUsers,setFilteredUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchedTable,setSearchedTable] = useState(false);
  
  const handleSearch = (query) => {
  const trimmedQuery = query.trim().toLowerCase();

  if (!trimmedQuery) {
    setFilteredUsers([]); // or show all users: setFilteredUsers(users)
    return;
  }

  const filtered = users.filter((user) =>
    Object.values(user).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(trimmedQuery)
    )
  );

  setFilteredUsers(filtered);
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(editIndex !== null) {
      const updatedUser = await updateUser(editIndex, formData);
      console.log(updatedUser)
      if(updatedUser.status === 200){
        fetchUsers();
      }
      setEditIndex(null);
    } else {
      const response = await createUser(formData);
      if(response.status === 200){
        fetchUsers();
      }
    }
    setFormData({ name: '', email: '', role: '' });
    setShowForm(false);
  };

  const handleEdit = async (uid) => {
    const updatedUser = await getUserById(uid);
    if(updatedUser.status === 200){
     const row = await updatedUser.json();
     setFormData(row);
    }
    setEditIndex(uid);
    setShowForm(true);
  };

  const handleDelete = async (delId) => {
    const delRes = await deleteUser(delId);
    if(delRes.status === 200){
      fetchUsers();
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', role: '' });
    setEditIndex(null);
    setShowForm(false);
  };
  
  const fetchUsers = async () => {
    try {
      const result = await getUsers();
      if(result.status === 200){
        let rows = await result.json();
        setUsers(rows);      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  },[]);
  
  
  useEffect(() => {
    console.log(filteredUsers);
  },[filteredUsers]);
  

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onSearch={handleSearch} onFocus={setSearchedTable} />
      
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <Button onClick={() => setShowForm(!showForm)} btnType='button' variant="success">
            {showForm ? 'Hide Form' : 'Add User'}
          </Button>
        </div>

        {showForm && (
          <div className="mb-6">
            <UserForm
              onSubmit={handleSubmit}
              formData={formData}
              setFormData={setFormData}
              editIndex={editIndex}
              onCancel={handleCancel}
            />
          </div>
        )}

        <Table
          data={searchedTable ? filteredUsers : users}
          toggleCaption = {searchedTable}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        {/* <SearchedTable
          toggle={searchedTable}
          data={filteredUsers}
          onEdit={handleEdit}
          onDelete={handleDelete}
        /> */}
      </div>
    </div>
  );
}
export default App;