import { PageMainContentsLayoutCmp, PageSectionLayoutCmp } from "../../components/Layouts";
import ItineraryBodyCmp from "./ItineraryBodyCmp";
import ItineraryHeaderCmp from "./ItineraryHeaderCmp";

export default function ItineraryPage() {
  return (
    <PageMainContentsLayoutCmp>
      <PageSectionLayoutCmp title="My Trips">
        <ItineraryHeaderCmp />
        <ItineraryBodyCmp />
      </PageSectionLayoutCmp>
    </PageMainContentsLayoutCmp>
  );
}
