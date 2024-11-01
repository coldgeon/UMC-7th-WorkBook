import { useForm } from 'react-hook-form';
import { AuthWrapper, AuthForm, H2, Input, InputLabel, SubmitBtn } from '../signup/SignUp';

const Login = () => {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onValid = (data) => {
    console.log(data);
  };
  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit(onValid)}>
        <H2>로그인</H2>
        <Input
          {...register('email', {
            required: '이메일은 필수입니다! ',
            pattern: {
              value: /^[A-Za-z-0-9\-\.]+@[A-Ja-z-0-9\-\.]+\.[A-Ja-z-0-9]+$/,
              message: '옳바르지 않은 이메일 형식입니다.',
            },
            shouldFocus: true,
          })}
          placeholder="이메일을 입력해주세요!"
        ></Input>
        <InputLabel>{errors?.email?.message}</InputLabel>
        <Input
          {...register('pwd', {
            required: '비밀번호는 필수입니다! ',
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,12}$/,
              message: '옳바른 비밀번호를 입력해주세요!',
            },
            shouldFocus: true,
          })}
          placeholder="비밀번호를 입력해주세요!"
          type={'password'}
        ></Input>
        <InputLabel>{errors?.pwd?.message}</InputLabel>
        <SubmitBtn>가입하기</SubmitBtn>
      </AuthForm>
    </AuthWrapper>
  );
};

export default Login;
