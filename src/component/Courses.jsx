import { Course } from "./Course";
import { coursesReducer } from "../reducers/CoursesReducer";


export const Courses = () => {
    console.log(coursesReducer );
    return(
        <div className="app">
            <table border="3">
              <tr>
                    {coursesReducer.data.map((item) => (
                        <td>
                            <Course
                      studentName=  {item.studentName}
                      courseName= {item.courseName}
                      RollNo=  {item.RollNo}
                      institute={item.institute}
                      city= {item.city}
                      contact= {item.contact}
                      />
                        </td>
                        ))}
                        </tr>
            </table>
        </div>
    );
};