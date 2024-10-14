import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import './App.css';

function App() {
    const [data, setData] = useState([
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Jane', lastName: 'Doe' }
    ]);

    const addRecord = (newRecord) => {
        const newId = data.length ? data[data.length - 1].id + 1 : 1;
        setData([...data, { id: newId, ...newRecord }]);
    };

    const updateRecord = (updatedRecord) => {
        const updatedData = data.map(item => 
            item.id === updatedRecord.id ? updatedRecord : item
        );
        setData(updatedData);
    };

    const handleDelete = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
    };

    return (
        <Router>
            <div className="main">
                <h2 className="main-header">React CRUD Operations</h2>
                <Routes>
                    <Route path="/" element={<Create addRecord={addRecord} />} />
                    <Route path="/read" element={<Read data={data} handleDelete={handleDelete} />} />
                    <Route path="/update/:id" element={<Update data={data} updateRecord={updateRecord} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
