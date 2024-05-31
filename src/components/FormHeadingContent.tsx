import React from "react";
type TProps = {
  title: string;
  csName?: string;
  csTitle?:string;
  csDesc?:string;
  desc?: string;
};

const FormHeadingContent = ({ title, csName, csTitle, csDesc, desc }: TProps) => {
  const descText =
    "This information will be stored Database. So be careful what you share.";
  return (
    <div className={`pt-5 ${csName}`}>
      <p className={`text-base font-semibold leading-7 text-gray-900 ${csTitle}`}>
        {title}
      </p>
      <p className={`mt-1 text-sm leading-6 text-gray-600 ${csDesc}`}>
        {" "}
        {desc ? desc : descText}
      </p>
    </div>
  );
};

export default FormHeadingContent;
