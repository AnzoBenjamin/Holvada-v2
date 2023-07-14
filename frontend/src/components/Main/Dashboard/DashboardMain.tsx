import React from 'react'
import { DashboardNav } from './DashboardNav'
import { DashboardContent } from './DashboardContent'
import { DashboardHeader } from './DashboardHeader'

export const DashboardMain = () => {
  return (
    <main>
        <DashboardNav/>
        <DashboardContent/>
    </main>
  )
}
