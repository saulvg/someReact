import { useEffect, useState } from "react";

const useFormUserName = () => {
  const [formData, setFormData] = useState({
    username: "",
  });

  const [isSend, setIsSend] = useState(false);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setIsSend(true);
    console.log("Enviado", formData);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  useEffect(() => {
    if (isSend) {
      document.title = `Hello ${formData.username}`;
    }
    setIsSend(false);
  }, [isSend]);

  return {
    handlerSubmit,
    handleChange,
    username: formData.username,
  };
};

export default useFormUserName;
