import React, { useEffect, useState } from "react";
import axios from "axios";

const FORM_ID = "payment-form";

// el componente Product recibe un objeto items con la siguiente forma:

// {
//     amount: 13,   ------> monto de la cita
//     doctorId: "fwqervwervewr",
//     patientId: "wervwervwerv",
//     startDate: "2023/05/29T09:30",
//     endDate: "2023/05/29T10:00",
// }

export default function Product({ items }) {
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    // luego de montarse el componente, le pedimos al backend el preferenceId

    axios
      .post(
        "https://qali-api-production.up.railway.app/payment/create-order",
        items
      )
      .then((order) => {
        setPreferenceId(order.data.data);
      });
  }, []);

  useEffect(() => {
    if (preferenceId) {
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", preferenceId);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  }, [preferenceId]);

  return <form id={FORM_ID} method="GET" />;
}
