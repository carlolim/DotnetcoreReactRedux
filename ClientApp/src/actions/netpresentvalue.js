import { addService, getAllService, byIdService } from "../services/netpresentvalue";

export const save = (data) => {
	return async (dispatch, getState) => {
		dispatch({ type: "REQUEST_ADD" });
		var result = await addService(data);
		if (result.isSuccess) {
			window.location.href = `/details/${result.id}`;
		}
		return dispatch({ type: "DONE_REQUEST_ADD", payload: result });
	}
}

export const getAll = () => {
	return async (dispatch, getState) => {
		dispatch({ type: "REQUEST_ALL" });
		var items = await getAllService();
		dispatch({ type: "DONE_REQUEST_ALL", payload: items });
	}
}

export const byId = (id) => {
	return async (dispatch, getState) => {
		dispatch({ type: "REQUEST_SINGLE" });
		var items = await byIdService(id);
		dispatch({ type: "DONE_REQUEST_SINGLE", payload: items });
	}
}