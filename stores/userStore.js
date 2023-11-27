
import { getUserData, loginRequest, registerRequest } from '@/apiCalls';
import {create} from 'zustand';

const useUserStore = create((set) => ({
  user: null,
  loading: false,
  error: null,
  login: async (creds) => {
    set({ loading: true, error: null });

    const data = await loginRequest(creds);
     if(data.status === 200){
      
       set({ loading: false, error: null , user: data.data});
     }else{
        set({ loading: false, error: data.response.data.message ,});
     }
   
},
registerAcc: async (creds) => {
  
    set({ loading: true, error: null });

    const data = await registerRequest(creds);
     if(data.status === 200){
    
       set({ loading: false, error: null , user: data.data.user});
     }else{
        set({ loading: false, error: data.response.data.message ,});
     }
   
},
getUserData: async () => {
  const data = await getUserData();
  if(data.status === 200){
    
       set({ loading: false, error: null , user: data.data.users[0]});
     }else{
        set({ loading: false, error: data.response.data.message ,});
     }
},
}));

export default useUserStore;