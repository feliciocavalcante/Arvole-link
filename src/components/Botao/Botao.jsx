
function Botao({children}) {
    
    return(
        <button className=" border justify-center border-gray-400 rounded-lg p-2 flex items-center gap-4 cursor-pointer w-full ">
          {children}
           </button>
    )
};

export default Botao;