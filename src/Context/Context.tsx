import { createContext, Dispatch, SetStateAction } from 'react';
import { IAuth } from './IAuth';

type Registration = IAuth & IModal;

interface IModal {
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const Context = createContext({} as Registration);
export default Context;