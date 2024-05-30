import React from 'react'
type TProps = {
    title: string
}

const FormHeadingContent = ({title}: TProps) => {
  return (
    <div className="pt-5 pb-0">
      <h2 className="text-base font-semibold leading-7 text-gray-900">{title}</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be stored Database. So be careful what you share.
          </p>
      </div>
  )
}

export default FormHeadingContent
