function Input({lable,...props}){
    return(
        <>
            <div>
                <label>{lable}:</label>
                {/* <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>     */}
                <input {...props} />
            </div>    
        </>
    )
}
export default Input