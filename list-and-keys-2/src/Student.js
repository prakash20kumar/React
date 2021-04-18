import './Student.css';
const Student=(props)=>{
    return(
        <div className="stu">
            <h1>{props.roll}</h1>
            <p onClick={props.clk}>{props.name}</p>                            
        </div>  
    );
}

export default Student;