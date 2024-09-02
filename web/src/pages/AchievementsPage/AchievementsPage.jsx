import { useEffect } from 'react'

import ResumeCell from 'web/src/components/ResumeCell/ResumeCell.jsx'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const AchievementsPage = () => {
  const { isAuthenticated, currentUser, loading } = useAuth()
  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routes.signup())
    }
  }, [isAuthenticated])

  if (loading || !isAuthenticated) {
    return <></>
  }

  let currentId = currentUser.id

  return (
    <>
      <ResumeCell id={currentId} />
    </>
  )
}

export default AchievementsPage
