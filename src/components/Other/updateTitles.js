import { Helmet } from "react-helmet";

export const UpdateTitle = ({title}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </>
  );
};

