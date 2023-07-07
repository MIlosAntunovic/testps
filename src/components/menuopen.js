const menuopen = () =>{
    return (
        <i className="fa-solid fa-bars" id="menuopen" onClick={()=>{
            let meni=document.querySelector('.nav-2 ul');
            let menuopen=document.querySelector(".nav-1 #menuopen");
            let menuclose=document.querySelector(".nav-1 #menuclose");
            meni.style.display='block';
            menuopen.style.display='none';
            menuclose.style.display='block';
          }}></i>
    );
};
export default menuopen;