import { createContext } from "react";

interface ITimeSlot {
    dateSlots: Date[],
    timeSel: Date,
    setTimeSel?: any,
}
const ContextTimeSlot = createContext<ITimeSlot>({dateSlots: [],timeSel: new Date()})

export default ContextTimeSlot;