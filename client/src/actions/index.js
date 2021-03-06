import {
	CHANGE_RANGE,
	CHANGE_COORDINATE,
	SEARCH_AT_POINT,
	UPDATE_RESULTS,
	SELECT_SPECIES,
	SHOW_SPECIES_RANGE,
	HIDE_SPECIES_RANGE,
	CLEAR_RANGES,
	CHANGE_SHOW_MULTIPLE_RANGES,
} from "./types";

export const changeRange = range => {
	return {
		type: CHANGE_RANGE,
		payload: { range },
	};
};

export const changeCoordinate = (coordinateType, coordinateValue) => {
	return {
		type: CHANGE_COORDINATE,
		payload: { coordinateType, coordinateValue },
	};
};

export const searchAtPoint = (longitude, latitude) => {
	return {
		type: SEARCH_AT_POINT,
		payload: { longitude, latitude },
	};
};

export const updateResults = results => {
	return {
		type: UPDATE_RESULTS,
		payload: { results },
	};
};

export const selectSpecies = speciesID => {
	return {
		type: SELECT_SPECIES,
		payload: { speciesID },
	};
};

export const showSpeciesRange = (speciesID, range) => {
	console.log(
		"Action creator showSpeciesRange called with ",
		speciesID,
		"and",
		range,
	);
	return {
		type: SHOW_SPECIES_RANGE,
		payload: { speciesID, range },
	};
};

export const hideSpeciesRange = (speciesID) => {
	console.log(
		"Action creator hideSpeciesRange called with ",
		speciesID
	);
	return {
		type: HIDE_SPECIES_RANGE,
		payload: { speciesID },
	};
};

export const clearRanges = () => {
	return {
		type: CLEAR_RANGES,
		payload: {}, // TODO: check whether payload mandatory
	};
};

export const changeShowMultipleRanges = allowMultiple => {
	return {
		type: CHANGE_SHOW_MULTIPLE_RANGES,
		payload: { allowMultiple },
	};
};

