import React from 'react'

const CountingArea = () => {
  return (
    <div className="flex gap-4">
            {/* box-1 */}
            <div className="flex gap-2 bg-blue-50 border p-3 rounded-md">
              <GraduationCap />
              <div className="pr-6 space-y-1">
                <p className="text-base">Total Student</p>
                <p className="text-xs text-gray-400">3320</p>
              </div>
            </div>
            {/* box-2 */}
            <div className="flex gap-2 bg-blue-50 border p-3 rounded-md">
              <GraduationCap />
              <div className="pr-6 space-y-1">
                <p className="text-base">Total Instructors</p>
                <p className="text-xs text-gray-400">3320</p>
              </div>
            </div>
            {/* box-3 */}
            <div className="flex gap-2 bg-blue-50 border p-3 rounded-md">
              <GraduationCap />
              <div className="pr-6 space-y-1">
                <p className="text-base">Total Payment</p>
                <p className="text-xs text-gray-400">3320</p>
              </div>
            </div>
          </div>
  )
}

export default CountingArea