const menuclose = () =>{
    return (
        <i className="fa-solid fa-xmark" id="menuclose" onClick={()=>{
            let meni=document.querySelector('.nav-2 ul');
            let menuopen=document.querySelector(".nav-1 #menuopen");
            let menuclose=document.querySelector(".nav-1 #menuclose");
            meni.style.display='none';
            menuopen.style.display='block';
            menuclose.style.display='none';
          }}></i>
    );
};

export default menuclose;