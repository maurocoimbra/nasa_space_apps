import React, { useState } from 'react';

const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="bg-[#0f0f1e] flex flex-col items-center">
      <button
        onClick={handleButtonClick}
        className="bg-lime-500 text-[#0f0f1e] font-bold py-3 px-6 mb-5 rounded-lg hover:bg-lime-600 transition duration-300"
      >
        Fale Conosco
      </button>

      {showForm && (
        <form className="bg-[#0f0f1e] text-white p-10 mt-5 w-[400px] space-y-5 rounded-lg">
          <h2 className="text-2xl font-bold">Fale Conosco</h2>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            className="w-full p-3 rounded-lg text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            className="w-full p-3 rounded-lg text-black"
            required
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            rows="4"
            className="w-full p-3 rounded-lg text-black"
            required
          />
          <button
            type="submit"
            className="bg-lime-500 w-full py-3 text-[#0f0f1e] font-bold rounded-lg hover:bg-lime-600 transition duration-300"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
