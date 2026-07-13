
const ProjectDuration = () => {
  return (
    <>
        {/* For TSX uncomment the commented types below */}
        <div className="flex gap-2">
        <div>
            <span className="countdown font-mono text-sm">
                <span style={{"--value":15} /* as React.CSSProperties */ } aria-live="polite">15</span>
            </span>
            d
        </div>
        <div>
            <span className="countdown font-mono text-sm">
                <span style={{"--value":10} /* as React.CSSProperties */ } aria-live="polite" >10</span>
            </span>
            h
        </div>
        <div>
            <span className="countdown font-mono text-sm">
            <span style={{"--value":24} /* as React.CSSProperties */ } aria-live="polite" >24</span>
            </span>
            m
        </div>
    </div>

    </>
  )
}

export default ProjectDuration