import axios from "axios";
import {
  GET_COLECCIONES,
  GET_COLECCION_BY_NAME,
  GET_COLECCION_BY_ID,
  GET_COLIBRIES,
  GET_COLIBRI_BY_NAME,
  GET_COLIBRI_BY_ID,
  CLEAN_DETAIL,
} from "./action-types";

// axios.defaults.baseURL = "http://localhost:3001";

axios.defaults.baseURL = "https://back-galeria-production.up.railway.app/";

//! Actions COLECCIONES

export const getColecciones = () => {
  return async function (dispatch) {
    try {
      const colecciones = await axios.get(`/colecciones`);
      dispatch({ type: GET_COLECCIONES, payload: colecciones.data });
    } catch (error) {
      console.error("Error al obtener colecciones:", error);
    }
  };
};

export const getColeccionesById = (id) => {
  return async function (dispatch) {
    const coleccion = await axios.get(`/colecciones/${id}`);
    dispatch({ type: GET_COLECCION_BY_ID, payload: coleccion.data });
  };
};

export const getColeccionByName = (name) => {
  return async function (dispatch) {
    const coleccion = await axios.get(`/colecciones?name=${name}`);
    dispatch({ type: GET_COLECCION_BY_NAME, payload: coleccion.data });
  };
};

//! Actions COLIBRIES

export const getColibries = () => {
  return async function (dispatch) {
    const colibries = await axios.get(`/colibries`);
    console.log("Datos de colibríes obtenidos:", colibries.data);
    dispatch({ type: GET_COLIBRIES, payload: colibries.data });
  };
};

export const getColibriesById = (id) => {
  return async function (dispatch) {
    const colibri = await axios.get(`/colibries/${id}`);
    dispatch({ type: GET_COLIBRI_BY_ID, payload: colibri.data });
  };
};

export const getColibriesByName = (name) => {
  return async function (dispatch) {
    const colibri = await axios.get(`/colibries?name=${name}`);
    dispatch({ type: GET_COLIBRI_BY_NAME, payload: colibri.data });
  };
};

//! Adicionales
export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
