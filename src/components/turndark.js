const theme = () =>{
    return (
        <div>
        <i className="fa-regular fa-moon" id="turndark" onClick={()=>{
            document.body.classList.toggle("dark-theme");
          }}></i>
        <i className="fa-sharp fa-solid fa-moon" id="turnlight" onClick={()=>{
            document.body.classList.remove("dark-theme");
        }}></i>
        </div>
    )
};
export default theme;