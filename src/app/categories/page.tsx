import AllAnything from "@/components/all-tags";
import { ALL_CATEGORY, sortByDate } from "@/lib/utils";

async function CategoriesPage() {
  let items = sortByDate(ALL_CATEGORY, true);
  return <AllAnything title={"Categories"} items={items} />;
}

export default CategoriesPage;
