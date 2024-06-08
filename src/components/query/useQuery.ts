"use client";

import { useState } from "react";

const useQuery = () => {
  const [results, setResults] = useState();

  const handleQuery = async (sortBy: SortOption, search?: string) => {};

  return {
    results,
    handleQuery,
  };
};

export default useQuery;
