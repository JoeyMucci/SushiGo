import { useEffect } from 'react'

import ResumeCell from 'web/src/components/ResumeCell/ResumeCell.jsx'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const AchievementsPage = () => {
  const { isAuthenticated, currentUser, loading } = useAuth()

  if (loading) {
    return <></>
  }

  let mailAddr = currentUser.email

  /*
  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])
  */

  return (
    <>
      <ResumeCell email={mailAddr} />
    </>
  )
}

export default AchievementsPage
