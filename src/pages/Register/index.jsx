import React from 'react';
import reactSelect from 'react-select';
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";

export const Register = () => {
    const { register, handleSubmit, formState: { errors },control,watch } = useForm();
    const onSubmit = data => console.log(data);
    console.log("errours", errors)
    const hobisOptions = [
        { value: 'football', label: 'football' },
        { value: 'playstation', label: 'playstation' },
        { value: 'reading', label: 'reading' }]

    const genderOptions = [
        { value: 'male', label: 'male' },
        { value: 'fmale', label: 'fmale' },]


    return (
        <div className='container'>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='border p-5 w-50 mx-auto'>
                <div className='my-5'>
                    <input type="text" placeholder='email' className='w-100 form-control'
                        {...register('userEmail', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                    />
                    {
                        (errors.userEmail && errors.userEmail.type === "required")
                        &&
                        <p className='text-danger'>email is required</p>
                    }
                    {
                        (errors.userEmail && errors.userEmail.type === "pattern")
                        &&
                        <p className='text-danger'>email is unvalid</p>
                    }
                </div>
                <div className='my-5'>
                    {/* <Select options={genderOptions} className='w-100 my-5'
                        {...register('selectGender', { required: true })}
                    /> */}
                    <Controller
                        name="selectGender"
                        control={control}
                        rules={{ required: true }}

                        render={({ field }) => <Select
                            {...field}
                            options={genderOptions}
                            placeholder="gender"

                        />}
                    />
                    {
                        (errors.selectGender && errors.selectGender.type === "required")
                        &&
                        <p className='text-danger'>select gender</p>
                    }
                </div>
                <div className='my-5'>
                    <input type="text" placeholder='phone' className='w-100 form-control'
                        {...register('userPhone', { required: true, maxLength: 11 })}
                    />
                    {
                        (errors.userPhone && errors.userPhone.type === "maxLength")
                        &&
                        <p className='text-danger'>phone is unvalid</p>
                    }
                    {
                        (errors.userPhone && errors.userPhone.type === "required")
                        &&
                        <p className='text-danger'>phone is required</p>
                    }
                </div>
                <div className='my-5'>
                    <input type="password" className='w-100 form-control' placeholder='password'
                        {...register('password', { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ })}
                    />
                    {
                        (errors.password && errors.password.type === "required")
                        &&
                        <p className='text-danger'>password is required</p>
                    }

                    {
                        (errors.password && errors.password.type === "pattern")
                        &&
                        <p className='text-danger'>password must have Minimum eight characters, at least one letter, one number and one special character:

                        </p>
                    }
                </div>
                <div className='my-5'>
                    <input type="password" placeholder='confirm password' className='w-100 form-control'
                     {...register('confirmPassword',{
                        validate: (val) => {
                            if (watch('password') != val) {
                              return "Your passwords do no match";
                            }
                    } 
                      })}
                    />
                     {
                        (errors.confirmPassword && errors.confirmPassword.type === 'validate')
                        &&
                        <p className='text-danger'>password is not  match</p>
                    }

                </div>
                <div>
                    <div>hoobis</div>
                    {/* <Select options={hobisOptions} isMulti className='w-100 my-5'
                        {...register('selectHoobis', { required: true })}
                    /> */}
                     <Controller
                        name="selectHoobis"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Select
                            {...field}
                            options={hobisOptions}
                            isMulti
                            placeholder="hoobis"


                        />}
                    />



                    {
                        (errors.selectHoobis && errors.selectHoobis.type === "required")
                        &&
                        <p className='text-danger'>select any item</p>
                    }
                </div>
                <div className='my-5'>
                    <button className='btn btn-primary' type='submit'>submit</button>
                </div>




            </form>


        </div>
    )
}
export default Register
