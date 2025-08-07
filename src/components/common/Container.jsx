

export default function Container({ children, className }) {
  return (
    <div className={`${className} w-full max-w-[1520px] mx-auto px-5`}>
      {children}
    </div>
  )
}
