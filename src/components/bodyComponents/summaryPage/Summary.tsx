import { useFormik } from "formik";

const Summary = () => {
    const formik = useFormik({
        initialValues:{

        },
        onSubmit: values=>{
            alert(JSON.stringify(values, null, 2));
        }
    });
    return(
        <>
        TADAM
        </>
    )
}
export default Summary;