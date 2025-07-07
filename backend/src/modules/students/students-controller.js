const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const students = await getAllStudents(req.query);
    res.json(students);
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const { id: reporterId } = req.user;
    const result = await addNewStudent({ ...req.body, reporterId });
    res.json(result);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await updateStudent({ ...req.body, id });
    res.json(result);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const student = await getStudentDetail(id);
    res.json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id: reviewerId } = req.user;
    const { id: userId } = req.params;
    const { status } = req.body;
    const result = await setStudentStatus({ userId, reviewerId, status });
    res.json(result);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
