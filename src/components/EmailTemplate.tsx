import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reason: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  reason,
}) => (
  <div>
    <h1>¡{firstName} Quiere contactar contigo!</h1>
    <h2>Datos de contacto:</h2>
    <p>
      <strong>Nombre: </strong>{firstName} {lastName}
    </p>
    <p>
      <strong>Telefono: </strong>{phone}
    </p>
    <p>
      <strong>Correo Electrónico: </strong>{email}
    </p>
    <p>
      <strong>Motivo de contacto: </strong>{reason}
    </p>
  </div>
);
