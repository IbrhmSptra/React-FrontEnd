
function Background({className,children}){
    return (
    <div className={`bg-primary w-full flex bg-bg-banner bg-no-repeat bg-cover h-full ${className}`}>
        {children}
    </div>
    )
}
export default Background