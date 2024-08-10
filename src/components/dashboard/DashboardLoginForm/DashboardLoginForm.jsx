"use client";
import { useFormState } from "react-dom";
import Link from 'next/link';
import { login } from "@/auth/actions";
import styles from './DashboardLoginForm.module.scss';


const DashboardLoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);


    return (
        <form action={formAction} className={styles.authForm}>
            <h1 className={styles.title}>Вхід</h1>
            <div className={styles.inputsWrapper}>
                <input type="email" placeholder="Email" name="email" className={styles.formInput} />
                <input type="password" placeholder="Пароль" name="password" className={styles.formInput} />
            </div>

            <button className={styles.authSubmitBtn}>Увійти</button>
            {state?.error && <p className={styles.errMessage} >{state.error}</p>}
            <p className={styles.checkingMessage}>У Вас ще немає акаунта? <Link className={styles.link} href='/dashboard/register'>Register</Link> </p>
        </form>
    )
}


export default DashboardLoginForm