import { getJobs } from '@/apiCalls';
import {create} from 'zustand';

const useJobsStore = create((set) => ({
  jobs: null,
  loading: false,
  error: null,
  page: 1 ,
  fetchData: async (page) => {
    set({ loading: true, error: null });

    const data = await getJobs(page);
     if(data.status === 201){
       set({ loading: false, error: null , jobs: data.data});
     }else{
        set({ loading: false, error: data ,});
     }
   
}}));

export default useJobsStore;