import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IMainState {
  count: number;
}

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    count: 0
  } as IMainState,
  reducers: {
    changeCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    }
  }
});

export default mainSlice.reducer;
