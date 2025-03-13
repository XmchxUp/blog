import AllAnything from "@/components/all-tags";
import { ALL_ARCHIVE, sortByDate } from "@/lib/utils";

async function ArchivesPage() {
  let archives = sortByDate(ALL_ARCHIVE, true);
  return <AllAnything title={"Archives"} items={archives} />;
}

export default ArchivesPage;
