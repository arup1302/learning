import React, {useState} from 'react';
import {AgentDetails, DropDownItem, UserData, UserInfo} from './types';
export interface AppContextProps {
  token: string | null;
  setToken: ((token: string) => void) | null;
  race: DropDownItem[] | null;
  setRace: ((race: DropDownItem[]) => void) | null;
  states: DropDownItem[] | null;
  setStates: ((state: DropDownItem[]) => void) | null;
  area: DropDownItem[] | null;
  setArea: ((race: DropDownItem[]) => void) | null;
  languages: DropDownItem[] | null;
  setLanguages: ((state: DropDownItem[]) => void) | null;
  cities: DropDownItem[] | null;
  setCities: ((state: DropDownItem[]) => void) | null;
  educationLevels: DropDownItem[] | null;
  setEducationLevels: ((state: DropDownItem[]) => void) | null;
  user: UserInfo | null;
  setUser: ((user: UserInfo) => void) | null;
  agentName: string | null;
  setAgentName: ((user: string) => void) | null;
  userData: UserData | null;
  setUserData: ((userData: UserData) => void) | null;
  //agent details same as user data but updated the types
  agentDetails: AgentDetails | null;
  setAgentDetails: ((agentDetails: AgentDetails) => void) | null;
}
export const AppContext = React.createContext<AppContextProps>({
  token: null,
  setToken: null,
  race: null,
  setRace: null,
  states: null,
  setStates: null,
  languages: null,
  setLanguages: null,
  educationLevels: null,
  setEducationLevels: null,
  user: null,
  setUser: null,
  agentName: null,
  setAgentName: null,
  cities: null,
  setCities: null,
  area: null,
  setArea: null,
  userData: null,
  setUserData: null,
  agentDetails: null,
  setAgentDetails: null,
});
interface Props {
  children: React.ReactNode;
}
export const AppProvider: React.FC<Props> = ({children}) => {
  const [token, setToken] = React.useState<AppContextProps['token']>(null);
  const [race, setRace] = React.useState<AppContextProps['race']>(null);
  const [user, setUser] = React.useState<AppContextProps['user']>(null);
  const [cities, setCities] = useState<AppContextProps['cities']>(null);
  //removew hardcoded values when api issue is resolved
  const [area, setArea] = useState<AppContextProps['area']>([
    {id: 1, label: 'Afghanistan', value: 'Afghanistan'},
    {id: 2, label: 'Bahamas, The', value: 'Bahamas, The'},
    {id: 3, label: 'Cambodia', value: 'Cambodia'},
    {id: 4, label: 'Denmark', value: 'Denmark'},
  ]);
  const [states, setStates] = React.useState<AppContextProps['states']>(null);
  const [languages, setLanguages] =
    React.useState<AppContextProps['states']>(null);
  const [educationLevels, setEducationLevels] =
    React.useState<AppContextProps['states']>(null);
  const [agentName, setAgentName] =
    useState<AppContextProps['agentName']>(null);
  const [userData, setUserData] = useState<AppContextProps['userData']>(null);
  const [agentDetails, setAgentDetails] =
    useState<AppContextProps['agentDetails']>(null);
  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        race,
        setRace,
        states,
        setStates,
        languages,
        setLanguages,
        educationLevels,
        setEducationLevels,
        user,
        setUser,
        agentName,
        setAgentName,
        cities,
        setCities,
        area,
        setArea,
        userData,
        setUserData,
        agentDetails,
        setAgentDetails,
      }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () =>
  React.useContext<AppContextProps>(AppContext);
