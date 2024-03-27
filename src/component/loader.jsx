

function Loader() {
  return (
    <div className="flex flex-row space-x-4 justify-center items-center bg-white h-screen dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="w-12 h-12 rounded-full animate-spin border border-dashed border-cyan-500 border-t-transparent" />
      <div className="w-12 h-12 rounded-full animate-spin border-2 border-dashed border-indigo-500 border-t-transparent" />
      <div className="w-12 h-12 rounded-full animate-spin border-4 border-dashed border-pink-500 border-t-transparent" />
      <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent">
      </div>
    </div>

  )
}

export default Loader