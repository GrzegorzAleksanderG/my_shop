import { ACTION_TYPES, ConfiguratorActionType } from "./actionTypes"
import { GetDataReducerType } from '../reducers/stateReducerTypes';

export const setConfiguratorAction = (payload:GetDataReducerType) : ConfiguratorActionType => {
    return {
        type: ACTION_TYPES.SET_CONFIGURATOR_ASYNC,
        payload
    }
}

export const clearConfiguratorAction = (payload:GetDataReducerType) : ConfiguratorActionType => {
    return {
        type: ACTION_TYPES.CLEAR_CONFIGURATOR_ASYNC,
        payload
    }
}