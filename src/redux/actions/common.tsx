import { deprecated } from "typesafe-actions";

const { createStandardAction } = deprecated;

export const COMMON_SEARCH_FILTER = "COMMON_SEARCH_FILTER";

export const setCommonSearhFilter = createStandardAction(COMMON_SEARCH_FILTER)<string, any[]>();
