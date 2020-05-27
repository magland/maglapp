export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM'
export const DELETE_GROCERY_ITEM = 'DELETE_GROCERY_ITEM'
export const SET_GROCERY_ITEM_APPROVED = 'SET_GROCERY_ITEM_APPROVED'
export const SET_GENERAL_SETTING = 'SET_GENERAL_SETTING'
export const SET_PERSONAL_SETTING = 'SET_PERSONAL_SETTING'
export const ADD_CHAT_ITEM = 'ADD_CHAT_ITEM'
export const DELETE_CHAT_ITEM = 'DELETE_CHAT_ITEM'

export const ADD_BATHROOM = 'ADD_BATHROOM'
export const DELETE_BATHROOM = 'DELETE_BATHROOM'
export const SET_BATHROOM_PROPERTY = 'SET_BATHROOM_PROPERTY'

//action creators

export const addGroceryItem = item => ({
    type: ADD_GROCERY_ITEM,
    item,
    persistKey: 'groceryItems'
})

export const deleteGroceryItem = name => ({
    type: DELETE_GROCERY_ITEM,
    name,
    persistKey: 'groceryItems'
})

export const setGroceryItemApproved = (name, approved) => ({
    type: SET_GROCERY_ITEM_APPROVED,
    name,
    approved,
    persistKey: 'groceryItems'
})

export const setGeneralSetting = (key, value) => ({
    type: SET_GENERAL_SETTING,
    key,
    value,
    persistKey: 'generalSettings'
})

export const setPersonalSetting = (key, value) => ({
    type: SET_PERSONAL_SETTING,
    key,
    value
})

export const addChatItem = item => ({
    type: ADD_CHAT_ITEM,
    item,
    persistKey: 'chatItems'
})

export const deleteChatItem = id => ({
    type: DELETE_CHAT_ITEM,
    id,
    persistKey: 'chatItems'
})

export const addBathroom = (bathroomName) => ({
    type: ADD_BATHROOM,
    bathroomName,
    persistKey: 'bathroomStatus'
})

export const deleteBathroom = (bathroomName) => ({
    type: DELETE_BATHROOM,
    bathroomName,
    persistKey: 'bathroomStatus'
})

export const setBathroomStatus = (bathroomName, key, value) => ({
    type: SET_BATHROOM_PROPERTY,
    bathroomName,
    key, // clogged, needsToiletPaper
    value,
    persistKey: 'bathroomStatus'
})
