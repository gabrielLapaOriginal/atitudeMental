import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import QrModal from "./QrModal";
import { useState } from "react";
import {QRCodeSVG} from 'qrcode.react';
import { data } from "./data";
import { useNavigate } from "react-router-dom";

const MainContent = () => {

  const navigate = useNavigate();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  //propriedades do slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  // Função para abrir o modal e definir o item selecionado
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  //funcao para verificar se o item precisa de modal ou link
  const handleItemClick = (item) =>{
    if(item.type === "modal"){
      openModal(item)
    } else if(item.type === "page" && item.route){
      navigate(item.route)
    }
  }

  return (
    <div className="w-3/4 h-1/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white h-[600px] text-black rounded-2xl w-[375px] cursor-pointer"
              onClick={() => handleItemClick(item)} 
            >
              <div className="flex justify-center items-center w-full">
                <img src={item.image} alt={item.title} className="w-full" />
              </div>
              <div className="h-[300px] flex flex-col justify-center items-center gap-4 p-6 bg-gray-200 relative">
                <p className="text-x font-semibold">{item.title}</p>
                <div className="w-full h-0.5 bg-black mt-3 absolute top-28"></div>
                <p className="mt-4">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* modal condicional */}
        <QrModal open={isModalOpen} onClose={closeModal}>
          {selectedItem && (
            <div className="text-center w-[100%] h-[500px] bg-slate-100 rounded-xl shadow p-1">
              <h2 className="text-xl font-bold p-5">{selectedItem.title}</h2>
              <p className="p-5 mb-3">{selectedItem.description}</p>
              <QRCodeSVG className="m-auto" value={selectedItem.link} />
            </div>
          )}
        </QrModal>
      </div>
    </div>
  );
};

export default MainContent;
