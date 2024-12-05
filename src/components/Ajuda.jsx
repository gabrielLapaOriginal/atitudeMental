import '../App.css'
import { useState } from "react";
import QrModal from "./QrModal";
import {QRCodeSVG} from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Ajuda () {
  const [matricula, setMatricula] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrValue, setQrValue] = useState("")
  const navigate = useNavigate();

  const openModal = async ()=>{
    const message = `Boa tarde, sou estudante da Uninassau de matrícula ${matricula} e estou entrando em contato para falar sobre saúde mental.`;
  const encodedMessage = encodeURIComponent(message);  // Codificando a mensagem
    setQrValue(`https://wa.me/5581986671197?text=${encodedMessage}`)
    setIsModalOpen(true)

    //axios
    try{
      await axios.post('https://atitude-mental-back.vercel.app/matriculas', { matricula });
      console.log('Matricula salva')
    } catch(error){
      console.error(`Erro ao salvar matricula: ${error}`)
    }
  }
  const closeModal = ()=>{
    setQrValue("")
    setIsModalOpen(false)
  }


  const handleInputChange = (e) => {
    setMatricula(e.target.value);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <body className="w-screen h-screen flex justify-center items-center font-iphone">
      <div className="w-[1320px] h-[800px] text-center">
      <button 
          onClick={goBack} 
          className="absolute top-4 left-4 p-2 bg-gray-300 rounded-full text-white hover:bg-gray-400 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <h1 className="text-4xl m-32">Bem-vindo à central de dúvidas e ajuda</h1>

        <div className="flex items-center justify-center space-x-4">
          <input
            type="number"
            placeholder="Digite sua matrícula"
            value={matricula}
            onChange={handleInputChange}
            className="w-full max-w-md p-4 border border-gray-300 rounded-3xl text-lg focus:outline-none focus:border-gray-400 bg-white placeholder-gray-500 text-center font-medium appearance-none no-spinner"
          />
          
          <button  onClick={openModal} className="w-12 h-12 flex items-center justify-center bg-sky-300 rounded-full text-white hover:bg-sky-500 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <QrModal open={isModalOpen} onClose={closeModal}>
          <div className="text-center w-[100%] h-[500px] bg-slate-100 rounded-xl shadow p-1">
            <h2 className="text-xl font-bold p-5">QR Code para Matrícula {matricula}</h2>
            <p className="p-5 mb-3">Escaneie o QR code abaixo para entrar em contato com a psicologa:</p>
            <QRCodeSVG className="m-auto" value={qrValue} />
          </div>
        </QrModal>

      </div>
    </body>
  );
}
