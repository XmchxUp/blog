import AllAnything from "@/components/all-tags";
import { ALL_TAG, sortByDate } from "@/lib/utils";

async function TagsPage() {
  let items = sortByDate(ALL_TAG, true);
  return <AllAnything title={"Tags"} items={items} />;
}

export default TagsPage;
