import Expandable from '@/components/ui/expandable'
import React from 'react'

function ActivitySection() {
  return (
    <div className='mx-5 lg:mx-0'>
        <div className="flex mx-5 md:mx-0 flex-col ">
          <h2 className="mb-2 rounded-xl text-2xl font-semibold md:text-3xl">
          Extracurriculars
          </h2>
          <p className="mb-8 md:mb-10  text-sm md:text-base">
          <span className="text-xl text-sky-500">●</span> My involvement in activities outside of work, including events, volunteering, or contributions to the tech community.
          </p>
        </div>
      <Expandable className="flex w-full min-w-72 storybook-fix dark:shadow-slate-700 dark:shadow-xl" />
    </div>
  )
}

export default ActivitySection