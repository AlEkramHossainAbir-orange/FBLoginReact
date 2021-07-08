import axios from 'axios'

export const addDataLocalStorage = async() =>{
    try{
      const {data} = await axios.get('');
      console.log(data);
      return data;
    }
    catch(error){
        throw error;

    }

}