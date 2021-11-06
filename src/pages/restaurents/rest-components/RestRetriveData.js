import { useRouteMatch } from "react-router";
import { useGlobalLoginContext } from "../../../context/LoginContext";

export function RestRetriveData() {
  const { rest } = useGlobalLoginContext();
  const router = useRouteMatch();
  const dataFrom = router.params.url;

  const da = rest.map((item) => {
    if (dataFrom === item.url) {
      return item;
    }
    return undefined;
  });

  Object.keys(da).forEach((key) => da[key] === undefined && delete da[key]);

  let d;
  for (let i = 0; i < da.length; i++) {
    if (da[i]) {
      d = da[i];
    }
  }

  return d;
}
