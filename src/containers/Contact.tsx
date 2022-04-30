import React from "react";
import emailjs from '@emailjs/browser';
import styles from './css/contact.module.css';
type FormElement = React.FormEvent<HTMLFormElement>;
type inputElement = React.ChangeEvent<HTMLInputElement>;
type TexareaElement = React.ChangeEvent<HTMLTextAreaElement>;

export default function Contact() {
    const [inputs, setInputs] = React.useState(
        {
            nombre: '',
            email: '',
            mensaje: ''
        }
    )

    const handleChange = (e: inputElement | TexareaElement) => {
        setInputs(
            {
                ...inputs,
                [e.target.name]: e.target.value,
            }
        )
    }
    const handleSubmit = (e: FormElement) => {
        e.preventDefault();
        emailjs.sendForm('service_lkogf6j','template_0yyd2jp',(e.target as HTMLFormElement),'AuOjMNb6K4Nv0rtuC')
        .then(res=>alert('email enviado, sera respondido en un plaso de 24h Gracias por su preferencia'))
        .catch(err=>alert('algo anda mal...!'))
    }
    return (
        <div className={styles.contenedor}>
            <form
                onSubmit={handleSubmit} >
                <label>
                    <h4>Nombre:</h4>
                    <input
                        name='nombre'
                        type="text"
                        placeholder="Nombre ccompleto"
                        onChange={e => handleChange(e)} />
                </label>
                <br />
                <label>
                    <h4>Email:</h4>
                    <input
                        name='email'
                        type="email"
                        placeholder="email"
                        onChange={e => handleChange(e)} />
                </label>
                <br />
                <label>
                    Mensaje
                    <textarea
                        name='mensaje'
                        placeholder='Tu consulta va aqui...'
                        onChange={e => handleChange(e)} />
                </label>
                <br />
                <button type="submit" >apretame</button>
            </form>
        </div>
    )
} 