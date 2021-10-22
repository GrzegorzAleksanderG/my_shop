import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { connect, useDispatch, useSelector } from "react-redux";
import { StateType } from '../../../reducers/stateReducerTypes';
import { addToCartAction } from '../../../actions/cartActions';
import { setConfiguratorAction, clearConfiguratorAction } from '../../../actions/configuratorActions';
import { useEffect, useState } from "react";
import getArticles from "../../../data/getArticles";
import './Configurator.css'

const Configurator = () => {

    const dispatch = useDispatch();

    const [monitor, setMonitor] = useState("");
    const [keyboard, setKeyboard] = useState("");
    const [cpu, setCPU] = useState("");
    const [graphic, setGraphic] = useState("");
    const [motherboard, setMotherboard] = useState("");

    useEffect(() => {
        getArticles(dispatch);
    }, [dispatch]);

    const monitors = useSelector((state: StateType) => {
        return state.getDataReducer.filter((x)=>{
            return x.category === "Monitor";
        });
    });

    const keyboards = useSelector((state: StateType) => {
        return state.getDataReducer.filter((x)=>{
            return x.category === "Keyboard";
        });
    });

    const graphics = useSelector((state: StateType) => {
        return state.getDataReducer.filter((x)=>{
            return x.category === "Graphic Card";
        });
    });

    const cpus = useSelector((state: StateType) => {
        return state.getDataReducer.filter((x)=>{
            return x.category === "CPU";
        });
    });

    const motherboards = useSelector((state: StateType) => {
        return state.getDataReducer.filter((x)=>{
            return x.category === "Motherboard";
        });
    });

    const handleChangeMonitor = (e: any) => {
        setMonitor(e.target.value);
      };

      const handleChangeKeyboard = (e: any) => {
        setKeyboard(e.target.value);
      };

      const handleChangeGraphics = (e: any) => {
        setGraphic(e.target.value);
      };

      const handleChangeCPU = (e: any) => {
        setCPU(e.target.value);
      };

      const handleChangeMotherboard = (e: any) => {
        setMotherboard(e.target.value);
      };

    return (
        <div className="div-configurator-wrapper">
            <FormControl fullWidth>
                <InputLabel id="monitor-select-label">Monitor</InputLabel>
                <Select
                    labelId="monitor-select-label"
                    id="monitor-select"
                    value={monitor ?? ""}
                    label="Monitor"
                    onChange={handleChangeMonitor}
                >
                    {monitors.map((x) => {return <MenuItem value={x.name as string}>{x.name}</MenuItem>})}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="keyboard-select-label">Keyboard</InputLabel>
                <Select
                    labelId="keyboard-select-label"
                    id="keyboard-select"
                    value={keyboard ?? ""}
                    label="Keyboard"
                    onChange={handleChangeKeyboard}
                >
                    {keyboards.map((x) => {return <MenuItem value={x.name as string}>{x.name}</MenuItem>})}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="graphic-select-label">Graphic Card</InputLabel>
                <Select
                    labelId="graphic-select-label"
                    id="graphic-select"
                    value={graphic ?? ""}
                    label="Graphic Card"
                    onChange={handleChangeGraphics}
                >
                    {graphics.map((x) => {return <MenuItem value={x.name as string}>{x.name}</MenuItem>})}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="cpu-select-label">CPU</InputLabel>
                <Select
                    labelId="cpu-select-label"
                    id="cpu-select"
                    value={cpu ?? ""}
                    label="CPU"
                    onChange={handleChangeCPU}
                >
                    {cpus.map((x) => {return <MenuItem value={x.name as string}>{x.name}</MenuItem>})}
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="motherboard-select-label">Motherboard</InputLabel>
                <Select
                    labelId="motherboard-select-label"
                    id="motherboard-select"
                    value={motherboard ?? ""}
                    label="Motherboard"
                    onChange={handleChangeMotherboard}
                >
                    {motherboards.map((x) => {return <MenuItem value={x.name as string}>{x.name}</MenuItem>})}
                </Select>
            </FormControl>
        </div>
    )
}
const mapStateToProps = (state: StateType) => {
    return {
        getDataReducer: state.getDataReducer,
        cartReducer: state.cartReducer
    }
}

const mapDispatchToProps = { setConfiguratorAction, clearConfiguratorAction, addToCartAction }

export default connect(mapStateToProps, mapDispatchToProps)(Configurator);
