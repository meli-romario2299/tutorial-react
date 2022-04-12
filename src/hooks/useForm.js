



export const useForm = ({ form, setForm }) => {

  const handleChangeInput = (e) => {
    console.log('input ', e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e, handleLogin) => {
    e.preventDefault();
    console.log('los valores del formulario: ', form);
    handleLogin();
  }

  return {
    handleChangeInput,
    handleSubmit
  }
}
