import React from 'react'
type TProps = {
    title: string;
    desc?: string;
    className?:string;
}

const FormHeadingContent = ({title, desc, className}: TProps) => {
  return (
    <div className={`${className}`}>
      <h2 className="text-base font-semibold leading-7 text-gray-900">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            {desc ? desc : "This information will be stored Database. So be careful what you share."}
          </p>
      </div>
  )
}

export default FormHeadingContent
