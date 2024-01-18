import { PageMainContentsLayoutCmp, PageSectionLayoutCmp } from "../../components/Layouts";
import ItineraryBodyCmp from "./ItineraryBodyCmp";
import ItineraryHeaderCmp from "./ItineraryHeaderCmp";
import ItineraryPageContextProvider from "./ItineraryPageContext";

export default function ItineraryPage() {
  return (
    <ItineraryPageContextProvider>
      <ItineraryPageMain />
    </ItineraryPageContextProvider>
  );
}

function ItineraryPageMain() {
  return (
    <PageMainContentsLayoutCmp>
      <PageSectionLayoutCmp title="My Trips">
        <ItineraryHeaderCmp />
        <ItineraryBodyCmp />
      </PageSectionLayoutCmp>
    </PageMainContentsLayoutCmp>
  );
}
