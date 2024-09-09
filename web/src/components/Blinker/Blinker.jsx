const Blinker = ({ title, achName, achDescription, isCompleted }) => {
  if (isCompleted)
    return (
      <div>
        <span
          title={title}
          className="dot bg-[color:var(--color-complete)]"
        ></span>
        <span
          title={title}
          className="font-cal text-2xl text-[color:var(--color-nature)]"
        >
          {achName}: {achDescription}
        </span>
      </div>
    )
  else
    return (
      <div>
        <span
          title={title}
          className="dot bg-[color:var(--color-incomplete)]"
        ></span>
        <span
          title={title}
          className="font-cal text-2xl text-[color:var(--color-nature)]"
        >
          {achName}: {achDescription}
        </span>
      </div>
    )
}

export default Blinker
