import React, { useState, ChangeEvent, FormEvent } from 'react';
import Input from '../../components/Input';
import CheckBox from '../../components/CheckBox';
import { Link } from 'react-router-dom';

interface LoginFormType {
    loginEmail: string;
    loginPassword: string;
    saveMeLogin: boolean;
}

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState<LoginFormType>({
        loginEmail: '',
        loginPassword: '',
        saveMeLogin: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        fetch('https://grflfgeygc.sharedwithexpose.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with status: ${response.status}`);
                }
                return response.json();
            })
            .then((responseData) => {
                // Handle the response data as needed
                console.log('API Response:', responseData);
            })
            .catch((error) => {
                console.error('API Error:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className=''>
            <Input
                title="Е-маил адреса"
                id="email"
                type="email"
                placeholder="someone@email.com"
                value={formData.loginEmail}
                onChange={handleChange}
            />
            <Input
                title="Лозинка"
                id="loginPassword"
                type="password"
                placeholder="***********"
                value={formData.loginPassword}
                onChange={handleChange}
            />
            <div>
                <CheckBox id="saveMeLogin" title="Запомни ме" checked={formData.saveMeLogin} onChange={handleChange} />
                <span>Заборави лозинка?</span>
            </div>
            <hr />
            <p>Или преку</p>
            {/* Your social login buttons here */}
            <button type="submit" className='w-[313px] h-[16px] rounded-[15px] bg-[#79b937] text-lg font-semibold text-white flex justifcy-center items-center'>Регистирај се</button>
            <p>Немаш профил?</p>
            <Link to="/signup">Регистрирај се</Link>
        </form>
    );
};

export default LoginForm;
