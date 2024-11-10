import PropTypes from 'prop-types';

export default function QrModal ( {open, onClose, children} ){
  return(
    //backdrop
    <div onClick={onClose} className={`
    fixed inset-0 flex justify-center items-center
    transition-colors
    ${open ? "visible bg-black/20" : "hidden"}
    `}>
      <div onClick={(e) => e.stopPropagation()} className={`
        w-96 bg-white rounded-xl shadow p-6 transition-all 
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}>
      {children}
      </div>
    </div>
  )
}

QrModal.propTypes = {
  open: PropTypes.bool.isRequired,    // 'open' deve ser um booleano e é obrigatório
  onClose: PropTypes.func.isRequired, // 'onClose' deve ser uma função e é obrigatório
  children: PropTypes.node,           // 'children' pode ser qualquer tipo de nó (texto, JSX, etc.)
};