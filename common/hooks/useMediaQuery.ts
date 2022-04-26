import { buildMediaQuery, IBuildMediaQuery } from "@utils";
import { useCallback, useState, useEffect } from "react";

export const useMediaQuery = (mediaQuery: IBuildMediaQuery) => {
  const query = buildMediaQuery(mediaQuery).replace("@media ", "");
  const [match, setMatch] = useState(false);
  const canMatch =
    typeof window === "object" && typeof window.matchMedia === "function";

  const queryMedia = useCallback(() => {
    const queryList = window.matchMedia(query);
    setMatch((queryList && queryList.matches) || false);
    return queryList;
  }, [canMatch, query]);

  useEffect(() => {
    if (!canMatch) return;
    const queryList = queryMedia();
    if (queryList) queryList.addListener(queryMedia);
    return () => queryList && queryList.removeListener(queryMedia);
  }, [queryMedia, canMatch]);

  return match;
};
