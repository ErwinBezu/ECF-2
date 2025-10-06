import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee, getEmployeeById, updateEmployee } from '../services/employeeService';
import { getAllDepartments } from '../services/departmentService';
import { TextField, Button, MenuItem, Box } from '@mui/material';

const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        department: { id: '' },
    });
    const [departments, setDepartments] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const departmentsData = await getAllDepartments();
                setDepartments(departmentsData);

                if (id) {
                    const employeeData = await getEmployeeById(id);
                    setEmployee({
                        firstName: employeeData?.firstName || '',
                        lastName: employeeData?.lastName || '',
                        email: employeeData?.email || '',
                        age: employeeData?.age || '',
                        department: {
                            id: employeeData?.department?.id || '',
                        },
                    });
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [id]);

    const handleChange = e => {
        const { name, value } = e.target;

        setEmployee({
            ...employee,
            ...(name === 'department.id'
                    ? { department: { id: value } }
                    : { [name]: name === 'age' ? Number(value) : value }
            )
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await (id ? updateEmployee(id, employee) : addEmployee(employee));
            navigate('/employees');
        } catch (error) {
            console.error('Error saving employee:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { marginBottom: '1rem', width: '100%' } }}>
            <h2>{id ? 'Edit Employee' : 'Add Employee'}</h2>
            <TextField label="First Name" name="firstName" value={employee.firstName} onChange={handleChange} required />
            <TextField label="Last Name" name="lastName" value={employee.lastName} onChange={handleChange} required />
            <TextField label="Email" name="email" type="email" value={employee.email} onChange={handleChange} required />
            <TextField label="Age" name="age" type="number" value={employee.age} onChange={handleChange} required inputProps={{ min: 1, max: 150 }} />
            <TextField select label="Department" name="department.id" value={employee.department.id || ''} onChange={handleChange} required>
                <MenuItem value="">Select Department</MenuItem>
                {departments.map(department => (
                    <MenuItem key={department.id} value={department.id}>
                        {department.name}
                    </MenuItem>
                ))}
            </TextField>
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '1rem' }}>
                Save
            </Button>
        </Box>
    );
};

export default EmployeeForm;


