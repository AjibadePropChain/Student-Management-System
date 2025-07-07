const express = require('express');
const { handleGetAllStudents, handleAddStudent, handleUpdateStudent, handleGetStudentDetail, handleStudentStatus } = require('./students-controller');

const router = express.Router();

router.get('/', handleGetAllStudents);
router.post('/', handleAddStudent);
router.put('/:id', handleUpdateStudent);
router.get('/:id', handleGetStudentDetail);
router.put('/status/:id', handleStudentStatus);

module.exports = { studentsRoutes: router };
