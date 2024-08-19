"use client"
import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
  };
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  console.log(formData);
  

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if(!formData.firstName || !formData.lastName || !formData.email) return
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({...formData})
      })
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Tu solicitud de contacto ha sido exitosa.",
        showConfirmButton: true,
        timer: 5000,
      });
      setFormData(initialFormData);
    } catch (error) {
      Swal.fire({
        position: "top",
        icon: "error",
        title: "Tu solicitud de contacto no se ha podido enviar",
        showConfirmButton: true,
        timer: 5000,
      });
    }
  }

  return (
    <div className="mt-10 mx-3">
      <h1 className="text-[25px] text-[#A3AEC2] font-semibold text-center">
        Contactame
      </h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-8 mt-3 md:mx-auto">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              id="floating_first_name"
              className="block py-2.5 px-2 w-full text-sm text-white text-gray-900 bg-transparent border border-[#F2F5FC] rounded-lg"
              placeholder="Nombre"
              required
              onChange={handleChange}
            />
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              id="floating_last_name"
              className="block py-2.5 px-2 w-full text-sm text-white text-gray-900 bg-transparent border border-[#F2F5FC] rounded-lg"
              placeholder="Apellido"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            value={formData.email}
            id="floating_email"
            className="block py-2.5 px-2 w-full text-sm text-white text-gray-900 bg-transparent border border-[#F2F5FC] rounded-lg"
            placeholder="Correo electrónico"
            required
            onChange={handleChange}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              id="floating_phone"
              className="block py-2.5 px-2 w-full text-sm text-white text-gray-900 bg-transparent border border-[#F2F5FC] rounded-lg"
              placeholder="Teléfono"
              required
              onChange={handleChange}
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="reason"
              value={formData.reason}
              id="floating_reason"
              className="block py-2.5 px-2 w-full text-sm text-white text-gray-900 bg-transparent border border-[#F2F5FC] rounded-lg"
              placeholder="Motivo de contacto"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-[#F2F5FC] bg-[#FAA307] hover:bg-[#F48C06] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
