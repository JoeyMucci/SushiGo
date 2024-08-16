const Blinker = ({ achName, achDescription, isCompleted }) => {
  if (isCompleted)
    return (
      <div>
        <span className="dot bg-[color:var(--color-complete)]"></span>
        <span className="font-cal text-2xl text-[color:var(--color-nature)]">
          {achName}: {achDescription}
        </span>
      </div>
    )
  else
    return (
      <div>
        <span className="dot bg-[color:var(--color-incomplete)]"></span>
        <span className="font-cal text-2xl text-[color:var(--color-nature)]">
          {achName}: {achDescription}
        </span>
      </div>
    )
}

export default Blinker
