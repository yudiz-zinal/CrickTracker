import { useQuery } from "@apollo/client";
import { GET_MENU } from "../../graphQL/graphql";

export default function MenuTree() {
  const { data, loading, error } = useQuery(GET_MENU);
  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }
  const navMenu = data.getMenuTree?.aResults;
  return (
    <div className="">
      <div className=" md:px-6 max-w-screen-xl container mx-auto px-4">
        <div className=" flex gap-6 lg:justify-center  py-4 max-w-screen-xl   overflow-auto 	">
          {navMenu.map((e) => {
            return (
              <span
                className="no-wrap text-xs font-bold"
                role={"button"}
                key={e.sTitle}
              >
                {e.sTitle.toUpperCase()}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
