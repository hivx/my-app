import { Typography } from '@mui/material';

import { useDispatch } from 'react-redux';
import { useForm, UseFormProps } from 'react-hook-form';

import { MyButton } from './MyButton';
import loginLogo  from '../assets/logo-login-bvdkbd.svg';
import { LoginCredentialsDTO } from '../types/index';
import { useLazyLoginQuery, useLazyGetCurrentUserQuery } from './api/login';
import { setCredentials } from '../redux/authSlice';
import { AppDispatch } from '../redux/store';

import {
  StyledLoginButton,
  StyledLoginContainer,
  StyledLoginForm,
  StyledLoginLogo,
} from './LoginBlock.styles';
import {
    MyFormTextField,
    MyPasswordForm,
    TextRed,
} from '../elements/TextField.styled';

type LoginBlockProps = {
  onSuccess: () => void;
};

export const useAppDispatch: () => AppDispatch = useDispatch;

export const LoginBlock = ({ onSuccess }: LoginBlockProps) => {
  const [login, { isFetching: isTokenFetching }] = useLazyLoginQuery();
  const [getUserInfo, { isFetching: isUserFetching }] = useLazyGetCurrentUserQuery();
  const dispatch = useAppDispatch();
  const isFetching = false;
  const formOptions: UseFormProps<LoginCredentialsDTO> = {
    mode: 'onChange',
    defaultValues: {
      username: 'admin',
      password: 'admin@bvbd',
    },
  };
  //react hook form
  const { 
    register,
    formState: { errors } 
  } = useForm<LoginCredentialsDTO>(formOptions);

  const onSubmit = async (data: LoginCredentialsDTO) => {
    console.log(data);
    const token = await login(data);
    console.log(token);
    onSuccess();
  };

  return (
    <StyledLoginContainer>
        <StyledLoginLogo>
            <img src={loginLogo} width="100%" height="100%" alt="logo" />
        </StyledLoginLogo>
        {/* <StyledMessage>
            <Zoom in={!!errorMessage}>
            <Typography color={theme.palette.error.light}>{errorMessage}</Typography>
            </Zoom>
        </StyledMessage> */}
        <StyledLoginForm<LoginCredentialsDTO>
        formOptions={formOptions}
        submitOnEnter
        onSubmit={onSubmit}
        renderInputs={({ onKeyDown }) => (
          <>
            <MyFormTextField
              {...register("username", {
                pattern: /^[a-zA-ZÀ-ỹ\s]+$/,
                minLength: {
                  value: 2,
                  message: "Tên đăng nhập tối thiểu 2 ký tự.",
                },
              })}
              required
              type="text"
              label="Tên đăng nhập"
              variant="outlined"
              onKeyDown={onKeyDown}
            />
            {errors.username && (<TextRed>{errors.username.message}</TextRed>)}
            <MyPasswordForm
              {...register("password", {
                pattern: /^[a-zA-ZÀ-ỹ\s]+$/,
                minLength: {
                  value: 6,
                  message: "Mật khẩu tối thiểu 6 ký tự.",
                },
              })}
              required
              type="password"
              label="Mật khẩu"
              variant="outlined"
              onKeyDown={onKeyDown}
            />
            {errors.password && (<TextRed>{errors.password.message}</TextRed>)}
          </>
        )}
        renderSubmit={({ submit }) => (
          <StyledLoginButton
            onClick={submit}
            variant="contained"
            disabled={isFetching}
          >
            ĐĂNG NHẬP
          </StyledLoginButton>
        )}
      />
      {/* Add your language switch button and technical support information */}
      <MyButton>{'Ngôn Ngữ'}</MyButton>
      <Typography>{`Technical Support: 0962.800.362`}</Typography>
    </StyledLoginContainer>
  );
};
