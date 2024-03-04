import Head from 'next/head';
import CookieStandAdmin from './CookieStandAdmin';
import LoginForm from './LoginForm'
import { useAuth } from '@/contexts/auth';


export default function Home() {
    const { user, login } = useAuth()
    return (
        <div className="p-4">
        <Head>
            <title>Cookie Stand Admin</title>
        </Head>
        {user ?
            <>
                <h1>Logged in: {user.email}</h1>
                <CookieStandAdmin />
            </>
            :
            <LoginForm onLogin={login} />
        }

    </div>
    );
}