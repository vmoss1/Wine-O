import { csrfFetch } from "./csrf";

const GET_ALL_WINES = 'wines/getWines'
const GET_SINGLE_WINE = 'wines/getSingleWine'

const getWines = (wines) => ({
    type: GET_ALL_WINES,
    payload: wines
})