import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface userState {
  username: string,
  password: string,
  token: string,
  error: object,
  repository: object
}

// Initial state 
const initialState: userState = {
  username: '',
  password: '',
  token: '',
  error: {},
  repository: {}
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => { state.username = action.payload },
    setPassword: (state, action: PayloadAction<string>) => { state.password = action.payload },
    setToken: (state, action: PayloadAction<string>) => { state.token = action.payload },
    setRepository: (state, action: PayloadAction<object>) => { state.repository = action.payload },
    logOut: (state) => { state = initialState },
  },
})


// Action creators 
export const { setUsername, setPassword, setToken, setRepository, logOut } = userSlice.actions



export default userSlice.reducer