// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import RollLayout from 'src/layouts/RollLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/play" page={PlayPage} name="play" />

      <Set wrap={RollLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/instructions" page={InstructionsPage} name="instructions" />
        <Route path="/achievements" page={AchievementsPage} name="achievements" />
        <Route path="/leaderboard" page={LeaderboardPage} name="leaderboard" />
        <Route path="/account" page={AccountPage} name="account" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
