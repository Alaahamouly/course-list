import React, { Component } from 'react';
import CourseForm from './components/CourseForm'
import CourseList from './components/CourseList'

class App extends Component {
  state = {
    courses : [
      {name: "HTML"},
      {name: "CSS"},
      {name: "jQuery"}
    ],
    current: ''
  }

  // UpdateCourse
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  // AddCourse
  addCourse = (e) => {
    e.preventDefault();
    let {current} = this.state;
    let {courses} = this.state;
    courses.push({name: current})
    this.setState({
      courses,
      current: ''
    })
  }


  // DeleteCourse
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index , 1);
    this.setState({
      courses   //courses:courses
    })
  }

  // editCourse
  editCourse = (index,value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses
    })
  }

  render() {
    const {courses} = this.state;
    let length = courses.length;
    const courseList = length ? (
      courses.map( (course , index ) => {
        return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
      })
    ) : (
      <p>There is no courses to show</p>
    )
    return (
      <section className="App">

        <h2>Add Courses</h2>
        <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
        <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
