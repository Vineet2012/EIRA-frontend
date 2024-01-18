import React from "react";
import { useParams } from "react-router-dom";
import { myTripsDBTemp } from "../../temp/myTripsDBTemp";
import { itineraryViewEnum } from "../../utils/enums";

export const ItineraryPageContext = React.createContext(null);

export default function ItineraryPageContextProvider({ children }) {
  const params = useParams();
  const tripId = Number(params.tripId);
  const [viewType, setViewType] = React.useState(itineraryViewEnum.list);

  const retreat = myTripsDBTemp.find((el) => el.id === tripId);

  return (
    <ItineraryPageContext.Provider value={{ retreat, viewType, setViewType }}>
      {children}
    </ItineraryPageContext.Provider>
  );
}
