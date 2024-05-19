const mongoose = require('mongoose');
//mongodb+srv://admin:7uhiOs4zMCKcBe5i@cluster0.pxs0hlx.mongodb.net/
// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:7uhiOs4zMCKcBe5i@cluster0.pxs0hlx.mongodb.net/course_selling_app');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course'
    }]
});


const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    price:Number,
    imageLink:String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}