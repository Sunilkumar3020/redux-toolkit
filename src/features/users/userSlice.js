import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    error: null,
}

//API call
export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async (_, thunkAPI) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to fetch users")
        }
    }
)

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //loading
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            //success
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            //error
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }

})

export default userSlice.reducer;