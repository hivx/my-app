import { AuthLayout } from './AuthLayout';
import { LoginBlock } from './LoginBlock';

import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    return (
        <AuthLayout>
            <LoginBlock onSuccess={() => navigate('/admin')} />
        </AuthLayout>
    );
}