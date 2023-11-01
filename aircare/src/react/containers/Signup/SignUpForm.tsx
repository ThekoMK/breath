import React, { useState } from 'react';
import Input from '../../components/Input';
import CheckBox from '../../components/CheckBox';

interface FormDataType {
    name: string;
    email: string;
    phone: string;
    password: string;
    password_confirmation: string;
}

const SignUpForm = () => {
    const [formData, setFormData] = useState<FormDataType>({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
    });

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            password: '',
            password_confirmation: '',
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, type, value, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        fetch('https://grflfgeygc.sharedwithexpose.com/register', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    // Success, the user was created
                    console.log(data.message);
                } else {
                    // Handle the error message, which could be related to the password length
                    console.error(data.error); // Log or display the error message
                }
            })
            .catch(error => {
                console.log("neshto", error);
            });
    };


    return (
        <form onSubmit={handleSubmit} >
            <Input
                type="text"
                title="Внеси име и презиме"
                id="name"
                placeholder="someone"
                value={formData.name}
                onChange={handleChange}
            />
            <Input
                type="email"
                title="Внеси е-маил адреса"
                id="email"
                placeholder="someone@email.com"
                value={formData.email}
                onChange={handleChange}
            />
            <Input
                type="tel"
                title="Внеси телефонски број"
                id="phone"
                placeholder="+38900 000 000"
                value={formData.phone}
                onChange={handleChange}
            />
            <Input
                type="password"
                title="Внеси лозинка"
                id="password"
                placeholder="**********"
                value={formData.password}
                onChange={handleChange}
            />
            <Input
                type="password"
                title="Потврди лозинка"
                id="password_confirmation"
                placeholder="**********"
                value={formData.password_confirmation}
                onChange={handleChange}
            />
            <CheckBox
                title="Запомни ме"
                id="saveInfo"
                // checked={formData.saveInfo}
                onChange={handleChange}
            />
            <CheckBox
                title="Се согласувам со условите и полисата за користење на апликацијата."
                id="termAndConditions"
                // checked={formData.termAndConditions}
                onChange={handleChange}
            />
            <div className='flex justify-center items-center w-full'>

                <button type="submit" className='w-[313px] h-16 rounded-[15px] bg-[#79b937] text-lg font-semibold text-white flex justify-center items-center self-center'>Регистирај се</button>
            </div>
        </form>
    );
};

export default SignUpForm;
