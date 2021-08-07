export const Course = ({contact ,courseName,studentName, city,institute,RollNo})=>{
    return(
        <table border="4">
              <tr>
                <td>student Name</td>
                <td>:</td>
                <td>{studentName}</td>
            </tr>
            <tr>
                <td>course Nmae</td>
                <td>:</td>
                <td>{courseName}</td>
            </tr>
            <tr>
                <td>Roll NUmber</td>
                <td>:</td>
                <td>{RollNo}</td>
            </tr>
            <tr>
                <td>institute</td>
                <td>:</td>
                <td>{institute}</td>
            </tr>
            <tr>
                <td>city</td>
                <td>:</td>
                <td>{city}</td>
            </tr>
            <tr>
                <td>contact</td>
                <td>:</td>
                <td>{contact}</td>
            </tr>
        </table>
    )
}