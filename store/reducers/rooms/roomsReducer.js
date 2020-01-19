const ROOM_LIST_MODE = false;
const ROOM_MAP_MODE = true;

const initialState = {
    displayMode: ROOM_LIST_MODE
};

function RoomsReducer(state = initialState, action) {
    let nextState;

    switch (action.type) {
        case 'SWITCH_MODE':
            let iResult;
            if(state.displayMode === ROOM_LIST_MODE) {
                iResult = ROOM_MAP_MODE;
            } else {
                iResult = ROOM_LIST_MODE;
            }

            nextState = {
              ...state,
              displayMode: iResult
            };
            break;
        default:
            nextState = {...state};
    }

    return nextState;
}

export default RoomsReducer;