import { PageMainContentsLayoutCmp, PageSectionLayoutCmp } from "../../components/Layouts";
import PastRetreatsCmp from "./PastRetreatsCmp";
import UpcomingRetreatsCmp from "./UpcomingRetreatsCmp";

export default function MyTripsPage() {
  return (
    <PageMainContentsLayoutCmp>
      <PageSectionLayoutCmp title="My Trips">
        <UpcomingRetreatsCmp />
      </PageSectionLayoutCmp>
      <PageSectionLayoutCmp>
        <PastRetreatsCmp />
      </PageSectionLayoutCmp>
    </PageMainContentsLayoutCmp>
  );
}
