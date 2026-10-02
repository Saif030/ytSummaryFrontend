import { create } from 'zustand';
import axiosInstance from '../utils/AxiosInstance.js';

export const useDataStore = create((set) => ({
  user: null,
  loading: false,
  error: null,
  success: null,

  fetchUser: async () => {
    set({ loading: true })
    try {
      const res = await axiosInstance.get(`/user`)
      const data = res.data
      if(!data) {
        set({ error: 'User not found', loading: false, success: false })
        return
      }
      set({ user: data, loading: false, success: 'User fetched successfully' })
    } catch (err) {
      set({ error: err.message, loading: false, success: false })
    }
  },

}))

export const useAuth = create((set) => ({
  isAuthenticated: true,
  user: null,
  loading: false,
  error: null,
  success: null,

  login: async (data) => {
    set({ loading: true })
    try {
      const res = await axiosInstance.post(`/login`, data)
      const userData = res.data
      if(!userData) {
        set({ error: 'User not found', loading: false, success: false })
        return
      }
      set({ user: userData, loading: false, isAuthenticated: true, success: 'User logged in successfully' })
    } catch (err) {
      set({ error: err.message, loading: false, success: false })
    }
  },

  signup: async (data) => {
    set({ loading: true })
    try {
      const res = await axiosInstance.post(`/signup`, data)
      const userData = res.data
      if(!userData) {
        set({ error: 'User not found', loading: false, success: false })
        return
      }
      set({ user: userData, loading: false, success: 'User created successfully' })
    } catch (err) {
      set({ error: err.message, loading: false, success: false })
    }
  }

}))