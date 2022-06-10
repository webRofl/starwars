import { useContext } from 'react';
import { PeopleContext } from '../providers/PeopleProvider';

const usePeople = () => useContext(PeopleContext);

export default usePeople;
