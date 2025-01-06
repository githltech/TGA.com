import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API Endpoints
  const BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;

// Async thunks for API calls

// Get all packages
export const getPackages = createAsyncThunk('packages/getAll', async () => {
  const response = await axios.get(`${BASE_URL}/packages`);
  return response.data.packages;
});

// Create new package
export const createPackage = createAsyncThunk(
    'packages/create',
    async (packageData, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${BASE_URL}/admin/package/new`, packageData,
        {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        console.log('Backend Response:', response.data); // Debugging
        return response.data.card;
      } catch (error) {
        console.error('Error in Axios Call:', error.response?.data || error.message); // Debugging
        return rejectWithValue(error.response?.data || error.message);
      }
    }
  );
  

// Update a package
export const updatePackage = createAsyncThunk(
    'packages/update',
    async ({ id, updatedData }) => {
      const response = await axios.put(`${BASE_URL}/admin/package/${id}`, updatedData);
      return response.data.updatedPackage;
    }
  );


  // Delete a package
export const deletePackage = createAsyncThunk(
    'packages/delete',
    async (id) => {
      await axios.delete(`${BASE_URL}/admin/package/${id}`);
      return id; // Return the deleted package ID
    }
  );


  // Get a single package detail
export const getPackageDetails = createAsyncThunk(
    'packages/getDetails',
    async (id) => {
      const response = await axios.get(`${BASE_URL}/package/${id}`);
      return response.data.package;
    }
  );


  // Get all packages for admin
export const getAdminPackages = createAsyncThunk(
    'packages/getAdmin',
    async () => {
      const response = await axios.get(`${BASE_URL}/admin/packages`);
      return response.data.packages;
    }
  );


const packageSlice = createSlice({
  name: 'packages',
  initialState: {
    packages: [],
    adminPackages: [],
    packageDetails: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {


    // Handle getPackages action
    builder
      .addCase(getPackages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPackages.fulfilled, (state, action) => {
        state.loading = false;
        state.packages = action.payload;
      })
      .addCase(getPackages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      // Handle createPackage action
      .addCase(createPackage.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPackage.fulfilled, (state, action) => {
        state.loading = false;
        state.packages.push(action.payload); // Add the new package to the state
      })
      .addCase(createPackage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


       // Handle updatePackage action
       .addCase(updatePackage.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePackage.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.packages.findIndex(
          (pkg) => pkg._id === action.payload._id
        );
        if (index !== -1) {
          state.packages[index] = action.payload;
        }
      })
      .addCase(updatePackage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Handle deletePackage action
      .addCase(deletePackage.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePackage.fulfilled, (state, action) => {
        state.loading = false;
        state.packages = state.packages.filter(
          (pkg) => pkg._id !== action.payload
        );
      })
      .addCase(deletePackage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Handle getPackageDetails action
      .addCase(getPackageDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPackageDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.packageDetails = action.payload;
      })
      .addCase(getPackageDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Handle getAdminPackages action
      .addCase(getAdminPackages.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAdminPackages.fulfilled, (state, action) => {
        state.loading = false;
        state.adminPackages = action.payload;
      })
      .addCase(getAdminPackages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default packageSlice.reducer;
