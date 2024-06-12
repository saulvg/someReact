import { useDataApi } from "@/lib/api";

export const useApiAnswerCall = (url) => {
  const { data, error, loading } = useDataApi(url);

  const handleClick = () => {
    console.log("Data", data);

    console.log(`
    Error ->  ${error ? error.message : null}
    Loading -> ${loading}
            `);
  };

  return {
    handleClick,
  };
};
