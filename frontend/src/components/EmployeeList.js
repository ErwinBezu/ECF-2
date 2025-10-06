import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllEmployees, deleteEmployee } from '../services/employeeService';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TablePagination,
    TextField,
    Box,
    CircularProgress,
} from '@mui/material';

const EmployeeList = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [loading, setLoading] = useState(false);
    const [deletingEmployeeId, setDeletingEmployeeId] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getAllEmployees();
                setEmployees(data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async id => {
        setDeletingEmployeeId(id);
        try {
            await deleteEmployee(id);
            setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== id));
        } catch (error) {
            console.error('Error deleting employee:', error);
        } finally {
            setDeletingEmployeeId(null);
        }
    };

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
        setPage(0);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const filteredEmployees = employees.filter(
        employee =>
            employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <CircularProgress />
        );
    }

    return (
        <Box>
            <h2>Employees</h2>
            <Button variant="contained" component={Link} to="/add-employee" sx={{ marginBottom: '1rem' }}>
                Add Employee
            </Button>
            <TextField
                label="Search for an employee..."
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{ marginBottom: '1rem', width: '100%' }}
            />
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredEmployees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(employee => (
                            <TableRow key={employee.id}>
                                <TableCell>{employee.firstName}</TableCell>
                                <TableCell>{employee.lastName}</TableCell>
                                <TableCell>{employee.email}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        component={Link}
                                        to={`/edit-employee/${employee.id}`}
                                        sx={{ marginRight: '0.5rem', marginBottom: '0.25rem' }}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleDelete(employee.id)}
                                        disabled={deletingEmployeeId === employee.id}
                                        sx={{ marginBottom: '0.25rem' }}
                                        startIcon={deletingEmployeeId === employee.id ? <CircularProgress size={20} /> : null}
                                    >
                                        {deletingEmployeeId === employee.id ? 'Deleting...' : 'Delete'}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredEmployees.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
};

export default EmployeeList;