import { useState } from 'react'

import StatsCell from 'web/src/components/StatsCell/StatsCell.jsx'

import { Label, Form, CheckboxField } from '@redwoodjs/forms'

const LeaderboardPage = () => {
  const [currentBoard, setCurrentBoard] = useState('easy')
  return (
    <>
      <Form className="flex flex-row justify-center">
        <Label className="m-2">
          <CheckboxField
            id="easy"
            name="leaderboards"
            onChange={() => setCurrentBoard('easy')}
          />
          <p
            name="easy"
            className={
              currentBoard == 'easy'
                ? 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
                : 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
            }
          >
            Easy
          </p>
        </Label>
        <Label className="m-2">
          <CheckboxField
            id="normal"
            name="leaderboards"
            onChange={() => setCurrentBoard('normal')}
          />
          <p
            name="normal"
            className={
              currentBoard == 'normal'
                ? 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
                : 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
            }
          >
            Normal
          </p>
        </Label>
        <Label className="m-2">
          <CheckboxField
            id="hard"
            name="leaderboards"
            onChange={() => setCurrentBoard('hard')}
          />
          <p
            name="hard"
            className={
              currentBoard == 'hard'
                ? 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
                : 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
            }
          >
            Hard
          </p>
        </Label>
        <Label className="m-2">
          <CheckboxField
            id="toxic"
            name="leaderboards"
            onChange={() => setCurrentBoard('toxic')}
          />
          <p
            name="toxic"
            className={
              currentBoard == 'toxic'
                ? 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
                : 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
            }
          >
            Toxic
          </p>
        </Label>
        <Label className="m-2">
          <CheckboxField
            id="speedrun"
            name="leaderboards"
            onChange={() => setCurrentBoard('speedrun')}
          />
          <p
            name="speedrun"
            className={
              currentBoard == 'speedrun'
                ? 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
                : 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
            }
          >
            Speedrun
          </p>
        </Label>
      </Form>
      <StatsCell difficulty={currentBoard} />
    </>
  )
}

export default LeaderboardPage
