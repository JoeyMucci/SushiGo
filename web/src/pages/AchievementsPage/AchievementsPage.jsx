import { useEffect } from 'react'

import ResumeCell from 'web/src/components/ResumeCell/ResumeCell.jsx'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const AchievementsPage = () => {
  const { isAuthenticated, currentUser, loading } = useAuth()

  if (loading) {
    return <></>
  }

  let currentId = currentUser.id

  /*
  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])
  */

  return (
    <>
      <ResumeCell id={currentId} />
    </>
  )
}

export default AchievementsPage
