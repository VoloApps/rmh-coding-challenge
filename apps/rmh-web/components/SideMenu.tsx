import React from 'react'

export const SideMenu = () => {
  return (
    <div className="bg-white">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                <li className="mr-2 py-4">
                    Today's
                </li>
                <li className="mr-2 py-4 px-14">
                    All
                </li>
            </ul>
        </div>
    </div>
  )
}
