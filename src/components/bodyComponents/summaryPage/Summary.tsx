import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { CartReducerType, StateType } from "../../../reducers/stateReducerTypes";
import { DataGrid, GridRowsProp } from '@material-ui/data-grid';
import { columnsCart } from "../cartPage/columns";
import { Button, TextField } from "@material-ui/core";
import styles from "./Summary.module.css"
import { PlayArrow } from "@material-ui/icons";

const Summary = () => {

    const loggedUserSelector = useSelector((state: StateType) => state.loginReducer);
    const cartSelector = useSelector((state: StateType) => state.cartReducer);
    const sumOfCostsSelector = useSelector((state: StateType) => state.cartReducer.map((x: CartReducerType) => {
        return Number.parseFloat(x.price.slice(1)) * x.count
    }).reduce((x: number, y: number) => { return x + y }, 0));
    const formik = useFormik({
        initialValues: {
            mail: loggedUserSelector[0].mail ?? "",
            name: "",
            surname: "",
            phone: "",
            city: "",
            street: "",
            number: "",
            flat: "",
            postalcode: "",
        },
        onSubmit: (values) => {
            alert("Select payment method... TODO");
            console.log("Save to database...", values);
        }
    });
    return (
        <div>
            <div className={styles.divSummaryTabWrapper}>
                <DataGrid rows={cartSelector as GridRowsProp} columns={columnsCart} />
            </div>
            <div className={styles.divSummaryFormWrapper}>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="mail"
                        name="mail"
                        label="Mail"
                        value={formik.values.mail}
                        error={formik.touched.mail && Boolean(formik.errors.mail)}
                        helperText={formik.touched.mail && formik.errors.mail}
                    />
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        fullWidth
                        id="surname"
                        name="surname"
                        label="Surname"
                        value={formik.values.surname}
                        error={formik.touched.surname && Boolean(formik.errors.surname)}
                        helperText={formik.touched.surname && formik.errors.surname}
                    />
                    <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        label="Phone"
                        value={formik.values.phone}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                    <TextField
                        fullWidth
                        id="city"
                        name="city"
                        label="City"
                        value={formik.values.city}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city}
                    />
                    <TextField
                        fullWidth
                        id="street"
                        name="street"
                        label="Street"
                        value={formik.values.street}
                        error={formik.touched.street && Boolean(formik.errors.street)}
                        helperText={formik.touched.street && formik.errors.street}
                    />
                    <TextField
                        fullWidth
                        id="number"
                        name="number"
                        label="Number"
                        value={formik.values.number}
                        error={formik.touched.number && Boolean(formik.errors.number)}
                        helperText={formik.touched.number && formik.errors.number}
                    />
                    <TextField
                        fullWidth
                        id="flat"
                        name="flat"
                        label="Flat"
                        value={formik.values.flat}
                        error={formik.touched.flat && Boolean(formik.errors.flat)}
                        helperText={formik.touched.flat && formik.errors.flat}
                    />
                    <TextField
                        fullWidth
                        id="postalcode"
                        name="postalcode"
                        label="Postalcode"
                        value={formik.values.postalcode}
                        error={formik.touched.postalcode && Boolean(formik.errors.postalcode)}
                        helperText={formik.touched.postalcode && formik.errors.postalcode}
                    />
                    <Button className={styles.buttonForm} variant="contained" fullWidth type="submit">
                        Submit {"Total cost: $"+sumOfCostsSelector} <PlayArrow />
                    </Button>
                </form>
            </div>
        </div>
    )
}
export default Summary;