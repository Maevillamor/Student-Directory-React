const FormContainer = () => {
    
    return (
       
        <section id="formContainer">
        <form id="studentForm">
            <div class="input-fields">
                <label for="name">Student Name</label>
                <input type="text" name="name" id="name"/>
            </div>
            <div class="input-fields">
                <label for="Sr-Code">Sr-Code</label>
                <input type="text" name="Sr-Code" id="Sr-Code"/> 
            </div>
            <div class="input-fields">
                <label for="program">Program</label>
                <input type="text" name="program" id="program"/> 
            </div>
            <div>
                <button for="submit"> Add Student</button>
            </div>
        </form>
    </section>
    )
}

export default FormContainer;
 