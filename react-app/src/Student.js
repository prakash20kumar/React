function Student(props) {
    return (
        <div>
            <h1>Hello from Student</h1>
            <p>
                Roll: { props.roll } <br />
                Name: { props.name }
            </p>
        </div>
    )
}

export default Student;