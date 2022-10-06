import React from 'react'
import * as yup from 'yup';
import {useFormik} from 'formik'; 
import styles from '../../styles/Main.module.scss'
type IState = {
    fullName: string; //
    email: string; //
    password: string; //
    confirmPassword: string; //
}
const validationSchema = yup.object({
    fullName: yup.string().required('full name is required').min(5, 'min character are 5').max(20, 'max character are 20'),
    email: yup.string().email('Invalid email').required('email is required'), 
    password: yup.string().required('password is required'),
    confirmPassword : yup.string().required().oneOf([yup.ref('password')], 'Password should match')
    });

export default function RegisterForm({IState}: Props) {
    const formik = useFormik<IState>({
        initialValues: {
            fullName: '', 
            email: '', 
            password: '',
            confirmPassword: '', 

        }, 
        onSubmit: values => {
            console.log(values)
        }, 
        validateOnBlur: false, 
        validationSchema,

    })
  return (
    <div >
        <form action="" onSubmit={formik.handleSubmit}>
            <input type="text" 
                className="input is-pirmary "
                name="fullname"
                placeholder='Full Name'
                value={formik.values.fullName}
                onChange={formik.handleChange}
            />
            {
               formik.errors.fullName && <span className={styles.error}>{formik.errors.fullName}</span>
            }
            <input type="email" 
                className="input is-pirmary"
                name="email"
                placeholder='email'
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            {
               formik.errors.email && <span className={styles.error}>{formik.errors.email}</span>
            }
            <input type="password" 
                className="input is-pirmary"
                name="password"
                placeholder='password'
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            {
               formik.errors.password && <span className={styles.error}>{formik.errors.password}</span>
            }
            <input type="password" 
                className="input is-pirmary"
                name="confirmPassword"
                placeholder='confirmPassword'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
            />
            {
               formik.errors.confirmPassword && <span className={styles.error}>{formik.errors.confirmPassword}</span>
            }
            <button className="button is-primary" type="submit">Submit</button>
        </form>
    </div>
  )
}